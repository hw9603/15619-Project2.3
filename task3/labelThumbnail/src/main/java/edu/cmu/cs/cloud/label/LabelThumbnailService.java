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
import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;
import com.amazonaws.services.rekognition.model.AmazonRekognitionException;
import com.amazonaws.services.rekognition.model.DetectLabelsRequest;
import com.amazonaws.services.rekognition.model.DetectLabelsResult;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.Label;
import com.amazonaws.services.rekognition.model.S3Object;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

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
import java.util.List;
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
     * handleRequest function.
     */
    public String handleRequest(S3Event s3event, Context context) {
        try {
            S3EventNotificationRecord record = s3event.getRecords().get(0);
            String srcKey = record.getS3().getObject().getKey();
            AmazonS3 s3Client = new AmazonS3Client();
            String srcName = srcKey.split("\\.")[0];

            JSONObject documentJson = new JSONObject();
            documentJson.put("type", "add");
            documentJson.put("id", srcName);
            JSONObject field = new JSONObject();
            field.put("key", srcName);
            JSONArray labelsArray = new JSONArray();

            AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.defaultClient();
            String srcBucket = record.getS3().getBucket().getName();
            DetectLabelsRequest request = new DetectLabelsRequest()
                    .withImage(new Image()
                    .withS3Object(new S3Object()
                    .withName(srcKey).withBucket(srcBucket)));
            DetectLabelsResult detectLabelsResult = rekognitionClient.detectLabels(request);
            List<Label> labels = detectLabelsResult.getLabels();
            for (Label label: labels) {
                labelsArray.add(label.getName());
            }

            field.put("labels", labelsArray);
            documentJson.put("fields", field);
            String documentString = documentJson.toJSONString();
            documentString = "[" + documentString;
            documentString = documentString + "]";
            context.getLogger().log(documentString);

            InputStream document = new ByteArrayInputStream(documentString.getBytes());

            AWSCredentialsProvider credentialsProvider = new DefaultAWSCredentialsProviderChain();
            String endPoint = "http://doc-task3-domain-nguaqleuaujqdpfrwau5lalk2m."
                + "us-east-1.cloudsearch.amazonaws.com";
            AmazonCloudSearchDomainClient csClient = new AmazonCloudSearchDomainClient(
                credentialsProvider);
            csClient.setEndpoint(endPoint);

            UploadDocumentsRequest uploadDocumentsRequest = new UploadDocumentsRequest()
                .withDocuments(document)
                .withContentLength((long)document.available())
                .withContentType("application/json");
            UploadDocumentsResult uploadDocumentResult = csClient
                                            .uploadDocuments(uploadDocumentsRequest);

        } catch (IOException e) {
            context.getLogger().log(e.getMessage());
        } catch (NullPointerException e) {
            context.getLogger().log(e.getMessage());
        } catch (IndexOutOfBoundsException e) {
            context.getLogger().log(e.getMessage());
        } catch (AmazonRekognitionException e) {
            context.getLogger().log(e.getMessage());
        }

        return "OK";
    }
}