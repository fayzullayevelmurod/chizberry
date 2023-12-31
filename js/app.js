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


let open_networks = document.querySelectorAll('.open_network_modal');
let network_modal = document.querySelector('.networks_modal');
let network_modal_close = document.querySelector('.networks_modal .modal_close');
if (open_networks.length) {
    open_networks.forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            network_modal.classList.remove('noActive');
            network_modal.classList.add('active');
        }
    })
    network_modal_close.onclick = () => {
        network_modal.classList.remove('active');
        network_modal.classList.add('noActive');
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

if ($('footer .to_top').length) {
    console.log("ishladi");
    $('footer .to_top').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

let productSlider = document.querySelector('#product .product_main_cards');
if (productSlider) {
    let product_slide = new Swiper(productSlider, {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            1200: {
                spaceBetween: 24,
            },
            768: {
                spaceBetween: 16,
            }
        }
    })
}

function getProductMainCardWidth () {
    let container = document.querySelector('#product .container');
    let marginLeft = container.getBoundingClientRect().left;
    let cardWidth = window.innerWidth - marginLeft + 'px';
    productSlider.style.width = cardWidth;
    productSlider.style.marginLeft = marginLeft;
}

let product_imgs = document.querySelectorAll ('#product .product_main .product_main_img img');
let image_modal = document.querySelector('#product .img_modal');
let image_modal_close = document.querySelector('#product .img_modal .modal_bg');
let image_modal_close_two = document.querySelector('#product .img_modal .modal_main  .close_btn_wrapper');
let image_modal_img = document.querySelector('#product .img_modal img');
if (product_imgs.length) {
    product_imgs.forEach (el => {
        el.onclick = () => {
            image_modal_img.setAttribute('src', el.getAttribute('src'));
            image_modal.classList.remove('noActive')
            image_modal.classList.add('active')
        }
    })

    image_modal_close.onclick = () => {
        console.log('ishladi');
        image_modal.classList.remove('active')
        image_modal.classList.add('noActive')
    }

    image_modal_close_two.onclick = () => {
        image_modal.classList.remove('active')
        image_modal.classList.add('noActive')
    }
}

let product_btn = document.querySelector('#product .product_btn');
let product_form_modal = document.querySelector('#product .product_form_modal');
let product_form_modal_close = document.querySelector('#product .product_form_modal .modal_close');
if (product_btn) {
    product_btn.onclick = () => {
        product_form_modal.classList.remove('d-none');
    }

    product_form_modal_close.onclick = () => {
        product_form_modal.classList.add('d-none');
    }
}

getHeaderMenuWidth();
if (productSlider) {
    getProductMainCardWidth();
}

window.onresize = () => {
    if (half) {
        putHalfSliderWidth();
    }

    if (productSlider) {
        getProductMainCardWidth();
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
            award_img.forEach(item => {
                src.push({
                    'src': item.getAttribute('src'),
                    'thumb': item.getAttribute('src'),
                    'subHtml': ''
                });
            })
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
            certificates_img.forEach(item => {
                src.push({
                    'src': item.getAttribute('src'),
                    'thumb': item.getAttribute('src'),
                    'subHtml': ''
                });
            })
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

let card_top = document.querySelector('.cards_top_slider');
if (card_top) {
    let cards_top_slider = new Swiper(".cards_top_slider", {
        slidesPerView: 'auto',
        spaceBetween: 8,
    });
}

let index_home = document.querySelector('.index_home_slider');
if (index_home) {
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
}

let opinions_slide = document.querySelector('.opinions_slider');
if (opinions_slide) {
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
}

let by_cheeseberry_slide = document.querySelector('.by_cheeseberry_slider');
if (by_cheeseberry_slide) {
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
}

let half_slide = document.querySelector('.half_slider');
if (half_slide) {
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
}

let footer_link1 = document.querySelectorAll('footer .link_1');
let privacy_modal = document.querySelector('#privacy_policy');
let modal_close_1 = document.querySelector('#privacy_policy .modal_close');
if (footer_link1.length) {
    footer_link1.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            privacy_modal.classList.remove('noActive');
            privacy_modal.classList.add('active');
        }
    })

    modal_close_1.onclick = () => {
        privacy_modal.classList.remove('active');
        privacy_modal.classList.add('noActive');
    }
}

let footer_link2 = document.querySelectorAll('footer .link_2');
let privacy_modal2 = document.querySelector('#privacy_policy2');
let modal_close_2 = document.querySelector('#privacy_policy2 .modal_close');
if (footer_link2.length) {
    footer_link2.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            privacy_modal2.classList.remove('noActive');
            privacy_modal2.classList.add('active');
        }
    })

    modal_close_2.onclick = () => {
        privacy_modal2.classList.remove('active');
        privacy_modal2.classList.add('noActive');
    }
}

let career_accordions = $('.career_accordion');

if (career_accordions.length) {
    $('.career_accordion .career_accordion_body').slideUp(0);
    $(career_accordions).each(function (idx, el) {
        $(el).find('.accordion_open_body').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('opened');
            $(el).find('.career_accordion_body').slideToggle(200);
        })

        $(el).find('.accordion_open_modal').click(function (e) {
            e.preventDefault();
            $(el).find('.career_accordion_modal').removeClass('noActive')
            $(el).find('.career_accordion_modal').addClass('active')
        })

        $(el).find('.career_accordion_modal .modal_close').click(function () {
            $(el).find('.career_accordion_modal').removeClass('active')
            $(el).find('.career_accordion_modal').addClass('noActive')
        })

        $(el).find('.career_accordion_modal .modal_bg').click(function () {
            $(el).find('.career_accordion_modal').removeClass('active')
            $(el).find('.career_accordion_modal').addClass('noActive')
        })

        $(el).find(`#file_${idx + 1}`).on('change', function (e) {
            if (e.target.files[0]) {
                $(el).find(`label[for="file_${idx + 1}"]`).text(e.target.files[0].name);
            } else {
                $(el).find(`label[for="file_${idx + 1}"]`).text('Прикрепить резюме')
            }
        })
    })
}

let card_3_sliders = document.querySelectorAll('#company .card_3_slider');

if (card_3_sliders.length) {
    card_3_sliders.forEach(el => {
        let card_3_slider = new Swiper(el, {
            slidesPerView: 'auto',
            spaceBetween: 8,
            breakpoints: {
                1200: {
                    spaceBetween: 24,
                },

                768: {
                    spaceBetween: 16,
                }
            }
        });
    })
}
