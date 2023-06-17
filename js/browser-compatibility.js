function browserCompatibilityCheck() {
  try {
    // Check if the browser is not Google Chrome
    var isNotChrome = window.navigator.userAgent.indexOf("Chrome") === -1;

    // Display a message based on the browser
    if (isNotChrome) {
      var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
      console.error("The web browser is not Google Chrome.");
      hideContent();
      showMessage(message);
    } else {
      console.log("The web browser is Google Chrome.");
    }
  } catch (error) {
    console.error("An unexpected error occurred with the web browser compatibility JavaScript code detection");
    console.error(error);
  }
}

function hideContent() {
  try {
    var contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.style.display = "none";
      console.log("Content element is hidden.");
    } else {
      console.warn("Content element not found.");
    }
  } catch (error) {
    console.error("An unexpected error occurred while hiding content.");
    console.error(error);
  }
}

function showMessage(message) {
  try {
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.innerHTML = "<h1>" + message + "</h1>";
    console.log("Error message displayed:", message);
  } catch (error) {
    console.error("An unexpected error occurred while displaying the error message.");
    console.error(error);
  }
}

// Call the browser compatibility check function
browserCompatibilityCheck();
