// cook creek main javascript 

// toggle the nav

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector("#nav-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".nav-main").classList.toggle("nav-hide");

    });

});

// fade and scroll items into view while scrolling

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

  // flickity slide show
  // https://flickity.metafizzy.co/#initialize-with-vanilla-javascript
 
  var elem = document.querySelector('.main-carousel');

  var flkty = new Flickity( elem, {
    // options
    contain: true,
    freeScroll: true,
    wrapAround: true,
    autoPlay: true,
    initialIndex: 2,
  });

  // paralax version of flickity, 
  // but can't quite figure out why the wrap is not working the same, 
  // so it will have to wait

// var carousel = document.querySelector('.main-carousel');
// var flkty = new Flickity( carousel, {
//   imagesLoaded: true,
//   // percentPosition: false,

//   initialIndex: 2,
//   contain: true,
//   freeScroll: true,
//   wrapAround: true,
//   autoPlay: true,
  
// });

// var imgs = carousel.querySelectorAll('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';

// flkty.on( 'scroll', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
  
  