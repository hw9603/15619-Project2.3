"use strict";

const awsServerlessExpress = require('aws-serverless-express')
const axios = require('axios')
const express = require("express");
const next = require('next')

const routes = require('./routes')
const config = require('./config')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)

const requestListener = express();

console.log(process.env)


app.setAssetPrefix('/dev/')

requestListener.use(
    '/s3',
    require('react-s3-uploader/s3router')({
        bucket: config.S3_ENDPOINTS.USER.INPUT_BUCKET,
        region: 'us-east-1', //optional
        headers: { 'Access-Control-Allow-Origin': '*' }, // optional
        ACL: 'public-read', // this is default
        uniquePrefix: false, // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
    })
    )
    .use('/searchproxy', (req, res, next) => {
        axios
            .get(
                `http://${req.query.searchEndpoint}/2013-01-01/search?q=${
                    req.query.q
                    }&size=${req.query.size}`
            )
            .then(
                response => {
                    res.status(200).send(response.data.hits)
                },
                error => {
                    console.error(`Error connecting to ${req.query.searchEndpoint}`)
                    res.status(200).send([])
                }
            )
    })
    .use('/s3proxy', (req, res, next) => {
        axios.get(`${config.STORAGE_DOMAIN}/${req.query.bucket}`).then(
            response => {
                res.status(200).send(response.data)
            },
            error => {
                console.error(`Error fetching from bucket ${req.query.bucket}`)
                res.status(200).send([])
            }
        )
    })
    .use(handle)

exports.handler = (event, context) =>
    awsServerlessExpress.proxy(
        awsServerlessExpress.createServer(requestListener),
        event,
        context
    );
