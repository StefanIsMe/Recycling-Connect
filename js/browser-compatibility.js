function browserCompatibilityCheck() {
  // Detect if the browser is not Google Chrome
  var isNotChrome = window.navigator.userAgent.indexOf("Chrome") === -1;

  // Display a message based on the browser
  if (isNotChrome) {
    var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
    console.error("An error occurred with the web browser compatibility JavaScript code detection: " + message);
    hideContent();
    showMessage(message);
  } else {
    console.log("The web browser is Google Chrome.");
  }
}

function hideContent() {
  var contentElement = document.getElementById("content");
  if (contentElement) {
    contentElement.style.display = "none";
  }
}

function showMessage(message) {
  var bodyElement = document.getElementsByTagName("body")[0];
  var h1Element = document.createElement("h1");
  var textNode = document.createTextNode(message);
  h1Element.appendChild(textNode);
  bodyElement.appendChild(h1Element);
}
