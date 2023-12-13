// Tworzenie przycisku trybu ciemnego
const darkModeButton = document.createElement('button');
darkModeButton.id = 'darkModeToggle';
darkModeButton.innerText = 'Tryb ciemny';
darkModeButton.style.position = 'fixed';
darkModeButton.style.top = '10px';
darkModeButton.style.right = '10px';
darkModeButton.style.zIndex = '1000';

// Dodawanie przycisku do strony
document.body.appendChild(darkModeButton);

// Zmienna do śledzenia stanu
let isDarkMode = false;

// Funkcja do przełączania trybów
function toggleDarkMode() {
    if (isDarkMode) {
        // Usuwamy styl trybu ciemnego
        var existingLinks = document.querySelectorAll('link[href="' + chrome.runtime.getURL('dark-mode.css') + '"]');
        existingLinks.forEach(link => link.remove());
        darkModeButton.innerText = 'Tryb ciemny';
        isDarkMode = false;
    } else {
        // Dodajemy styl trybu ciemnego
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL('dark-mode.css');
        document.head.appendChild(link);
        darkModeButton.innerText = 'Tryb jasny';
        isDarkMode = true;
    }
}

// Dodanie nasłuchiwania na kliknięcie
darkModeButton.addEventListener('click', toggleDarkMode);
