// Detect if the browser is not Google Chrome
var isNotChrome = !(navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function (brand) {
  return brand.brand === 'Google Chrome';
}));

// Display a message based on the browser
if (isNotChrome) {
  var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
  alert(message);
  console.log("The web browser is not Google Chrome.");
} else {
  console.log("The web browser is Google Chrome.");
}
