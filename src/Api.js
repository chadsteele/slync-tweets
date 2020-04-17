import config from './config'


/*
https://chadsteele-slync-twitter-client.netlify.app/.netlify/functions/tweets

    const q = event.queryStringParameters.q || '*';
    const count = event.queryStringParameters.count || 20;
    const type = event.queryStringParameters.type || 'recent';
*/

// returns live data from url (default url in config)
class Api {
    fetch(url, q) {
        url = url || config.api;
        if (q) url += '?q=' + q;

        return fetch(url)
            .then((response) => {
                return response.json();
            });
    }
}

export default new Api();