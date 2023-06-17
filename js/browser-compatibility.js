function browserCompatibilityCheck() {
  try {
    // Check if the browser is not Microsoft Edge
    var isNotEdge = !(navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function(brand) {
      return brand.brand === 'Microsoft Edge';
    }));

    // Display a message based on the browser
    if (isNotEdge) {
      var message = "This website works best in Google Chrome. Please switch to Chrome for the best experience.";
      var error = new Error("An error occurred with the web browser compatibility JavaScript code detection");
      error.details = message;
      console.error(error);
      hideContent();
      showMessage(message);
    } else {
      console.log("The web browser is Microsoft Edge.");
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
    var h1Element = document.createElement("h1");
    var textNode = document.createTextNode(message);
    h1Element.appendChild(textNode);
    bodyElement.appendChild(h1Element);
    console.log("Error message displayed:", message);
  } catch (error) {
    console.error("An unexpected error occurred while displaying the error message.");
    console.error(error);
  }
}

// Call the browser compatibility check function
browserCompatibilityCheck();
