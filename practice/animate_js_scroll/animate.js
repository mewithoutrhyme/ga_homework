

const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

// const sectionOne = document.querySelector('.section1'); // just one section

// const sections = document.querySelectorAll('section'); 

// const options = {
//     root: null, 
//     threashold: 0, 
//     rootMargin: "150px", 
//  };

// const observer = new IntersectionObserver(function (entries,observer) {
//     entries.forEach(entry => {
    
//         if(!entry.isIntersection) {
//             return; 
//         }

//     entry.target.classList.add('show'); 
//     observer.unobserve(entry.target); 
//     });
// }, options);

// sections.forEach (section => { 
//     observer.observe(section)
// });

