package edu.cmu.cs.cloud.samples.serverless.aws;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.LambdaRuntime;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import java.util.Map;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import org.apache.commons.net.util.SubnetUtils;
import org.json.simple.JSONObject;

public class CIDRSignature implements RequestHandler<Map<String, String>, String> {

    LambdaLogger lambdaLogger = LambdaRuntime.getLogger();

    public String handleRequest(Map<String, String> input, Context context) {
        String cidrSignature = input.get("cidrSignature");
        lambdaLogger.log("CIDR Signature: " + cidrSignature);
        SubnetUtils subnetUtils = new SubnetUtils(cidrSignature);
        subnetUtils.setInclusiveHostCount(true);

        String firstAddr = subnetUtils.getInfo().getLowAddress();
        String lastAddr = subnetUtils.getInfo().getHighAddress();
        Integer addrCount = subnetUtils.getInfo().getAddressCount();

        // JSONObject jsonObject = new JSONObject();
        // jsonObject.put("cidrSignature", cidrSignature);
        // jsonObject.put("firstAddress", firstAddr);
        // jsonObject.put("lastAddress", lastAddr);
        // jsonObject.put("addressCount", addrCount);




        // StringWriter stringWriter = new StringWriter();
        // try {
        //     jsonObject.writeJSONString(stringWriter);
        // } catch (IOException e) {
        //     e.printStackTrace();
        // }

        // String output = stringWriter.toString();

        JsonFactory jsonFactory = new JsonFactory();
        StringWriter writer = new StringWriter();

        try {
            JsonGenerator jsonGenerator = jsonFactory.createJsonGenerator(writer);
            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("cidrSignature", cidrSignature);
            jsonGenerator.writeStringField("firstAddress", firstAddr);
            jsonGenerator.writeStringField("lastAddress", lastAddr);
            jsonGenerator.writeNumberField("addressCount", addrCount);
            jsonGenerator.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String output = writer.toString();

        return output;
    }

}
