let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
$.ajax({
  url: "https://ajw547.github.io/javascripting-english-major-project/greenwich-village.md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#content").html(html);
  }
});

let map, tileLayer;
map = L.map("the-village-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(map);
map.setView([40.73084, -73.99745], 14.5);

$.getJSON("https://ajw547.github.io/javascripting-english-major-project/project.geo.json", function(data){
let projectLayer, projectFeatures;
projectFeatures=data.features.map(function(feature){
  return{
    name:feature.properties.name,
    html:feature.properties.html,
    tab:feature.properties.tab,
    wikipedia:feature.properties.wikipedia,
    latLng:L.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0])
  };
});
});

let charlesStreetMarker;
charlesStreetMarker=L.marker([feature.latLng]);
