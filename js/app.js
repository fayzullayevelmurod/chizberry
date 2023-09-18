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

let heade_body_btn_1 = document.querySelector('.header_body_right .light_link');
let cmi_form = document.querySelector('.cmi_form');
let close_1 = cmi_form.querySelector('.close_modal');
if(heade_body_btn_1) {
    heade_body_btn_1.onclick = e => {
        e.preventDefault();
        cmi_form.classList.toggle('active');
        call_form.classList.remove('active');
    }

    close_1.onclick = () => {
        cmi_form.classList.remove('active');
    }
}

let heade_body_btn_2 = document.querySelector('.header_body_right .danger_link');
let call_form = document.querySelector('.call_form');
let close_2 = call_form.querySelector('.close_modal');
if(heade_body_btn_2) {
    heade_body_btn_2.onclick = e => {
        e.preventDefault();
        call_form.classList.toggle('active');
        cmi_form.classList.remove('active');
    }

    close_2.onclick = () => {
        call_form.classList.remove('active');
    }
}

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
    let menu_btn = item.querySelector('.main_btn');
    let menu_wrapper = item.querySelector('.menu_wrapper');
    let close_btns = item.querySelectorAll('.modal_close');
    menu_btn.onclick = () => {
        menu_wrapper.classList.toggle('active');
        menu_btn.querySelector('.bars').classList.toggle('d-none');
        menu_btn.querySelector('.close').classList.toggle('d-none');
    }

    let modal_1 = item.querySelector('.form_call_modal');
    let modal_btn_1 = item.querySelector('.open_contuct_form');
    modal_btn_1.onclick = () => {
        modal_1.classList.toggle('d-none');
        modal_2.classList.add('d-none');
    }
    close_btns[1].addEventListener('click', function () {
        modal_1.classList.add('d-none')
    })

    let modal_2 = item.querySelector('.form_cmi_modal');
    let modal_btn_2 = item.querySelector('.link');
    modal_btn_2.onclick = (e) => {
        e.preventDefault();
        modal_2.classList.toggle('d-none');
        modal_1.classList.add('d-none');
    }
    close_btns[0].addEventListener('click', function () {
        modal_2.classList.add('d-none')
    })
})

let header_burger = document.querySelectorAll('header .header_mobile .header_menu .main_btn');
if (header_burger) {
    header_burger.forEach(item => {
        item.addEventListener('mouseenter', function () {
            let h_btn = this;
            let b_img = h_btn.querySelector('.bars');
            b_img.setAttribute('src', './images/bars_hover.svg')
        })
        
        item.addEventListener('mouseleave', function () {
            let h_btn = this;
            let b_img = h_btn.querySelector('.bars');
            b_img.setAttribute('src', './images/bars.svg')
        })
    })
}

let discount_cards = document.querySelectorAll('.discount_card');
if (discount_cards.length) {
    discount_cards.forEach(card => {
        let open_btn = card.querySelector('.card_btn a');
        let modal = card.querySelector('.modal_card');
        let modal_close_btn = card.querySelector('.modal_card .close_modal_card');
        open_btn.onclick = e => {
            e.preventDefault();
            modal.classList.remove('d-none');
        }
        modal_close_btn.onclick = () => {
            modal.classList.add('d-none');
        }
    })
}

let award_img = document.querySelectorAll('.awards_card img');
if (award_img.length) {
    award_img.forEach(img => {
        img.onclick = () => {
            let src = [];
            src.push({
                'src': img.getAttribute('src'),
                'thumb': img.getAttribute('src'),
                'subHtml': ''
            });
            let pdf = img.getAttribute('data-pdf');
            $('#lightgallery').remove();
            const galleryContainer = document.createElement('div');
            galleryContainer.id = 'lightgallery';
            document.body.appendChild(galleryContainer);
            lightGallery(galleryContainer, {
                dynamic: true,
                dynamicEl: src,
            });

            setTimeout(() => {
                let download = document.querySelector('#lg-download');
                download.setAttribute('href', pdf);
            }, 500);
        }
    })
}

let certificates_img = document.querySelectorAll('.certificates_card img');
if (certificates_img.length) {
    certificates_img.forEach(img => {
        img.onclick = () => {
            let src = [];
            src.push({
                'src': img.getAttribute('src'),
                'thumb': img.getAttribute('src'),
                'subHtml': ''
            });
            let pdf = img.getAttribute('data-pdf');
            $('#lightgallery').remove();
            const galleryContainer = document.createElement('div');
            galleryContainer.id = 'lightgallery';
            document.body.appendChild(galleryContainer);
            lightGallery(galleryContainer, {
                dynamic: true,
                dynamicEl: src,
            });

            setTimeout(() => {
                let download = document.querySelector('#lg-download');
                download.setAttribute('href', pdf);
            }, 500);
        }
    })
}

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
