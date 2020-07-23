// Use Track for map data

// Use Postman for news

// Twitter API for tweets

$(document).ready(function() {

    var settings = {
        "url": "https://api.twitter.com/1.1/search/tweets.json?q=COVID-19&count=10",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "OAuth oauth_consumer_key=\"9PzN4qeIHmdwvPtBnO62Q2N6z\",oauth_token=\"2251117118-uvfnwACTD0MItpipnpjbsE91I7w8ThDsjy6DEdc\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1595538507\",oauth_nonce=\"PUPnICUozuL\",oauth_version=\"1.0\",oauth_signature=\"gaPh5ykdwoConJVr8hJm9IXRMW4%3D\"",
            "Access-Control-Allow-Origin": "https://sheplt1.github.io/covid-tracker/",
            "Vary": "Origin"
        },
        };
        
    $.ajax(settings).done(function (response) {
    console.log(response);
    });

})