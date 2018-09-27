module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.query.n || (req.body)) {
        context.res = {
            status: 200, /* Defaults to 200 */
            // body: "Hello " + (req.query.n || req.body.n)
            body: {
                "fibonacciNumber": computeFibonacci(req.query.n || req.body.n),
                "n": req.query.n || req.body.n
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

function computeFibonacci(number) {
    if (number === 0) return 0;
    if (number === 1 || number === 2) return 1;
    return computeFibonacci(number - 1) + computeFibonacci(number - 2);
}
