let theVillageMap, tileLayer;
theVillageMap = L.map("the-village-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(theVillageMap);
theVillageMap.setView([40.73084, -73.99745], 14.5);

let projectFeatures;
$.getJSON("https://ajw547.github.io/javascripting-english-major-project/greenwich-village.geo.json",function(data){

  projectFeatures=data.features.map(function(feature){
    return{
      name:feature.properties.name,
      html:feature.properties.html,
      tab:feature.properties.tab,
      wikipedia:feature.properties.wikipedia,
      latLng:L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
   });
   let projectLayer = L.featureGroup(projectFeatures.map(function(feature){
     return L.marker(feature.latLng);
     })
   );
  projectLayer.addTo(theVillageMap);
 });
