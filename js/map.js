// Wrap the code in a function for better encapsulation
function initializeMap() {
  var map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Fetch and parse the CSV file
  Papa.parse("../db/collection.csv", {
    download: true,
    header: true,
    complete: function(results) {
      console.log("CSV file successfully parsed:", results);

      // Process the parsed CSV data and add markers to the map
      var data = results.data;
      data.forEach(function(item) {
        var name = item.name;
        var lat = parseFloat(item.latitude);
        var lng = parseFloat(item.longitude);
        var description = item.description;

        var marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup("<b>" + name + "</b><br>" + description);
      });
    },
    error: function(error) {
      console.log("Error parsing CSV file:", error);
    }
  });

  // Function to handle geolocation success
  function success(position) {
    console.log("Geolocation successful:", position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    map.setView([lat, lng], 13);

    // Create a marker at the user's location
    L.marker([lat, lng]).addTo(map);
  }

  // Function to handle geolocation error
  function error(error) {
    console.log("Error accessing geolocation:", error);
  }

  // Call the geolocation API to get the user's location
  navigator.geolocation.getCurrentPosition(success, error);
}

// Call the initializeMap function when the page has finished loading
window.addEventListener("load", initializeMap);
