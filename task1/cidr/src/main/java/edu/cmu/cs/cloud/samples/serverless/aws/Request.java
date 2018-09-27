package edu.cmu.cs.cloud.samples.serverless.aws;

public class Request {
    String cidrSignature;

    public String getCidrSignature() {
        return cidrSignature;
    }

    public void setCidrSignature(String cidrSignature) {
        this.cidrSignature = cidrSignature;
    }

    public Request(String cidrSignature) {
        this.cidrSignature = cidrSignature;
    }

    public Request() {
    }
}
