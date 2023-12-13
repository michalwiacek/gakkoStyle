const darkModeButton = document.createElement('button');
darkModeButton.id = 'darkModeToggle';
darkModeButton.innerText = 'Tryb ciemny';
darkModeButton.style.position = 'fixed';
darkModeButton.style.top = '10px';
darkModeButton.style.right = '10px';
darkModeButton.style.zIndex = '1000';

document.body.appendChild(darkModeButton);

let isDarkMode = false;

function toggleDarkMode() {
    if (isDarkMode) {
        var existingLinks = document.querySelectorAll('link[href="' + chrome.runtime.getURL('dark-mode.css') + '"]');
        existingLinks.forEach(link => link.remove());
        darkModeButton.innerText = 'Dark Mode';
        isDarkMode = false;
    } else {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL('dark-mode.css');
        document.head.appendChild(link);
        darkModeButton.innerText = 'Light Mode';
        isDarkMode = true;
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);
