// navBar hamberger content
function hambgrMenu() {
    let moreBtn = document.getElementById("moreBtn");
    let navbarCtn = document.getElementById("navbar_ctn");
    let more_nav_box  = document.getElementById("more_nav_box");
    let white_space = document.getElementById("white_space"); //控制空白處點擊後關閉選單
    moreBtn.addEventListener("click", (e) => {
        if (navbarCtn.classList.contains("open")) {
            navbarCtn.classList.remove("open");
            e.target.classList.remove("open");
        } else {
            navbarCtn.classList.add("open");
            e.target.classList.add("open");
        }
    });
    white_space.addEventListener("click", () => {
        if (navbarCtn.classList.contains("open")) {
            navbarCtn.classList.remove("open");
            more_nav_box.classList.remove("open");
        } else {
            navbarCtn.classList.add("open");
            more_nav_box.classList.add("open");
        }
    });
}
//index hotjourney_page mobile menuSeleter
function showMenu() {
    let menuBtn = document.getElementById("dropdown_mobile_btn");
    let menuItem = document.getElementById("dropdown_menu");



    menuBtn.addEventListener("click", function () {
        if (menuItem.classList.contains("-on")) {
            menuItem.classList.remove("-on");
        } else {
            menuItem.classList.add("-on");
        }
        // console.log('a')
    }, false);
}

//分頁上面的新增行程按鈕
function showSelectFrom() {
    let m_formSelect_btn = document.getElementById("m_formSelect_btn");
    let dropdown_form = document.getElementById("dropdown_form");
    m_formSelect_btn.addEventListener("click", function (e) {
        // console.log("a")
        if (dropdown_form.classList.contains("-on")) {
            dropdown_form.classList.remove("-on");
            e.target.style.backgroundColor = "#E5785E";
        } else {
            dropdown_form.classList.add("-on");
            e.target.style.backgroundColor = "#ACD1BF";
        }
    })
}

function showJourneyMenu() {
    let m_menu_btn = document.getElementById("m_menu_btn");
    let m_menu_select = document.getElementById("m_menu_select");
    m_menu_btn.addEventListener("click", function (e) {
        if (m_menu_select.classList.contains("-on")) {
            m_menu_select.classList.remove("-on");
            e.target.classList.remove("-on");
            // e.target.style.backgroundColor = "#E5785E";
        } else {
            m_menu_select.classList.add("-on");
            e.target.classList.add("-on");
            // e.target.style.backgroundColor = "#ACD1BF";
        }
    })
}

//手機板 行程分類選單球
function showColMenu() {
    let nav = document.getElementById("nav");
    let navbar = document.getElementById("navbar");

    nav.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            navbar.classList.remove("noshow");
            // navbar.style.display = "block";
        } else {
            nav.classList.add("active");
            navbar.classList.add("noshow");
            // navbar.style.display = "none";
        }
    });
}