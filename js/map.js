$(function() {
	L.mapbox.accessToken = 'pk.eyJ1IjoibHVrZXJ1dGgiLCJhIjoid3FnZEE4OCJ9.T3DVEpTIs3XxKdhW5KCA6A';
	var map = L.mapbox.map('accident-map', 'examples.map-20v6611k').setView([38.915312, -77.056278], 14);
	var featureLayer = L.mapbox.featureLayer().loadURL('incidents.geojson').addTo(map);
});