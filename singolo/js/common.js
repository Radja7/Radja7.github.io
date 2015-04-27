$(document).ready(function() {

//Mixitup
  $("#portfolio_grid").mixItUp();
  
  $(".portfolio li").click(function() {
    $(".portfolio li").removeClass("active");
    $(this).addClass("active");
  });

//Carousel
 	$('.owl-carousel').owlCarousel({
  		loop: true,
  		responsive : {
  			0 : {
            items : 1,
            nav : true
     		}
  		},
  		navText : ""
  	});

//Fancybox
  $(".fancybox").fancybox({
    padding : 0
  });

// smooth scroll
  var hashTagActive = "";
  $(".scroll").click(function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
             dest = $(document).height() - $(window).height();
        } else {
             dest = $(this.hash).offset().top;
           }
         //go to destination
         $('html,body').animate({
            scrollTop: dest
        }, 600, 'swing');
        hashTagActive = this.hash;
       }
  });

  $("nav ul li ").click(function() {
    $("nav ul li ").removeClass("active");         
    $(this).toggleClass("active");
  })

  $(".menu__button").click(function() {
    $("header ul").slideToggle();
  });

});






