// cook creek main javascript 

// toggle the nav

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector("#nav-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".nav-main").classList.toggle("nav-hide");

    });

});