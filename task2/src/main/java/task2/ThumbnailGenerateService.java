package task2;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.LambdaRuntime;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.SNSEvent;
import com.amazonaws.services.lambda.runtime.events.S3Event;
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

public class ThumbnailGenerateService implements RequestHandler<SNSEvent, String> {
    LambdaLogger lambdaLogger = LambdaRuntime.getLogger();

    public String handleRequest(SNSEvent request, Context context) {

        try {
            int recordId = 0;
            while (true) {
                if (request.getRecords().get(recordId) == null) break;
                String message = request.getRecords().get(recordId).getSNS().getMessage();
                recordId = recordId + 1;
                context.getLogger().log(message);

                JSONParser jsonParser = new JSONParser();
                JSONObject jsonObject = (JSONObject)jsonParser.parse(message);
                JSONArray records = (JSONArray)jsonObject.get("Records");
                Iterator<JSONObject> iterator = records.iterator();
                AmazonS3 s3Client = new AmazonS3Client();
                s3Client.getObject(new GetObjectRequest(
                        "wenhe-ffmpeg", "ffmpeg"), new File("/tmp/ffmpeg"));

                while (iterator.hasNext()) {
                    TimeUnit.SECONDS.sleep(5);
                    JSONObject s3 = (JSONObject)((JSONObject)iterator.next()).get("s3");
                    JSONObject bucket = (JSONObject)s3.get("bucket");
                    JSONObject object = (JSONObject)s3.get("object");

                    String srcBucket = (String)bucket.get("name");
                    context.getLogger().log(srcBucket);
                    String srcKey = (String)object.get("key");
                    context.getLogger().log(srcKey);

                    s3Client.getObject(new GetObjectRequest(
                        srcBucket, srcKey), new File("/tmp/" + srcKey));

                    String keyName = srcKey.split("\\.")[0];
                    String keyExtension = srcKey.split("\\.")[1];

                    Runtime rt = Runtime.getRuntime();

                    context.getLogger().log("/tmp/ffmpeg -i /tmp/" + srcKey + " -y -vf fps=1 /tmp/"
                        + keyName + "_%d.png");
                    rt.exec("chmod 777 /tmp/ffmpeg");

                    String[] command = { "/bin/bash", "-c", "/tmp/ffmpeg -i /tmp/" + srcKey
                        + " -y -vf fps=1 /tmp/" + keyName + "_%d.png"};
                    Process ps = rt.exec(command);

                    BufferedReader stdInput = new BufferedReader(new
                         InputStreamReader(ps.getInputStream()));

                    BufferedReader stdError = new BufferedReader(new
                         InputStreamReader(ps.getErrorStream()));

                    // read the output from the command
                    context.getLogger().log("Here is the standard output of the command:\n");
                    String s = null;
                    while ((s = stdInput.readLine()) != null) {
                        context.getLogger().log(s);
                    }

                    // read any errors from the attempted command
                    System.out.println("Here is the standard error of the command (if any):\n");
                    while ((s = stdError.readLine()) != null) {
                        context.getLogger().log(s);
                    }


                    context.getLogger().log("execute ffmpeg.");

                    String dstBucket = "wenhe-thumbnail-bucket";

                    context.getLogger().log("find files...");
                    File currDir = new File("/tmp/");
                    File[] files = currDir.listFiles();
                    for (File f : files) {
                        if (f.isFile() && f.getName().startsWith(keyName + "_")) {
                            context.getLogger().log(f.getName());
                            s3Client.putObject(new PutObjectRequest(
                                dstBucket, f.getName(), new File("/tmp/" + f.getName())));
                            context.getLogger().log("PUT!!");
                        }
                    }
                    context.getLogger().log("Put all files in " + dstBucket);
                }
            }

        } catch (ParseException e) {
            context.getLogger().log(e.getMessage());
        } catch (IOException e) {
            context.getLogger().log(e.getMessage());
        } catch (NullPointerException e) {
            context.getLogger().log(e.getMessage());
        } catch (InterruptedException e) {
            context.getLogger().log(e.getMessage());
        } catch (IndexOutOfBoundsException e) {
            context.getLogger().log(e.getMessage());
        }

        return "OK";
    }
}