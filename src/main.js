const SLIDER_COLOR_EMPTY = "hsl(224, 65%, 95%)";
const SLIDER_COLOR_FULL = "hsl(174, 77%, 80%)";

function updateSliderColor(slider) {
    if(!slider)
        return;
    let value = (slider.value-slider.min)/(slider.max-slider.min)*100;
    slider.style.background = `linear-gradient(to right, ${SLIDER_COLOR_FULL} 0%, ${SLIDER_COLOR_FULL} ${value}%, ${SLIDER_COLOR_EMPTY} ${value}%, ${SLIDER_COLOR_EMPTY} 100%)`;
}

document.getElementById("price-slider").addEventListener('input',(event) => updateSliderColor(event.target));


updateSliderColor(document.getElementById("price-slider"));