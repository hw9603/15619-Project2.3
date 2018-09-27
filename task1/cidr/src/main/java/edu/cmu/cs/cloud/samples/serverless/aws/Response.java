package edu.cmu.cs.cloud.samples.serverless.aws;

public class Response {
    String cidrSignature;
    String firstAddress;
    String lastAddress;
    Integer addressCount;

    public String getCidrSignature() {
        return cidrSignature;
    }

    public void setCidrSignature(String cidrSignature) {
        this.cidrSignature = cidrSignature;
    }

    public String getFirstAddress() {
        return firstAddress;
    }

    public void setFirstAddress(String firstAddress) {
        this.firstAddress = firstAddress;
    }

    public String getLastAddress() {
        return lastAddress;
    }

    public void setLastAddress(String lastAddress) {
        this.lastAddress = lastAddress;
    }

    public Integer getAddressCount() {
        return addressCount;
    }

    public void setAddressCount(Integer addressCount) {
        this.addressCount = addressCount;
    }

    /**
     * Response class constructor.
     */
    public Response(String cidrSignature,
                    String firstAddress,
                    String lastAddress,
                    Integer addressCount) {
        this.cidrSignature = cidrSignature;
        this.firstAddress = firstAddress;
        this.lastAddress = lastAddress;
        this.addressCount = addressCount;
    }

    public Response() {
    }
}