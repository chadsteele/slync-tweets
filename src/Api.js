import config from './config'


/*
https://chadsteele-slync-twitter-client.netlify.app/.netlify/functions/tweets

    const q = event.queryStringParameters.q || '*';
    const count = event.queryStringParameters.count || 20;
    const type = event.queryStringParameters.type || 'recent';
*/

// returns live data from url (default url in config)
class Api {
    async fetch(q, count, url) {
        q = q || '*';
        count = count || 20;

        url = url || config.api;
        url += `?q=${q}&count=${count}`;

        const response = await fetch(url);
        return response.json();
    }
}

export default new Api();