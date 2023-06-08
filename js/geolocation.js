// Function to handle geolocation success
function success(position) {
  console.log("Geolocation successful:", position);

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  console.log("Latitude: " + lat + ", Longitude: " + lng);

  map.setView([lat, lng], 13);
}

// Function to handle geolocation error
function error(error) {
  console.log("Error accessing geolocation:", error);
}

// The following code can be removed from geolocation.js as it should be triggered by the button click event
// Call the geolocation API to get the user's location
// navigator.geolocation.getCurrentPosition(success, error);
