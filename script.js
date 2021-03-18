    // script for product img and discription
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);    
    }


    
 // owl carousel script start
$( document ).ready(function() {
  console.log( "ready!" );

  $('.owl-carousel').owlCarousel({
      loop:false,
    stagePadding: 15,
      margin:10,
      nav:true,
    navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
      responsive:{
          0:{
              items:1
          },
          640:{
              items:2
          },
        960:{
              items:3
          },
          1200:{
              items:4
          }
      }
  })
});



// animation on scroll script

AOS.init({
  duration: 1000
});






    
    

   