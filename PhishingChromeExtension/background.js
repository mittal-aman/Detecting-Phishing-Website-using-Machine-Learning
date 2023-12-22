let allowNavigation = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url && !changeInfo.url.startsWith(chrome.extension.getURL(''))) {
        if (allowNavigation) {
            allowNavigation = false;
            return;
        }

        fetch('https://phishing-websites-detection-34dbb7e8e4e8.herokuapp.com/predict/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: changeInfo.url })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.is_legitimate = Math.random() >= 0.5;
            if (!data.is_legitimate) {
                chrome.storage.local.set({ 'redirectedFrom': changeInfo.url, 'tabId': tabId });
                chrome.tabs.update(tabId, {url: chrome.extension.getURL('warning.html')});
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "continue") {
        chrome.storage.local.get(['redirectedFrom', 'tabId'], function(data) {
            if (data.redirectedFrom && data.tabId) {
                allowNavigation = true;
                chrome.tabs.update(data.tabId, {url: data.redirectedFrom});
                chrome.storage.local.remove(['redirectedFrom', 'tabId']);
            }
        });
    } else if (request.action === "goBack") {
        allowNavigation = true; // Allow the navigation to go back without retriggering the URL check
        chrome.tabs.goBack(sender.tab.id);
    }
});
