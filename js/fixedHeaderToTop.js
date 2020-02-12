let viewWidth = window.innerWidth;
let fixed = window.innerHeight;
let header = document.getElementById("header");
let navbar = document.getElementById("navbar");
// let logo = document.getElementById("logofixed");

window.addEventListener('resize', function(){
    viewWidth = window.innerWidth;
    fixed = window.innerHeight;
})
// window.onscroll = function () {
//     // 每一次變換螢幕寬度，要重新reload 問題待解決!!!
//     if (viewWidth >= 768){
//         scrollTop();
//     }else{
//         scrollTop_m();
//     }
//     // console.log(viewWidth);
//     // mapDrop();
// };

function scrollTop() {
    let scroll = document.documentElement.scrollTop;

    if (scroll + 68 > fixed) {
        header.classList.remove("header_index");
        header.classList.add("fixed_Top");
        
        // logo.classList.add("logofixed-show");
    } else {
        header.classList.remove("fixed_Top");
        header.classList.add("header_index");
        // logo.classList.remove("logofixed-show");
    }

    if (scroll > fixed / 2) {
        // console.log("active");
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
};
// window.onscroll = scrollTop;