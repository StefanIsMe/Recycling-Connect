// Function to center the map on the user's location
function centerMapOnLocation() {
  // Call the geolocation API to get the user's location
  navigator.geolocation.getCurrentPosition(success, error);
}

// Function to handle geolocation success
function success(position) {
  console.log("Geolocation successful:", position);

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  // Center the map on the user's location
  map.setView([lat, lng], 13);
  
    // Add a marker at the user's location
  L.marker([lat, lng]).addTo(map).bindPopup("You are here!");
}

// Function to handle geolocation error
function error(error) {
  console.log("Error accessing geolocation:", error);
}

// Call the geolocation API to get the user's location
navigator.geolocation.getCurrentPosition(success, error);
