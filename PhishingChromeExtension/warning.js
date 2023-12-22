document.getElementById('continueButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "continue" });
});

document.getElementById('goBackButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "goBack" });
});
