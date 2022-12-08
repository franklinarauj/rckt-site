// LOADER LETTERS CONFIG
anime.timeline({
    loop: false
})
.add({
    targets: '.ml5 .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 800
}).add({
    targets: '.ml5 .line',
    duration: 800,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
})
.add({
    targets: '.ml5 .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=600'
}).add({
    targets: '.ml5 .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=300'
}).add({
    targets: '.ml5 .letters-right',
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=600'
}).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});