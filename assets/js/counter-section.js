// <!-- counter -->
    $('.counter').countUp({
      delay: 5,
      time: 1000,
    });



    // IMAGE REVEAL
    const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".floating-img",
          scrub: 1.6,
          start: "top 80%",
          end: "bottom 100%",
          ease: "power1.out",
        //   markers:true
        }
      });
      growTl.to(".grow", {
        duration: 1.2,
        scale: 1
      });