
// Animation Projets
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


// Animation clic ancre 
document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute('href').substring(1); 
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


//Fermer modal mentions légales 
const closeIcon = document.querySelector('.close-icon');
const modal = document.querySelector('#legal-mentions');
const modalLink = document.querySelector(".modal-link");

closeIcon.addEventListener('click', () => {
  modal.classList.toggle('closed')
})

modalLink.addEventListener('click', () => {
  modal.classList.toggle('closed')
})


  


