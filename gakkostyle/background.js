chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "activateDarkMode") {
            console.log("Received message to activate dark mode");
            chrome.tabs.insertCSS(sender.tab.id, { file: "dark-mode.css" });
        }
    }
);
