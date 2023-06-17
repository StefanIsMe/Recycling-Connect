function browserCompatibilityCheck() {
  try {
    console.log("Checking browser compatibility...");

    // Check if the browser is not Google Chrome
    var isNotChrome = !(navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function(brand) {
      return brand.brand === 'Google Chrome';
    }));

    // Display a message based on the browser
    if (isNotChrome) {
      var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
      var error = new Error("Browser Compatibility Error");
      error.details = "Message: " + message;
      console.error(error);
      hideContent();
      showMessage(message);

      console.log("Preventing further data from loading.");
      // Stop loading further data by returning from the function
      return;
    } else {
      console.log("The web browser is Google Chrome.");
    }

    // Continue with other code here if needed
    // ...
  } catch (error) {
    console.error("An unexpected error occurred with the web browser compatibility JavaScript code detection");
    console.error(error);
  }
}

function hideContent() {
  try {
    console.log("Hiding content...");

    var bodyElement = document.getElementsByTagName("body")[0];

    if (!bodyElement) {
      throw new Error("Body element not found");
    }

    // Hide all child elements of the body
    var childElements = Array.from(bodyElement.children);
    childElements.forEach(function(element) {
      element.style.display = "none";
    });

    console.log("Content hidden successfully.");
  } catch (error) {
    console.error("An unexpected error occurred while hiding content.");
    console.error(error);
  }
}

function showMessage(message) {
  try {
    console.log("Displaying error message...");

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
