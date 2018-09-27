package edu.cmu.cs.cloud.samples.serverless.aws;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.LambdaRuntime;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.commons.net.util.SubnetUtils;

public class CidrSignature implements RequestHandler<Request, Response> {

    LambdaLogger lambdaLogger = LambdaRuntime.getLogger();

    /**
     * handRequest function.
     */
    public Response handleRequest(Request input, Context context) {
        String cidrSignature = input.cidrSignature;
        lambdaLogger.log("CIDR Signature: " + cidrSignature);
        SubnetUtils subnetUtils = new SubnetUtils(cidrSignature);
        subnetUtils.setInclusiveHostCount(true);

        String firstAddr = subnetUtils.getInfo().getLowAddress();
        String lastAddr = subnetUtils.getInfo().getHighAddress();
        Integer addrCount = subnetUtils.getInfo().getAddressCount();

        return new Response(cidrSignature, firstAddr, lastAddr, addrCount);
    }

}
