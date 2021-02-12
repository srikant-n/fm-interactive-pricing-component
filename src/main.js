// Colors for slider, empty side and full side
const SLIDER_COLOR_EMPTY = "hsl(224, 65%, 95%)";
const SLIDER_COLOR_FULL = "hsl(174, 77%, 80%)";
// Pricing
const pageviews = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
];
// Yearly billing toggle
let isYearly = false;

/* Set the colours on the slider and the pageviews and price based on the slider value */
function onSliderUpdate(slider) {
    if(!slider)
        return;
    let value = (slider.value-slider.min)/(slider.max-slider.min)*100;
    slider.style.background = `linear-gradient(to right, ${SLIDER_COLOR_FULL} 0%, ${SLIDER_COLOR_FULL} ${value}%, ${SLIDER_COLOR_EMPTY} ${value}%, ${SLIDER_COLOR_EMPTY} 100%)`;
    const price = (isYearly ? pageviews[slider.value-1].price * 0.75 : pageviews[slider.value-1].price).toFixed(2);
    document.getElementById("pageviews").innerText = `${pageviews[slider.value-1].views} PAGEVIEWS`;
    document.querySelector(".price").innerText = `$${price}`;
}

/* Yearly toggle status changes */
function onYearlyToggle(toggle) {
    isYearly = toggle.checked;
    // Update price based on slider
    onSliderUpdate(document.getElementById("price-slider"));
}

// Event listeners
document.getElementById("toggle-yearly").addEventListener('input',(event) => onYearlyToggle(event.target));
document.getElementById("price-slider").addEventListener('input',(event) => onSliderUpdate(event.target));

/** Set slider min, max and default values
 * Set yearly toggle to false */
(function () {
    const slider = document.getElementById("price-slider");
    slider.min = 1;
    slider.max = pageviews.length;
    slider.value = Math.ceil(pageviews.length/2);
    document.getElementById("toggle-yearly").checked = false;
    onSliderUpdate(slider);
})();