chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "capturedData") {
      // Process the captured data
      console.log('Captured Data:', request.data);

      // Replace this with your API call to get the word
      getWordFromApi(request.data).then(function(wordFromApi) {
        // Send the processed data back to the popup
        chrome.runtime.sendMessage({ action: "processedData", data: wordFromApi });
      });
    }
  }
);

function getWordFromApi(letters) {
  // Replace this with your actual API call to get the word
  // You might want to use fetch or another library for HTTP requests
  const apiUrl = 'https://your-api-endpoint.com/word';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ letters: letters }),
  };

  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => data.word)
    .catch(error => {
      console.error('Error fetching data from API:', error);
      return null;
    });
}
