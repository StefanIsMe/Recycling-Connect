// Fetch and parse the CSV file
Papa.parse("../db/collection.csv", {
  download: true,
  header: true,
  complete: function(results) {
    console.log("CSV file successfully parsed:", results);

    // Process the parsed CSV data and add markers to the map
    var data = results.data;
    initializeMap(data);
  },
  error: function(error) {
    console.log("Error parsing CSV file:", error);
  }
});

function initializeMap(data) {
  // Check if the map variable is defined and valid
  if (typeof map !== "undefined" && map !== null) {
    data.forEach(function(item) {
      var name = item.name;
      var lat = parseFloat(item.latitude);
      var lng = parseFloat(item.longitude);
      var description = item.description;

      var marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup("<b>" + name + "</b><br>" + description);
      console.log("Map data is initialized.");
    });
  } else {
    console.log("Map is not initialized.");
  }
}
