document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('checkButton');
    if (checkButton) {
        checkButton.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var activeTab = tabs[0];
                var activeTabURL = activeTab.url;

                // Call your API
                fetch('https://phishing-websites-detection-34dbb7e8e4e8.herokuapp.com/predict/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: activeTabURL })
                })
                .then(response => response.json())
                .then(data => {
                    console.log("API Response:", data.language); // Log the response here
                    document.getElementById('result').textContent = data.language;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            });
        });
    }
});
