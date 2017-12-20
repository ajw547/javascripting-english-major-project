let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
$.ajax({
  url: "https://ajw547.github.io/javascripting-english-major-project/greenwich-village.md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#content").html(html);
    $("#content").html(function(_, oldHtml){
    let newHtml;
    newHtml = oldHtml.replace(/Charles Street/g, "<a href='#' data-place='charles-street'>Charles Street</a>");
    return newHtml;
  });
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
let projectLayer, projectFeatures, markerOnClick;
projectFeatures = data.features.map(function(feature){
  return{
    name:feature.properties.name,
    html:feature.properties.html,
    tab:feature.properties.tab,
    marker:feature.properties.marker,
    wikipedia:feature.properties.wikipedia,
    latLng:L.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0])
  };
});
  console.log(projectFeatures);
  projectLayer = L.featureGroup(projectFeatures.map(function(feature){
    // Create popups.
    // let popupContent, lines;
    // popupContent = "<h4>" + feature.name + "</h4>";
    // if (feature.lines.length > 1){
    //   lines = "lines " + feature.lines.join(" and ");
    // } else {
    //   lines = "line " + feature.lines[0];
    // }
    // popupContent = popupContent + "<p>" + feature.name + " is mentioned on " + lines + ".<br />";
    // popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.</p>";

    // Create circle markers.
    return L.marker(feature.latLng, {
      // Use square root because circle areas are proportional to r^2.
      //radius: 20,
      //color: "#d33682",
    //fillColor: "#d33682"
      // attach popupContent to the circleMarker as the popup.
    }).on("click", markerOnClick);
  function markerOnClick()
  {
    $("#markercontent").html(feature.marker);
  }
  }));
  projectLayer.addTo(map);
});
