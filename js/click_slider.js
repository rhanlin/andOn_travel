let slider_tab1 = document.getElementById("slider_tab1");
let slider_item = document.querySelectorAll(".slider_selection_item");
let slider_selection_next = document.getElementById("slider_selection_next");
let slider_selection_prev = document.getElementById("slider_selection_prev");
let pageNumNow = document.getElementById("pageNumNow");
let slider_progress_inner = document.getElementById("slider_progress_inner");

    p = 1;
    pageNumNow.innerText = `0${p}`;
    h = 30;
    slider_progress_inner.style.width = `${h}px`;
function click_slider() {
    //控制卡牌編號
    p--;
    if(p<1){p = 6}
    pageNumNow.innerText = `0${p}`;
    //控制進度條
    h-=30;
    if(h<30){
        h = 180;
    }
    slider_progress_inner.style.width = `${h}px`;

    slider_selection_next.disabled = true;
    for (let i = 0; i < slider_item.length; i++) {
        
        let x = +[...slider_item[i].style.transform].slice(11).join('').split('p')[0];
        slider_item[i].style.transform = `translateX(${x+395}px)`;
        slider_item[i].style.opacity = 1;
        slider_item[i].style.transition = 'transform .7s';
        // console.log(slider_item[i])
        if (x > 1285) {
            // slider_item[i].style.opacity = 0;
            setTimeout(()=>{
                slider_item[i].style.transitionProperty = 'none';
                slider_item[i].style.transform = `translateX(${-395}px)`;
                slider_item[i].style.opacity = 0;
                slider_selection_next.disabled = false;
            },400)
            // setTimeout(()=>{
            //     slider_selection_next.disabled = false;
            // },1000)
        }
    }
}

slider_selection_next.addEventListener("click", click_slider);

slider_selection_prev.addEventListener("click", function () {
    p++;
    if(p>6){p = 1}
    pageNumNow.innerText = `0${p}`;
    //控制進度條
    h+=30;
    if(h>180){
        h = 30;
    }
    slider_progress_inner.style.width = `${h}px`;

    slider_selection_prev.disabled = true;
    for (let i = 0; i < slider_item.length; i++) {
        let x = +[...slider_item[i].style.transform].slice(11).join('').split('p')[0];
        slider_item[i].style.transform = `translateX(${x-395}px)`;
        slider_item[i].style.opacity = 1;
        slider_item[i].style.transition = 'transform .7s';
        // console.log(slider_item[i])
        if (x < 0) {
            slider_item[i].style.opacity = 0;
            slider_item[i].style.transitionProperty = 'none';
            slider_item[i].style.transform = `translateX(${1700}px)`;
            setTimeout(()=>{
                // slider_item[i].style.transitionProperty = 'none';
                slider_item[i].style.transition = 'all .3s';
                slider_item[i].style.transform = `translateX(${1580}px)`;
                slider_item[i].style.opacity = 1;
                slider_selection_prev.disabled = false;
            },300)
            
        }
    }
});