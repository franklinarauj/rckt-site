// Select in panel in partners slide content

const slide = document.querySelectorAll("div#panels section");
const slide_btn = document.querySelectorAll("button[id^='btn_']");
const changeColorLine = document.querySelectorAll("div[id^='ptn-line-t']");

for (let i = 0; i < slide.length; i++) {
    slide[i].addEventListener("click", function () {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.add("show-panel");
            slide[i].classList.remove("hide-panel");

            slide_btn[i].classList.add("show-btn");
            slide_btn[i].classList.remove("hide-panel");

            changeColorLine[i].classList.add("hide-line");
            changeColorLine[i].classList.remove("show-line");
        }
        
        this.classList.add("hide-panel");
        this.classList.remove("show-panel");

        slide_btn[i].classList.add("hide-panel");
        slide_btn[i].classList.remove("show-btn");

        changeColorLine[i].classList.add("show-line");
        changeColorLine[i].classList.remove("hide-line");
    });
}