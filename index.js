// const projectCards = document.querySelectorAll('.card_container');
// const projectPresentations = document.querySelectorAll('.project_presentation');
// const projectsCardsContainer = document.querySelector('.projects_cards');


// projectCards.forEach((projectCard, index) => {
//     projectCard.addEventListener('click', () => {
//         const currentProjectPresentation = projectPresentations[index];

//         // Fermer tous les autres project presentations
//         projectPresentations.forEach((presentation, i) => {
//             if (i !== index) {
//                 presentation.classList.remove('active');
//             }
//         });

//         currentProjectPresentation.classList.toggle('active');

//         currentProjectPresentation.style.maxHeight = isActive ? currentProjectPresentation.scrollHeight + 'px' : '0';
//     });
// });

const projectCards = document.querySelectorAll('.card_container');
const projectPresentations = document.querySelectorAll('.project_presentation');
const projectsCardsContainer = document.querySelector('.projects_cards');

projectCards.forEach((projectCard, index) => {
    projectCard.addEventListener('click', () => {
        const currentProjectPresentation = projectPresentations[index];
        
        // Fermer tous les autres project presentations sauf celui actuel
        projectPresentations.forEach((presentation, i) => {
            if (i !== index) {
                presentation.classList.remove('active');
                presentation.style.maxHeight = '0';
            }
        });

        currentProjectPresentation.classList.toggle('active');
        
        const isActive = currentProjectPresentation.classList.contains('active');
        currentProjectPresentation.style.maxHeight = isActive ? currentProjectPresentation.scrollHeight + 'px' : '0';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les ancres dans le document
    const anchors = document.querySelectorAll('a[href^="#"]');
  
    // Ajouter un gestionnaire d'événements à chaque ancre
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Calculer la position de défilement cible
          const offsetTop = targetElement.offsetTop;
  
          // Faire défiler en douceur vers la cible
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  


