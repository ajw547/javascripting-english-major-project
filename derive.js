let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
firstMap.setView([40.72357, -73.99097], 14.5);
let derive1Start, derive2Start, thousandth1, thousandth2, thousandthPolyline1, thousandthPolyline2;
let derive1Coords, derive2Coords;
derive1Coords=L.latLng(40.72292, -73.97990);
derive2Coords=L.latLng(40.72191, -74.00721);
derive1Start=L.marker([40.72292, -73.97990]);
derive2Start=L.marker([40.72191, -74.00721]);
derive1Start.addTo(firstMap);
derive2Start.addTo(firstMap);
derive1Start.bindPopup("This is the starting point of my first dérive.");
derive2Start.bindPopup("This is the starting point of my second dérive.");
thousandth1 = [[derive1Coords.lat, derive1Coords.lng], [40.72228, -73.98024], [40.72326, -73.98250],[40.72270, -73.98294],[40.72168, -73.98062],[40.72101, -73.98111],[40.72300, -73.98578],[40.72365, -73.98529],
[40.72636, -73.99170],[40.72520, -73.99213],[40.72589, -73.99460],[40.72651, -73.99582],[40.72844, -73.99427],[40.72789, -73.99317]];
thousandthPolyline1 = L.polyline(thousandth1, {color: "#CB92F1"}
).addTo(firstMap);
thousandth2 = [[derive2Coords.lat, derive2Coords.lng], [40.72171, -74.00512],[40.72373, -74.00795],[40.72521, -74.00765],[40.72506, -74.00598],[40.72263, -74.00630],[40.72196, -74.00537],[40.72302, -74.00505],
[40.72242, -74.00378],[40.72456, -74.00196],[40.72418, -74.00110],[40.72197, -74.00295],[40.72089, -74.00067],[40.72301, -73.99877],[40.72417, -74.00105],[40.72649, -73.99921],
[40.72724, -74.00067],[40.72614, -74.00157],[40.72697, -74.00339],[40.72554, -74.00399],[40.72567, -74.00569],[40.72858, -74.00529],[40.72836, -74.00285]];
thousandthPolyline2 = L.polyline(thousandth2, {color: "#10ECA3"}
).addTo(firstMap);
let derive1End, derive2End;
derive1End=L.marker([40.72786, -73.99316]);
derive2End=L.marker([40.72837, -74.00285]);
derive1End.addTo(firstMap);
derive2End.addTo(firstMap);
derive1End.bindPopup("This is the ending point of my first dérive.");
derive2End.bindPopup("This is the ending point of my second dérive.");
