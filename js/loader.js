// LOADER CONFIG
var loader = document.getElementById("preloader");

window.addEventListener("load", function (load) {
    window.removeEventListener('load', load, false);
    setTimeout(function () {
        loader.style.display = "none";
    }, 3000);

    if (preloader.className) {
        document.getElementById('preloader').className = '';
    } else {
        document.getElementById('preloader').className = 'fade';
    }

}, false)