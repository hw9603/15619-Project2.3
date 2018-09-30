package edu.cmu.cs.cloud.label;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.auth.DefaultAWSCredentialsProviderChain;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.cloudsearchdomain.AmazonCloudSearchDomain;
import com.amazonaws.services.cloudsearchdomain.AmazonCloudSearchDomainClient;
import com.amazonaws.services.cloudsearchdomain.AmazonCloudSearchDomainClientBuilder;
import com.amazonaws.services.cloudsearchdomain.model.UploadDocumentsRequest;
import com.amazonaws.services.cloudsearchdomain.model.UploadDocumentsResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.LambdaRuntime;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.events.SNSEvent;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.IndexOutOfBoundsException;
import java.lang.InterruptedException;
import java.lang.Process;
import java.lang.Runtime;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Iterator;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class LabelThumbnailService implements RequestHandler<S3Event, String> {

    /**
     * handleRequest function
     */
    public String handleRequest(S3Event s3event, Context context) {
        try {
            S3EventNotificationRecord record = s3event.getRecords().get(0);
            String srcBucket = record.getS3().getBucket().getName();
            String srcKey = record.getS3().getObject().getKey();
            AmazonS3 s3Client = new AmazonS3Client();
            S3Object s3Object = s3Client.getObject(new GetObjectRequest(
                    srcBucket, srcKey));


            // AWSCredentialsProvider credentialsProvider = new DefaultAWSCredentialsProviderChain();
            BasicAWSCredentials awsCreds = new BasicAWSCredentials("AKIAJRZL5C3DD4ELGECA", "DqONcQylceRrNpmArw5+8+VHmxj3G1hHV0y8+uQE");
            String endPoint = "http://doc-task3-domain-nguaqleuaujqdpfrwau5lalk2m.us-east-1.cloudsearch.amazonaws.com";
            // AmazonCloudSearchDomain csClient = AmazonCloudSearchDomainClientBuilder
            //     .standard()
            //     .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
            //     .withEndpointConfiguration(
            //         new EndpointConfiguration(endPoint, "us-east-1"))
            //     .build();
            AmazonCloudSearchDomainClient csClient = new AmazonCloudSearchDomainClient(
                new AWSStaticCredentialsProvider(awsCreds));
            csClient.setEndpoint(endPoint);


            JSONObject documentJson = new JSONObject();
            documentJson.put("type", "add");
            documentJson.put("id", "test-thumbnail"); // change
            JSONObject field = new JSONObject();
            field.put("key", "test-thumbnail"); // change
            JSONArray labels = new JSONArray();
            labels.add("hello"); // change
            labels.add("hi"); // change
            labels.add("label 3"); // change
            field.put("labels", labels);
            documentJson.put("fields", field);

            String documentString = documentJson.toJSONString();
            documentString = "[" + documentString;
            documentString = documentString + "]";
            context.getLogger().log(documentString);

            InputStream document = new ByteArrayInputStream(documentString.getBytes());


            UploadDocumentsRequest uploadDocumentsRequest = new UploadDocumentsRequest()
                .withDocuments(document)
                .withContentLength((long)document.available())
                .withContentType("application/json");
            UploadDocumentsResult result = csClient.uploadDocuments(uploadDocumentsRequest);


        // } catch (ParseException e) {
        //     context.getLogger().log(e.getMessage());
        } catch (IOException e) {
            context.getLogger().log(e.getMessage());
        } catch (NullPointerException e) {
            context.getLogger().log(e.getMessage());
        // } catch (InterruptedException e) {
        //     context.getLogger().log(e.getMessage());
        } catch (IndexOutOfBoundsException e) {
            context.getLogger().log(e.getMessage());
        }


        return "OK";
    }
}