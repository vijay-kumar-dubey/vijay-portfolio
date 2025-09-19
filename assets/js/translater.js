function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
    }, 'google_translate_element');
}

function translatePage(lang) {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
}