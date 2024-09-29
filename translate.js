// Define the translations for each language
const translations = {
  en: {
    title: 'Welcome to the Ukrainian Catholic Church of New Brunswick',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    welcome: 'Welcome to our Church',
    description:
      'We are a vibrant community of believers in New Brunswick. Join us for Mass and community activities!',
    footer: '© Ukrainian Catholic Church of New Brunswick',
  },
  uk: {
    title: 'Ласкаво просимо до Української Католицької Церкви Нью-Брансвіка',
    home: 'Головна',
    about: 'Про нас',
    contact: 'Контакти',
    welcome: 'Ласкаво просимо до нашої церкви',
    description:
      'Ми яскрава спільнота вірян у Нью-Брансвіку. Приєднуйтеся до нас на службу та інші заходи громади!',
    footer: '© Українська Католицька Церква Нью-Брансвіка',
  },
  fr: {
    title: "Bienvenue à l'Église Catholique Ukrainienne du Nouveau-Brunswick",
    home: 'Accueil',
    about: 'À propos de nous',
    contact: 'Contact',
    welcome: 'Bienvenue dans notre Église',
    description:
      'Nous sommes une communauté dynamique de croyants au Nouveau-Brunswick. Rejoignez-nous pour la messe et les activités communautaires!',
    footer: '© Église Catholique Ukrainienne du Nouveau-Brunswick',
  },
};

// Function to change language
function changeLanguage(language) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    element.textContent = translations[language][key];
  });
}

// Event listeners for language switch buttons
document
  .getElementById('en')
  .addEventListener('click', () => changeLanguage('en'));
document
  .getElementById('uk')
  .addEventListener('click', () => changeLanguage('uk'));
document
  .getElementById('fr')
  .addEventListener('click', () => changeLanguage('fr'));
