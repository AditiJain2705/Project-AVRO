function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});


}
loco()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  gsap.from(".left",{
    x:-500,
    opacity:0,
    scrollTrigger:{
        scroller:".container",
        trigger:".page1",
      
    }
  })
  gsap.from(".right",{
    x:500,
    opacity:0,
   
    scrollTrigger:{
        scroller:".container",
        trigger:".page1",
       
        // end:"top 10%"
    }
  })
  gsap.from(".swiper",{
    y:-200,
    opacity:0,
   
    scrollTrigger:{
      scroller:".container",
      trigger:".page2",
    
      
    }

  })
  gsap.from(".titleline",{
    y:-200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page3",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".pagediv",{
    x:-200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page3",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".pagediv2",{
    x:200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page3",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".intro",{
    y:200,
    opacity:0,
    delay:0.5,
    scrollTrigger:{
      scroller:".container",
      trigger:".page4",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".desc",{
    y:-200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page4",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".ecosystem",{
    x:-200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page5",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".collective",{
    x:200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page5",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".articles",{
    y:200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page5",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".info",{
    y:-200,
    opacity:0,
    scrollTrigger:{
      scroller:".container",
      trigger:".page6",
      // markers:true,
      start:"top 60%"
    }

  })
  gsap.from(".location>ul>li",{
    y:200,
    opacity:0,
    
    scrollTrigger:{
      scroller:".container",
      trigger:".ftr",
      
      start:"top 80%"
    }

  })