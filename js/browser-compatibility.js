// Detect if the browser is not Google Chrome
var isNotChrome = window.navigator.userAgent.indexOf("Chrome") === -1;

// Display a message for non-Chrome users
if (isNotChrome) {
  var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
  alert(message);
}
