// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
exports.handler = function (event, context, callback) {
    console.log('queryStringParameters', event.queryStringParameters)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Hello, World!' }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
        },
    })
}