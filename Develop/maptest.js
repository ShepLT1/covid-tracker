//creating base map using google map 
var map;
    function initMap() {
        const maparea = document.getElementById("map");
        // console.log(maparea)
        map = new google.maps.Map(maparea, {
        zoom: 4,
        center: {lat: 39.5, lng: -98.35},
        mapTypeId: 'terrain'
      });
//calling api using AJAX 
    var queryURL = "https://www.trackcorona.live/api/cities";
    $.ajax({
      type: "GET",
      url: queryURL,
      dataType: "json",
      success: function (response) {
        for (var i = 0; i < response.data.length; i++) {
          var lat = response.data[i]?.latitude;
          var long = response.data[i]?.longitude;
          var latLng = new google.maps.LatLng(lat, long);
          var radiuscon = response.data[i]?.confirmed / 2;
//creating circle on the map
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: latLng,
      radius: radiuscon,
      title: response.data[i]?.location,
      content: ["Confirmed Cases: " + response.data[i]?.confirmed,
                "Death: " + response.data[i]?.dead]
      }); 
      var infoWindow= new google.maps.InfoWindow({content: ""});
//add a click event to the circle
google.maps.event.addListener(cityCircle, 'click', function(ev){
  infoWindow.setContent('<h3>'+this.title+'</h3>' + "<div>"+this.content[0] +"<br>"+this.content[1]+"</div>");
    infoWindow.setPosition(cityCircle.getCenter());
    infoWindow.open(map);
});
    }
  }
  });
}

//creating array for state coordinates
var states = [
  {state: "al",
    latitude: 32.834722,
    longitude: -86.633333},
  {state: "ak",
    latitude: 64.731667,
    longitude: -152.47},
  {state: "az",
    latitude: 34.048927,
    longitude: -111.093735},
  {state: "ar", 
    latitude: 34.799999,
    longitude: -92.199997},
  {state: "ca", 
    latitude: 37.166111,
    longitude: -119.449444},
  {state: "co",
    latitude: 39.5500507,
    longitude: -105.7820674},
  {state: "ct", 
    latitude: 41.599998,
    longitude: -72.699997},
  {state: "de",
    latitude: 38.98,
    longitude: -75.511667},
  {state: "fl",
    latitude: 28.681389,
    longitude: -82.46},
  {state: "ga",
    latitude: 32.662111,
    longitude: -83.438306},
  {state: "hi", 
    latitude: 19.741755,
    longitude: -155.844437},
  {state: "id", 
    latitude: 44.068203,
    longitude: -114.742043},
  {state: "il", 
    latitude: 39.739306,
    longitude: -89.503639},
  {state: "in", 
    latitude: 39.766028,
    longitude: -86.44127},
  {state: "ia", 
    longitude: 42.032974,
    latitude: -93.581543},
  {state: "ks",
    latitude: 38.500000,
    longitude: -98.000000},
  {state: "ky",
    latitude: 7.839333,
    longitude: -84.270020},
  {state: "la",
    latitude: 30.391830,
    longitude: -92.329102},
  {state: "me", 
    latitude: 45.253333,
    longitude: -69.233333},
  {state: "md", 
    latitude: 39.045753,
    longitude: -76.641273},
  {state: "ma", 
    latitude: 42.377117,
    longitude: -71.925258},
  {state: "mi", 
    latitude: 44.3467, 
    longitude: -85.4102},
  {state: "mn",
    latitude: 46.2807, 
    longitude: -94.3053	
  },
  {state: "ms", 
    latitude: 32.7364, 
    longitude: -89.6678},
  {state: "mo",
    latitude: 38.3566, 
    longitude: -92.458},
  {state: "mt", 
    latitude: 47.0527, 
    longitude: -109.6333},
  {state: "ne",
    latitude: 41.5378, 
    longitude: -99.7951},
  {state: "nv", 
    latitude: 39.3289, 
    longitude: -116.6312},
  {state: "nh",
    latitude: 43.6805, 
    longitude: -71.5811	
  },
  {state: "nj",
    latitude: 40.1907, 
    longitude: -74.6728},
  {state: "nm", 
    latitude: 34.4071, 
    longitude: -106.1126	
  },
  {state: "ny",
    latitude: 40.7127753,
    longitude: -74.0059728},
  {state: "nc",
    latitude: 35.5557, 
    longitude: -79.3877},
  {state: "nd",
    latitude: 47.4501, 
    longitude: -100.4659},
  {state: "oh", 
    latitude: 0.2862, 
    longitude: -82.7937},
  {state: "ok",
    latitude: 35.5889, 
    longitude: -97.4943},
  {state: "or",
    latitude: 43.9336, 
    longitude: -120.5583},
  {state: "pa", 
    latitude: 40.8781, 
    longitude: -77.7996},
  {state: "ri", 
    latitude: 41.6762, 
    longitude: -71.5562},
  {state: "sc", 
    latitude: 33.9169, 
    longitude: -80.8964},
  {state: "sd",
    latitude: 44.4443, 
    longitude: -100.2263},
  {state: "tn",
    latitude: 35.858, 
    longitude:-86.3505},
  {state: "tx", 
    latitude: 31.4757, 
    longitude: -99.3312},
  {state: "ut", 
    latitude: 39.3055, 
    longitude: -111.6703},
  {state: "vt",
    latitude: 44.0687, 
    longitude: -72.6658},
  {state: "va", 
    latitude: 37.5215, 
    longitude: -78.8537},
  {state: "wa",
    latitude: 47.3826, 
    longitude: -120.4472},
  {state: "wv",
    latitude: 38.6409, 
    longitude: -80.6227},
  {state: "wi",
    latitude: 44.6243, 
    longitude: -89.9941},
  {state: "wy",
    latitude: 42.9957, 
    longitude: -107.5512}
  ]

  //function and eventlistener to reset center of map on selected state
$(".selector-dropdown").on("click",function(event) {

  var stateAbr = $(this).attr("data-state-abbr");

  localStorage.setItem("Abbreviation", "states/" + stateAbr);

  for (var i = 0; i < states.length; i++) {
    var lat = states[i].latitude;
    var lng = states[i].longitude;

    if (stateAbr === states[i].state) {
    map.setZoom(6);
    map.setCenter(new google.maps.LatLng(lat, lng));
    }
  //eventlisterner for country button to display whole us 
  $(".selector-dropdown-country").on("click", function(event) {
    map.setZoom(4);
    map.setCenter(new google.maps.LatLng(39.5, -98.35)); 
  })
  }
});
