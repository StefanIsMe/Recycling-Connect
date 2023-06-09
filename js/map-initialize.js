// Wrap the code in a function for better encapsulation
function initializeMap() {
  // Make the map variable global
  map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);
}

// Call the initializeMap function when the page has finished loading
window.addEventListener("load", initializeMap);
