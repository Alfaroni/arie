// Toggle
const toggleOpen = document.querySelectorAll("[data-toggle]");
const toggleClose = document.querySelectorAll("[data-toggle-close]");
if(toggleOpen){
    toggleOpen.forEach(function (item, i) {
        item.addEventListener('click', function(e) {
            this.classList.toggle('is-active');
            const attr = this.getAttribute('data-toggle');
            if(this.classList.contains('is-active')){
                document.body.classList.add('overflow-hidden');
                document.querySelector('[data-toggle-open="'+ attr +'"]').classList.add('open');
            }else{
                document.body.classList.remove('overflow-hidden');
                document.querySelector('[data-toggle-open="'+ attr +'"]').classList.remove('open');
            }
            e.preventDefault();
        });
    });
    
    toggleClose.forEach(function (t, i) {
        t.addEventListener('click', function(e) {
            document.body.classList.remove('overflow-hidden');
            document.querySelector('[data-toggle].is-active')?.classList.remove('is-active');
            document.querySelector('[data-toggle-open].open')?.classList.remove('open');
            e.preventDefault();
        });
    });

}

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    offset: ["100%", 0]
});
scroll.on('call', (value, way, obj) => {
    if (way === 'enter') {
        switch (value) {
            case "scrollEvent":
                document.body.setAttribute('data-theme', obj.el.id) ;
                document.body.setAttribute('data-tone', obj.el.dataset.tone) ;
            break;      
        }
    }
});
scroll.on('scroll', ({limit, scroll}) => {
    const progress = scroll.y / limit.y * 10
    document.querySelector('[data-scroll-progress]').style.cssText += "--progress:"+ progress +";"
})

const swiperHorizontal = new Swiper('.swiper-horizontal', {
    centeredSlides: true,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 'auto',
    loopFillGroupWithBlank: true,
})

const swiperTestimony = new Swiper('.swiper-testimony', {
    slidesPerView: 1.1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 32
        },
    }
});

var swiperIntro = new Swiper(".swiper-intro", {
    direction: "vertical",
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    loopFillGroupWithBlank: true,
});


//loadmore
var itemsInspiration = document.querySelectorAll(".section-container-inspiration-block"),
    btnInspiration = document.querySelector('.section-container-inspiration-loadmore'),
    xItems = 6;

btnInspiration.addEventListener('click', function () {
    document.querySelectorAll(".section-container-inspiration-block.hidden").forEach(function (item, index) {
        if(index < xItems) {
            item.classList.remove('hidden');
        }
        if(document.querySelectorAll(".section-container-inspiration-block.hidden").length == 0) {
            btnInspiration.style.display = "none";
        }
    });
});