
/* START change image every second */
    
addEventListener("load", () => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".resort-slides");
    const classHide = "resort-slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 3000);
    }
});

addEventListener("load", () => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".homestay-slides");
    const classHide = "homestay-slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 5000);
       
    }
});

/* END change image every second */

$('.cust-slider').carousel({
    interval: false,
}); 

document.cookie = "my_cookie_name=my_cookie_value; expires=Thu, 11 Jun 2070 11:11:11 UTC; path=/; SameSite=None; Secure";

// optional
$('#blogCarousel').carousel({
    interval: 10000
});


                        


