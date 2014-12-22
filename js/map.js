$(function() {
	L.mapbox.accessToken = 'pk.eyJ1IjoibHVrZXJ1dGgiLCJhIjoid3FnZEE4OCJ9.T3DVEpTIs3XxKdhW5KCA6A';
	var url = 'https://api.github.com/repos/kennyshin/chris-accident-tracker/contents/incidents.geojson';
	var map = L.mapbox.map('accident-map', 'examples.map-20v6611k').setView([38.915312, -77.056278], 14);
	var accidentLayer = L.mapbox.featureLayer().addTo(map);

	function load() {
		$.ajax({
		    headers: {
		      'Accept': 'application/vnd.github.v3.raw'
		    },
		    xhrFields: {
		      withCredentials: false
		    },
		    dataType: 'json',
		    url: url,
		    success: function(geojson) {
		    	console.log(geojson);
		    	accidentLayer.setGeoJSON(geojson);
		    }
		  });
	}

	accidentLayer.on('layeradd', function(e) {
		var marker = e.layer,
			feature = marker.feature;

		var popupContent = '<p><strong>Date: </strong>' + feature.properties["Date"] + '</p>' +
			'<p><strong>Incident Description: </strong>' + feature.properties["Incident Description"] + '</p>' +
			'<p><strong>Result: </strong>' + feature.properties["Result"] + '</p>' +
			'<p><strong>Lesson Learned: </strong> ' + feature.properties["Lesson Learned"] + '</p>';

		marker.bindPopup(popupContent,{
			closeButton: false,
			minWidth: 320
		});
	});

	$(load);
});