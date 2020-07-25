//creating base map using google map 
var map;
    function initMap() {
        const maparea = document.getElementById("map");
        console.log(maparea)
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