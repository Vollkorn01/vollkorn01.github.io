// Function to set the selected language in local storage
function setLanguageInLocalStorage(lang) {
  localStorage.setItem('selectedLanguage', lang);
}

// Function to get the selected language from local storage
function getLanguageFromLocalStorage() {
  return localStorage.getItem('selectedLanguage') || navigator.language || navigator.userLanguage;
}

// Initialize the selected language from local storage or user's preference
let selectedLang = getLanguageFromLocalStorage();
let lang;

// Set language to German if it's English, otherwise use the stored language
if (selectedLang === 'en' || selectedLang === 'en-US' || selectedLang === 'en-GB') {
  lang = 'en';
} else {
  lang = selectedLang;
}

// Set the selected language in the select element
document.querySelector('select').value = lang;

// Initialize i18next with the selected language
changeLanguage(lang);

// Function to change the language
function changeLanguage(lang) {
  fetch(`./${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      i18next.init(
        {
          lng: lang,
          resources: {
            [lang]: {
              translation: data,
            },
          },
        },
        function (err, t) {
          var elems = document.querySelectorAll('[data-i18n]');
          elems.forEach(function (elem) {
            elem.textContent = i18next.t(elem.getAttribute('data-i18n'));
          });
        }
      );
      // Store the selected language in local storage
      setLanguageInLocalStorage(lang);
    });
}

// Get the select element
var select = document.querySelector('select');

// Add an event listener for the change event
select.addEventListener('change', function () {
  // Get the selected language
  var lang = select.value;

  // Call the changeLanguage function
  changeLanguage(lang);
});