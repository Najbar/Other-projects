var map = L.map('map').setView([52.232222, 21.008333], 12);

var street = L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18  
}).addTo(map);
var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var kom = [m1, m2, tram, s1, s2, s3, s9, wkd, m2p, m3];
var overlay = [];
addOverlay(kom);

function addOverlay (array) {
  var Icon = L.Icon.extend({iconUrl: null});
  for (var i = 0; i < array.length; i++) {
    overlay[i] = L.geoJson(array[i], {
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.Name)
      },
      style: function(feature) {
        switch (feature.properties.etap) {
          case 'gotowy': return {color: '#3ff500', 'opacity': 0.5, 'weight': 8}
          case 'budowa': return {color: 'red', 'opacity': 0.5, 'weight': 8}
          case 'umowa': return {color: 'orange', 'opacity': 0.5, 'weight': 8}
          case 'plan': return {color: 'blue', 'opacity': 0.5, 'weight': 8}
          case 'kol': return {color: 'black', 'opacity': 0.5, 'weight': 6}
          case 'tr': return {color: 'purple', 'opacity': 0.5, 'weight': 4}
        }
      },
      pointToLayer: function(feature, latLng) {
          switch (feature.properties.rodzaj) {
            case 'metro': return new L.Marker(latLng, {icon: new Icon({iconUrl: 'img/metro24.png'})})
            case 'wkd': return new L.Marker(latLng, {icon: new Icon({iconUrl: 'img/wkd24.png'})})
            case 'skm': return new L.Marker(latLng, {icon: new Icon({iconUrl: 'img/skm24.png'})})
          }
      }
    })
  }
}
  var baseLayers = {
    "Streets": street,
    "Hybrid": googleHybrid,
    "Satellite": googleSat
  }
  var overlays = {
    "M1": overlay[0],
    "M2": overlay[1],
    "Tramwaje": overlay[2],
    "S1": overlay[3],
    "S2": overlay[4],
    "S3": overlay[5],
    "S9": overlay[6],
    "WKD": overlay[7]
  };

var kom = [m1, m2, m3, tram, s1, s2, s3, s9, wkd, m2p];

   var overlaysp = {
    "M2 rozbudowa": overlay[8],
    "M3 planowana": overlay[9]    
  };

L.control.layers(baseLayers, overlays).addTo(map);
L.control.layers(null, overlaysp).addTo(map);