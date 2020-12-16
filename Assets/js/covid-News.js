
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=zwTTbmJ5qOaMBpuLewVNJVUUyesekUNa";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        for (var i = 0; i < 3; i++) {
    
  $("#headline" + i).text(response.response.docs[i].headline.main);

      console.log(response.response.docs[i].headline.main);

 $("#description" + i).text(response.response.docs[i].abstract);
      
      console.log(response.response.docs[i].abstract);

  $("#url" + i).attr("href",response.response.docs[i].web_url).text("Article Source");

      console.log(response.response.docs[i].web_url);
  }
});
