// Function to handle geolocation success
function success(position) {
  console.log("Geolocation successful:", position);

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  // Center the map on the user's location
  map.setView([lat, lng], 13);
}

// Function to handle geolocation error
function error(error) {
  console.log("Error accessing geolocation:", error);
}

// Call the geolocation API to get the user's location
navigator.geolocation.getCurrentPosition(success, error);
