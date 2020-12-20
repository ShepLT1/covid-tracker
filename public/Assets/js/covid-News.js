
      $.ajax({
        url: "https://us-central1-covid-19-dashboard-e8d2b.cloudfunctions.net/getCovidNews",
        // If in development environment, use below url for testing in conjunction with firebase emulators.
        // url: "http://localhost:5001/covid-19-dashboard-e8d2b/us-central1/getCovidNews",
        method: "GET"
      }).then(function(response) {
        for (var i = 0; i < 3; i++) {
  $("#headline" + i).text(response.response.docs[i].headline.main);
  $("#description" + i).text(response.response.docs[i].abstract);
  $("#url" + i).attr("href",response.response.docs[i].web_url).text("Article Source");
  }
});
