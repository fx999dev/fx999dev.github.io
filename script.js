const privacyStringEnglish = `1. Privacy Policy for Simple Gym Timer<br>
This privacy policy explains how Kruemel Development collects, uses, and protects information when you use Simple Gym Timer.<br>
We take the protection of your data very seriously and respect your privacy. Please read this statement carefully.<br>
<br>
2. Data Processing and Storage<br>
We would like to inform you that Simple Gym Timer does not collect, process, or store any personally identifiable information.<br>
Your privacy is important to us, and we do not gather any information about you or your device.<br>
<br>
3. Data Sharing<br>
Simple Gym Timer does not share any data with third parties as we do not collect any data from you.<br>
<br>
4. Contact Information<br>
If you have any questions or concerns regarding this privacy policy, you can contact us at KruemelDevelopment@web.de<br>
`;

const privacyStringGerman = `1. Datenschutzerklärung für Simple Gym Timer<br>
Diese Datenschutzerklärung erklärt, wie Kruemel Development Informationen erhebt, verwendet und schützt, wenn Sie Simple Gym Timer verwenden.<br>
Wir nehmen den Schutz Ihrer Daten sehr ernst und respektieren Ihre Privatsphäre. Bitte lesen Sie diese Erklärung sorgfältig durch.<br>
<br>
2. Datenverarbeitung und -speicherung<br>
Wir möchten Sie darauf hinweisen, dass Simple Gym Timer keine personenbezogenen Daten erhebt, verarbeitet oder speichert.<br>
Ihre Privatsphäre ist uns wichtig, und wir sammeln keinerlei Informationen über Sie oder Ihr Gerät.<br>
<br>
3. Weitergabe von Daten<br>
Simple Gym Timer gibt keinerlei Daten an Dritte weiter, da wir keine Daten von Ihnen sammeln.<br>
<br>
4. Kontaktinformationen<br>
Falls Sie Fragen oder Bedenken bezüglich dieser Datenschutzerklärung haben, können Sie uns unter KruemelDevelopment@web.de kontaktieren.<br>
`

// Prüfen, ob die Sprache im localStorage gespeichert ist. Wenn nicht, Standardwert verwenden (Deutsch).
var currentLanguage = localStorage.getItem('language') || 'de';

// Prüfen, ob der Modus (Light/Dark-Mode) im localStorage gespeichert ist. Wenn nicht, Standardwert verwenden (Light-Mode).
var currentMode = localStorage.getItem('mode') || 'light-mode';

// Funktion, um den Modus (Light/Dark-Mode) zu aktualisieren
function updateMode() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');

    if (currentMode === 'dark-mode') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        modeToggle.textContent = 'Dark Mode';
    }
}

// Funktion, um die Sprache zu aktualisieren
function updateLanguage() {
    const mainHeading = document.getElementById('main-heading');
    const mainContent = document.getElementById('main-content');
    const privacyHeading = document.getElementById('privacy-heading');
    const privacyContent = document.getElementById('privacy-content');
    const navStartseite = document.querySelector('nav ul li:first-child a');
    const navDatenschutz = document.querySelector('nav ul li:nth-child(2) a');
    const donateButton = document.getElementById('donate-button');

    if (currentLanguage === 'de') {
        if (mainHeading != null) {
        mainHeading.textContent = 'Willkommen bei Kruemel Development :)';
        }
        if (mainContent != null) {
        mainContent.innerHTML = 'Meine Apps werden kostenlos und ohne Werbung zur Verfügung gestellt. Wenn du meine Apps nutzt und ihre Weiterentwicklung unterstützen möchtest, würde ich mich über eine kleine Spende freuen. Danke!<br>';
        }
        if (privacyHeading != null) {
            privacyHeading.textContent = 'Datenschutzerklärung';
        }
        if (privacyContent != null) {
            privacyContent.innerHTML = privacyStringGerman;
        }
        if(donateButton != null) {
            donateButton.textContent = 'Jetzt Spenden';
        }
        navStartseite.textContent = 'Startseite';
        navDatenschutz.textContent = 'Datenschutzrichtlinie';
    } else if (currentLanguage === 'en') {
        if (mainHeading != null) {
        mainHeading.textContent = 'Welcome to Kruemel Development';
        }
        if (mainContent != null) {
        mainContent.innerHTML = 'My apps are provided free of charge and without advertising. If you use my apps and would like to support their further development, I would be happy to receive a small donation. Thank you!<br> ';
        }
        if (privacyHeading != null) {
            privacyHeading.textContent = 'Privacy Policy';
        }
        if (privacyContent != null) {
            privacyContent.innerHTML = privacyStringEnglish;
        }
        if(donateButton != null) {
            donateButton.textContent = 'Donate now';
        }
        navStartseite.textContent = 'Home';
        navDatenschutz.textContent = 'Privacy Policy';
    }
}

// Aktualisiere den Modus beim Laden der Seite
updateMode();

// Aktualisiere die Sprache beim Laden der Seite
updateLanguage();

const modeToggle = document.getElementById('mode-toggle');
const languageToggleDE = document.getElementById('toggle-de');
const languageToggleEN = document.getElementById('toggle-en');

// Modus (Light/Dark-Mode) umschalten
modeToggle.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        currentMode = 'light-mode';
    } else {
        currentMode = 'dark-mode';
    }

    // Modus (Light/Dark-Mode) im localStorage speichern
    localStorage.setItem('mode', currentMode);

    updateMode();
});

// Sprache umschalten - Deutsch
languageToggleDE.addEventListener('click', () => {
    currentLanguage = 'de';

    // Sprache im localStorage speichern
    localStorage.setItem('language', currentLanguage);

    updateLanguage();
});

// Sprache umschalten - Englisch
languageToggleEN.addEventListener('click', () => {
    currentLanguage = 'en';

    // Sprache im localStorage speichern
    localStorage.setItem('language', currentLanguage);

    updateLanguage();
});
