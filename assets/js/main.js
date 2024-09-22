
// Banner Slider
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'animate__zoomOut',
    animateIn: 'animate__slideInRight',
})

// Blog Slider SCRIPT
$(document).ready(function(){
    $('.blog-carousel').owlCarousel({
        margin: 20, // Adjust margin if needed
        loop: true,
        nav:false,
        dots:false,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
