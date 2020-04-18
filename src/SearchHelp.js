import React from 'react'

function SearchHelp() {
    return <div className="SearchHelp">
        <p>Hit ENTER to initiate search</p>
        <p>Use the following operators to improve your search!</p>
        <div>Operator: from:alexiskold | Finds tweets: sent from person "alexiskold."</div>
        <div>Operator: to:techcrunch | Finds tweets: sent to person "techcrunch."</div>
        <div>Operator: "happy hour" | Finds tweets: containing the exact phrase "happy hour."</div>
        <div>Operator: love OR hate | Finds tweets: containing either "love" or "hate" (or both).</div>
        <div>Operator: beer -root | Finds tweets: containing "beer" but not "root."</div>
        <div>Operator: #haiku | Finds tweets: containing the hashtag "haiku."</div>
        <div>Operator: @mashable | Finds tweets: Referencing person "mashable."</div>
        <div>Operator: "happy hour" near:"san francisco" | Finds tweets: containing the exact phrase "happy hour" and sent near "san francisco."</div>
        <div>Operator: superhero since:2010-12-27 | Finds tweets: containing "superhero" and sent since date "2010-12-27" (year-month-day).</div>
        <div>Operator: ftw until:2010-12-27 | Finds tweets: containing "ftw" and sent up to date "2010-12-27."</div>
        <div>Operator: movie -scary :) | Finds tweets: containing "movie", but not "scary," and with a positive attitude.</div>
        <div>Operator: flight :( | Finds tweets: containing "flight" and with a negative attitude.</div>
        <div>Operator: traffic ? | Finds tweets: containing "traffic" and asking a question.</div>
        <div>Operator: hilarious filter:links | Finds tweets: containing "hilarious" and linking to URLs.</div>
        <div>Operator: news source:twitterfeed | Finds tweets: containing "news" and entered via TwitterFeed</div>
        <a href="https://lifehacker.com/search-twitter-more-efficiently-with-these-search-opera-1598165519" target="help">more info</a>
    </div>
}

export default SearchHelp;