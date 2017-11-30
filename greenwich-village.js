let theVillageMap, tileLayer;
theVillageMap = L.map("the-village-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(theVillageMap);
theVillageMap.setView([40.72357, -73.99097], 14.5);

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

let charlesStreet, charlesStreetLine, charlesStreetMarker;
charlesStreet=[[40.73532, -74.00043],[40.73383, -74.01006]];
charlesStreetLine=L.polyline(charlesStreet, {color: "#BE3626"}
).addTo(theVillageMap);
 
