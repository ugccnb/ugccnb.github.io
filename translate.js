// Define the translations for each language
const translations = {
  en: {
    title: 'Welcome to the Holy Trinity Parish of Moncton',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    welcome: 'Welcome to Holy Trinity Parish!',
    description:
      'We are a community of believers united by shared values, prayer, and service. Here you will find information about our services, events, and opportunities for participation.',
    mission: 'Our Mission',
    'mission-text':
      'The Holy Trinity Parish in Moncton strives to be a place where everyone can encounter God, grow in faith, and find support in the community. We believe in the power of prayer, service, and good deeds.',
    history: 'Parish History',
    'history-text':
      'Our parish was founded in 2022 and has since become a home for many believers. We take pride in our traditions and aim to develop in accordance with the needs of our community.',
    services: 'Services',
    'service-schedule': 'Sunday: 10:00 AM\nSpecial Services: upon request',
    events: 'Events',
    'events-text':
      'Our community is alive! Follow our events throughout the year, including group prayers, services for children and youth, picnics, and gatherings.',
    'contact-info': 'Contact Information',
    'contact-details':
      'Email: holytrinityugcc@ucetec.org, contact@ugccnb.ca\nAddress: 52 Falkland Street, Moncton',
    footer: '© Holy Trinity Parish of Moncton',
  },
  uk: {
    title: 'Ласкаво просимо до парафії Пресвятої Трійці у Монктоні',
    home: 'Головна',
    about: 'Про нас',
    contact: 'Контакти',
    welcome: 'Ласкаво просимо до парафії Пресвятої Трійці!',
    description:
      'Ми спільнота віруючих, які об’єднані спільними цінностями, молитвою та служінням. Тут ви знайдете інформацію про наші служби, події та можливості для участі.',
    mission: 'Наша місія',
    'mission-text':
      'Парафія Пресвятої Трійці в Монктоні прагне бути місцем, де кожен може зустріти Бога, зрости у вірі та знайти підтримку в спільноті. Ми віримо в силу молитви, служіння та добрих справ.',
    history: 'Історія парафії',
    'history-text':
      'Наша парафія була заснована в 2022 році і стала домом для багатьох віруючих. Ми пишаємося нашими традиціями та прагнемо розвиватися відповідно до потреб нашої спільноти.',
    services: 'Служби',
    'service-schedule': 'Неділя: 10:00\nСпеціальні служби: за запитом',
    events: 'Події',
    'events-text':
      'Наша спільнота жива! Слідкуйте за нашими подіями протягом року, включаючи спільні молитви, служіння для дітей та молоді, пікніки та зустрічі.',
    'contact-info': 'Контактна інформація',
    'contact-details':
      'Email: holytrinityugcc@ucetec.org, contact@ugccnb.ca\nАдреса: 52 Falkland Street, Moncton',
    footer: '© Парафія Пресвятої Трійці у Монктоні',
  },
  fr: {
    title: 'Bienvenue à la paroisse de la Sainte-Trinité de Moncton',
    home: 'Accueil',
    about: 'À propos de nous',
    contact: 'Contact',
    welcome: 'Bienvenue à la paroisse de la Sainte-Trinité!',
    description:
      'Nous sommes une communauté de croyants unis par des valeurs communes, la prière et le service. Vous trouverez ici des informations sur nos services, événements et possibilités de participation.',
    mission: 'Notre mission',
    'mission-text':
      'La paroisse de la Sainte-Trinité à Moncton s’efforce d’être un lieu où chacun peut rencontrer Dieu, grandir dans la foi et trouver du soutien dans la communauté. Nous croyons au pouvoir de la prière, du service et des bonnes actions.',
    history: 'Histoire de la paroisse',
    'history-text':
      'Notre paroisse a été fondée en 2022 et est devenue un foyer pour de nombreux croyants. Nous sommes fiers de nos traditions et nous nous développons en fonction des besoins de notre communauté.',
    services: 'Services',
    'service-schedule': 'Dimanche : 10h00\nServices spéciaux : sur demande',
    events: 'Événements',
    'events-text':
      'Notre communauté est vivante! Suivez nos événements tout au long de l’année, y compris des prières en groupe, des services pour enfants et jeunes, des pique-niques et des rassemblements.',
    'contact-info': 'Informations de contact',
    'contact-details':
      'Email : holytrinityugcc@ucetec.org, contact@ugccnb.ca\nAdresse : 52 Falkland Street, Moncton',
    footer: '© Paroisse de la Sainte-Trinité de Moncton',
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
