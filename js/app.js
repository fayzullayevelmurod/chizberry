function putHalfSliderWidth() {
    let halfSliders = document.querySelectorAll('.halfSlider');

    halfSliders.forEach(item => {
        let title = item.querySelector('.title');
        let slider_wrapper = item.querySelector('.slider_wrapper');
        slider_wrapper.style.left = title.getBoundingClientRect().left + title.offsetWidth + 30 + 'px';
        slider_wrapper.style.width = window.innerWidth - (title.getBoundingClientRect().left + title.offsetWidth + 30) + 'px';
    })
}

let half = document.querySelector('.halfSlider');

if (half) {
    putHalfSliderWidth();
    
    window.onresize = () => putHalfSliderWidth();
}
