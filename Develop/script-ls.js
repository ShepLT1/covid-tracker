$(document).ready(function() {



    var queryURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/current.json";

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {

        console.log(response);

    })

    

})