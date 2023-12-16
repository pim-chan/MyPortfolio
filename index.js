const projectCards = document.querySelectorAll('.card_container');
const projectPresentations = document.querySelectorAll('.project_presentation');

projectCards.forEach((projectCard, index) => {
    projectCard.addEventListener('click', () => {
        const currentProjectPresentation = projectPresentations[index];

        // Fermer tous les autres project presentations
        projectPresentations.forEach((presentation, i) => {
            if (i !== index) {
                presentation.classList.remove('active');
            }
        });

        currentProjectPresentation.classList.toggle('active');
    });
});

// const projectCards = document.querySelectorAll('.card_container');
// const projectPresentations = document.querySelectorAll('.project_presentation');

// projectCards.forEach((projectCard, index) => {
//     projectCard.addEventListener('click', () => {
//         const currentProjectPresentation = projectPresentations[index];
//         const parentContainer = projectCard.parentElement;

//         // Fermer tous les autres project presentations
//         projectPresentations.forEach((presentation, i) => {
//             if (i !== index) {
//                 presentation.classList.remove('active');
//             }
//         });

//         // Utiliser toggle pour alterner la classe 'active'
//         currentProjectPresentation.classList.toggle('active');

//         // Ajuster la hauteur de l'élément parent en fonction de la classe 'active'
//         const hasActiveClass = currentProjectPresentation.classList.contains('active');
//         parentContainer.style.height = hasActiveClass ? currentProjectPresentation.scrollHeight + 'px' : '';

//         // Fermer tous les autres project presentations
//         projectPresentations.forEach((presentation, i) => {
//             if (i !== index && presentation.classList.contains('active')) {
//                 presentation.classList.remove('active');
//                 projectCards[i].parentElement.style.height = '';
//             }
//         });
//     });
// });
