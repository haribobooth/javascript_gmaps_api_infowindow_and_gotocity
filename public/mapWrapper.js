var MapWrapper = function(coords, zoom, container){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.infoWindow = new google.maps.InfoWindow({
    content: "The approximate centre of London"
  });
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infoWindow = new google.maps.InfoWindow({
      content: "Lat: " + marker.position.lat().toFixed(5) + ", Lng: " + marker.position.lng().toFixed(5),
    });
    google.maps.event.addListener(marker, 'click', function(event){
      infoWindow.open(this.googleMap, marker);
    })
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addMarker(event.latLng);
    }.bind(this));
  },

  gotoLondon: function(){
    var london = {lat: 51.5, lng: -0.129};
    this.googleMap.setCenter(london);
  }
}
