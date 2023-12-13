chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "activateDarkMode") {
            chrome.tabs.insertCSS(sender.tab.id, { file: "dark-mode.css" });
        }
    }
);
