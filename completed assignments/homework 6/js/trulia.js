


// Toggle the navigation

  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let navSwitch = document.querySelectorAll('.trulia-nav > nav ul');

    for (let n = 0; n < navSwitch.length; n++){
      navSwitch[n].classList.toggle('trulia-nav-mobilehide');
    }

});




// Loop through all the cards
let truliaCards = document.getElementsByClassName("trulia-grid-item");


for (var i = 0; i < truliaCards.length; i++) {

    // Add a click listener on each card
    truliaCards[i].addEventListener('click', function(){

  // Remove the featured class
      for (var feature = 0; feature < truliaCards.length; feature++) {
        truliaCards[feature].classList.remove('trulia-featured-grid-item');
      }
 // Add the featured class on the one clicked on
 this.classList.add('trulia-featured-grid-item');
    }
)

};
    



      
    


     



 



