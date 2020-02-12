
let mapPin = document.getElementById("pin");
let mapPulse = document.getElementById("pulse");
let topY;
let topY_ForSlider;

function useName(){
let cont_top = document.getElementById("container_top").offsetHeight;
let cont_intro = document.getElementById("container_intro").offsetHeight;
let cont_feature = document.getElementById("container_feature").offsetHeight;
let cont_dtal = document.getElementById("container_dtal").offsetHeight;
let pinIt = document.getElementById("pinIt").offsetHeight;
topY = (cont_top + cont_intro + cont_feature) + pinIt*1.5;
topY_ForSlider = cont_top + cont_intro + cont_feature + (cont_dtal/1.5);
}

useName();

window.addEventListener('resize',useName);
// console.log(topY)
function mapDrop() {
    let scroll = document.documentElement.scrollTop;
    // console.log(scroll);
    if (scroll > topY) {
        mapPin.classList.add('pin-animation');
        mapPulse.classList.add('pulse-animation');
    } else {
        mapPin.classList.remove('pin-animation');
        mapPulse.classList.remove('pulse-animation');
    }
}


function hotPlanSlider(){
    let scroll = document.documentElement.scrollTop;
    let slider_tab1 = document.getElementById("slider_tab1");
    let slider_item = document.querySelectorAll(".slider_selection_item");
    let slider_nav = document.getElementById("slider_nav");
    // console.log(slider_item[0].dataset.num);
    // console.log(slider_item[0].style.transform);

    if (scroll > topY_ForSlider + 500) {
        slider_tab1.classList.add('active');
        slider_nav.classList.add('active');
    }else {
        slider_tab1.classList.remove('active');
        slider_nav.classList.remove('active');
    }
    // console.log(topY_ForSlider)
}


