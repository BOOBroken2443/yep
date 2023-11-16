chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "captureAndGenerate") {
      // Modify this part to capture the screen or interact with the webpage
      // Use JavaScript to capture the screen and send the data to the background script
      const capturedData = captureScreenAndGenerate();
      chrome.runtime.sendMessage({ action: "capturedData", data: capturedData });
    }
  }
);

function captureScreenAndGenerate() {
  // Replace this with your actual code to capture the screen
  // and extract the necessary information from the webpage
  const x = 363;
  const y = 74;
  const width = 100;
  const height = 30;
  const capturedData = captureScreen(x, y, width, height);

  return capturedData;
}

function captureScreen(x, y, width, height) {
  // Replace this with your actual code to capture the screen
  // and extract the necessary information from the webpage
  console.log('Capturing screen at:', x, y, width, height);
  // Return the captured data (for example, the letters)
  return "CapturedData";
}
