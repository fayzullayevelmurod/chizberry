function putHalfSliderWidth() {
    let halfSliders = document.querySelectorAll('.halfSlider');
    let between = window.innerWidth <= 576 ? 14 : 30;

    halfSliders.forEach(item => {
        let title = item.querySelector('.title');
        let slider_wrapper = item.querySelector('.slider_wrapper');
        slider_wrapper.style.left = title.getBoundingClientRect().left + title.offsetWidth + between + 'px';
        slider_wrapper.style.width = window.innerWidth - (title.getBoundingClientRect().left + title.offsetWidth + between) + 'px';
    })
}

function getHeaderMenuWidth() {
    if (window.innerWidth < 576) {
        head_menu_wrapper.forEach(item => {
            item.style.width = window.innerWidth - 24 + 'px';
        })
    } else {
        head_menu_wrapper.forEach(item => {
            item.style.width = 'auto';
        })
    }
}

let half = document.querySelector('.halfSlider');
let head_menu_wrapper = document.querySelectorAll('header .menu_wrapper');

if (half) {
    putHalfSliderWidth();
    
}

getHeaderMenuWidth();

window.onresize = () => {
    if (half) {
        putHalfSliderWidth();
    }

    getHeaderMenuWidth();
};

let header_mobile = document.querySelectorAll('.header_mobile');

header_mobile.forEach((item) => {
    let bars = item.querySelector('.btn .bars');
    let close = item.querySelector('.btn .close');
    let header_menu = item.querySelector('.menu_wrapper');
    let contact_form= item.querySelector('.header_mobile .contact_form');
    let contact_form_btn = item.querySelector('.open_contuct_form');
    let contact_form_close = item.querySelector('.header_mobile .contact_form .modal_close')
    
    bars.onclick = () => {
        bars.classList.add('d-none');
        close.classList.remove('d-none');
        header_menu.classList.add('active');
    }
    
    close.onclick = () => {
        bars.classList.remove('d-none');
        close.classList.add('d-none');
        header_menu.classList.remove('active');
        contact_form.classList.add('d-none');
    }
    
    contact_form_btn.onclick = () => {
        contact_form.classList.remove('d-none');
    }
    
    contact_form_close.onclick = () => {
        contact_form.classList.add('d-none');
    }
})


let cards_top_slider = new Swiper(".cards_top_slider", {
    slidesPerView: 'auto',
    spaceBetween: 8,
});

let index_home_slider = new Swiper(".index_home_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".home_slider_pagination",
        clickable: true,
    },
});

let opinions_slider = new Swiper(".opinions_slider", {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    breakpoints: {
        992: {
            spaceBetween: 24
        },
        768: {
            spaceBetween: 16
        }
    }
});

let by_cheeseberry_slider = new Swiper(".by_cheeseberry_slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    centerSlide: true,
    breakpoints: {
        1400: {
            slidesPerView: 7,
        },
        1200: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 4
        },
        576: {
            slidesPerView: 3,
        }
    }
});

let half_slider = new Swiper(".half_slider", {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
        1200: {
            spaceBetween: 24,
        },
        576: {
            spaceBetween: 16,
        }
    }
});
