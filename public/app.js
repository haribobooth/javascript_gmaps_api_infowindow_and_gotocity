var initialize = function(){

  var container = document.querySelector('#main-map');
  var center = {lat: 51.5, lng: -0.129};
  var zoom = 10;
  var mainMap = new MapWrapper(center, zoom, container);
  var button = document.querySelector('button');
  console.log(button);

  mainMap.addMarker(center);
  mainMap.addClickEvent();

  button.onclick = mainMap.gotoLondon.bind(mainMap);

};

window.onload = initialize;
