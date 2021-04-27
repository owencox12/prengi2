new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        
        
    },
    autoplay: true,
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 100
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 100
      
        },
    },
    
});
var btn_prev = document.querySelector('.prev-arrow')
var btn_next = document.querySelector('.next-arrow')
var images = document.querySelectorAll('.pengi__mac .pengi__slider img')
let tab = document.querySelectorAll ('.pengi__navigation ul li')
console.log(images)
var i = 0;
var timer;
        btn_next.onclick = function(){
         images[i].style.opacity = 0;
         i = i + 1;
               
         if ( i >= images.length) {
             i = 0;
         }
         
         images[i].style.opacity = 1;

     }
     btn_prev.onclick = function(){
        images[i].style.opacity = 0;
        i = i - 1
        if ( i < 0) {
            i = images.length -1;
        }
        images[i].style.opacity = 1;

        
    }
    $(document).ready(function(){
        $('.promo__burger').click(function(event){
            $('.nav').toggleClass('nav_active');
            $('.promo__burger').toggleClass('promo__burger_active');
            $('body').toggleClass('lock');
        });
    });


