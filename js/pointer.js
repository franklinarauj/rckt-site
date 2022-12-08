// CURSOR POINTER CONFIG
const OPTS = {
    fill: 'none',
    radius: 25,
    strokeWidth: {
        50: 0
    },
    scale: {
        0: 1
    },
    angle: {
        'rand(-35, -70)': 0
    },
    duration: 500,
    left: 0,
    top: 0,
    easing: 'cubic.out'
};

const circle1 = new mojs.Shape({
    ...OPTS,
    stroke: '#6a36e3',
});

const circle2 = new mojs.Shape({
    ...OPTS,
    radius: {
        0: 15
    },
    strokeWidth: {
        30: 0
    },
    stroke: '#2351db',
    delay: 'rand(75, 150)'
});

const circle3 = new mojs.Shape({
    ...OPTS,
    radius: {
        0: 5
    },
    strokeWidth: {
        10: 0
    },
    stroke: '#ff85c4',
    delay: 'rand(115, 230)'
});

document.addEventListener('click', function (e) {
    circle1
        .tune({
            x: e.pageX,
            y: e.pageY
        })
        .replay();

    circle2
        .tune({
            x: e.pageX,
            y: e.pageY
        })
        .replay();

    circle3
        .tune({
            x: e.pageX,
            y: e.pageY
        })
        .replay();
});