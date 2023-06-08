// Detect if the browser is Microsoft Edge
var isEdge = window.navigator.userAgent.indexOf("Edge") > -1 || window.navigator.userAgent.indexOf("Edg") > -1;

// Display a message for Edge users
if (isEdge) {
  var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
  alert(message);
}
