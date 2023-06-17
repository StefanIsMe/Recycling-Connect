function browserCompatibilityCheck() {
  try {
    // Check if the browser is not Google Chrome
    var isNotChrome = !(navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function(brand) {
      return brand.brand === 'Google Chrome';
    }));

    // Display a message based on the browser
    if (isNotChrome) {
      var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
      var error = new Error("An error occurred with the web browser compatibility JavaScript code detection");
      error.details = message;
      console.error(error);
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
    var bodyElement = document.getElementsByTagName("body")[0];

    if (!bodyElement) {
      throw new Error("Body element not found");
    }

    // Hide all child elements of the body
    while (bodyElement.firstChild) {
      bodyElement.firstChild.style.display = "none";
      bodyElement.removeChild(bodyElement.firstChild);
    }

    console.log("Content hidden.");
  } catch (error) {
    console.error("An unexpected error occurred while hiding content.");
    console.error(error);
  }
}

function showMessage(message) {
  try {
    var bodyElement = document.getElementsByTagName("body")[0];

    if (!bodyElement) {
      throw new Error("Body element not found");
    }

    var existingH1Element = document.querySelector("h1.chrome-message");
    if (!existingH1Element) {
      var h1Element = document.createElement("h1");
      h1Element.className = "chrome-message";
      var textNode = document.createTextNode(message);
      h1Element.appendChild(textNode);
      bodyElement.appendChild(h1Element);
      console.log("Error message displayed:", message);
    }
  } catch (error) {
    console.error("An unexpected error occurred while displaying the error message.");
    console.error(error);
  }
}

// Call the browser compatibility check function
browserCompatibilityCheck();
