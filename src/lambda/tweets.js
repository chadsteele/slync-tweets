
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var lastStamp = 0;

exports.handler = function (event, context, callback) {
    const q = event.queryStringParameters.q || '*';
    const count = event.queryStringParameters.count || 20;
    const type = event.queryStringParameters.type || 'recent';
    const screen_name = event.queryStringParameters.screen_name || null);

    // Set up your search parameters
    var params = {
        q: q,
        count: count,
        result_type: type,
        lang: 'en'
    }
    if (screen_name) params.screen_name = screen_name;

    const path = (screen_name) ? "statuses/user_timeline" : "search/tweets";

    // Initiate your search using the above paramaters
    T.get(path, params, function (err, data, response) {
        // If there is no error, proceed
        if (!err) {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(data.statuses),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers':
                        'Origin, X-Requested-With, Content-Type, Accept',
                },
            });
        } else {
            callback(null, {
                statusCode: 400,
                body: JSON.stringify(err),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers':
                        'Origin, X-Requested-With, Content-Type, Accept',
                },
            });
        }
    });
}
