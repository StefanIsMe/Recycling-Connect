(function () {
  try {
    // Detect if the browser is not Google Chrome
    var isNotChrome = !(window.chrome && window.chrome.webstore);

    // Show/hide the content based on the browser
    if (isNotChrome) {
      var contentElement = document.getElementById('content');
      contentElement.style.display = 'none';

      var chromeMessage = document.createElement('h1');
      chromeMessage.textContent = 'This website works best in Google Chrome. Please download Google Chrome for the best experience.';
      document.body.appendChild(chromeMessage);

      console.log('The web browser is not Google Chrome.');
    } else {
      console.log('The web browser is Google Chrome.');
    }
  } catch (error) {
    console.error('An error occurred with the web browser compatibility JavaScript code detection:', error);
  }
})();
