// Content owl carousel

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: false,
        autoWidth: false,
        smartSpeed: 400,
        lazyLoad: true,
        URLhashListener: true,
        startPosition: 'URLHash'
    });
});

// Select color text cultvalmis carousel and Show/hide text cultvalmis carousel

const lis = document.querySelectorAll("div#menu section");
const a = document.querySelectorAll("section button");
const text = document.querySelectorAll("div[id^='text_']");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.remove("selected");
            a[i].classList.remove("selected-text");
            text[i].classList.remove("show");
            text[i].classList.add("hide");
        }

        this.classList.add("selected");
        a[i].classList.add("selected-text");
        text[i].classList.add("show");
        text[i].classList.remove("hide");
    });
}

// Select color/border in partners content panel

const options = document.querySelectorAll("div#panel_menu section");
const option = document.querySelectorAll("section button[class^='menu_']");
const content = document.querySelectorAll("div[id^='option_']");

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("menu-selected");
            option[i].classList.remove("selected-panel");

            content[i].classList.add("hide");
            content[i].classList.remove("show");
        }

        this.classList.add("menu-selected");
        option[i].classList.add("selected-panel");

        content[i].classList.add("show");
        content[i].classList.remove("hide");
    });
}

// Select in panel in partners slide content

const slide = document.querySelectorAll("div#panels section");
const slide_btn = document.querySelectorAll("button[id^='btn_']");

for (let i = 0; i < slide.length; i++) {
    slide[i].addEventListener("click", function () {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.add("show-panel");
            slide[i].classList.remove("hide-panel");

            slide_btn[i].classList.add("show-btn");
            slide_btn[i].classList.remove("hide-panel");
        }
        
        this.classList.add("hide-panel");
        this.classList.remove("show-panel");

        slide_btn[i].classList.add("hide-panel");
        slide_btn[i].classList.remove("show-btn");
    });
}

// Show and scroll to about us footer content

const footer = document.getElementById("footer");
const subMenu = document.getElementById("sub-menu");
// subMenu.scrollIntoView({behavior: 'smooth'}, true); this scroll to submenu

options[0].onclick = function () {
    if (footer.style.display = "flex") {
        footer.style.display = "none";
    } else {
        footer.style.display = "flex";
    }
};
options[1].onclick = function () {
    if (footer.style.display = "flex") {
        footer.style.display = "none";
    } else {
        footer.style.display = "flex";
    }
};
options[2].onclick = function () {
    if (footer.style.display = "none") {
        footer.style.display = "flex";
    } else {
        footer.style.display = "none";
    }
};

// Move line four when clicked in about us

const bglFour = document.querySelectorAll("div[id^='bgl_four']");
const scrollCultvalmis = document.querySelectorAll("span[id^='scroll_cultvalmis']");
const scrollArrow = document.querySelectorAll("span[id^='scroll_arrow']");

const menus = document.querySelectorAll('.label_a, .label_b, .label_c');

menus[0].onclick = function () {
    bglFour[0].classList.remove("bg-four-center");
    bglFour[0].classList.remove("bg-four-end");
    scrollCultvalmis[0].classList.remove("scroll-cultvalmis");
    scrollArrow[0].classList.remove("scroll-arrow");
}

menus[1].onclick = function () {
    bglFour[0].classList.add("bg-four-center");
    bglFour[0].classList.remove("bg-four-end");
    scrollCultvalmis[0].classList.remove("scroll-cultvalmis");
    scrollArrow[0].classList.remove("scroll-arrow");
}

menus[2].onclick = function () {
    bglFour[0].classList.add("bg-four-end");
    bglFour[0].classList.remove("bg-four-center");
    scrollCultvalmis[0].classList.add("scroll-cultvalmis");
    scrollArrow[0].classList.add("scroll-arrow");
}