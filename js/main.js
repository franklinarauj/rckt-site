// TAILWIND CONFIG
tailwind.config = {
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                black: '#000000',
                gray: '#535353',

                blue: '#2351db',
                blue_dark: '#1d41af',
                blue_light: '#5074e2',

                pink: '#ffb8db',
                pink_dark: '#ff85c4',
                pink_light: '#ffebf5',

                purple: '#6a36e3',
                purple_dark: '#501cca',
                purple_light: '#8b62ea',
                purple_opacity: '#9a60e1',

                green: '#4fe1bd',
                green_dark: '#2ed6a6',
                green_light: '#84e7cb',
            },
            backgroundImage: {
                'gear': "url('assets/bg-gear.png')",
                'nw': "url('../assets/nw.png')",
                'square-top': "url('assets/square-top.png')",
                'line-one': "url('assets/lines/1.png')",
                'line-two': "url('assets/lines/2.png')",
                'line-three': "url('assets/lines/3.png')",
                'line-four': "url('assets/lines/4.png')",
                'line-five': "url('assets/lines/5.png')",
            },
            width: {
                576: '36rem',
            },
            spacing: {
                18: '4.375rem',
                97: '70.66667vw',
                98: '34.5rem',
                99: '37.5rem',
                100: '40.5rem',
                101: '42.5rem',
                102: '50.5rem',
                102: '67.5rem',
                103: '72.5rem',
                104: '76.5rem',
                105: '82.5rem',
                106: '66.66667vw',
                107: '85.5rem',
                108: '90.5rem',
                109: '89.5rem',
                110: '95.5rem',
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'ml': '1056px',
                'gx': '1216px',
                'xg': '1232px',
                'xl': '1280px',
                '1xl': '1400px',
                '2xl': '1536px',
                '3xl': '1700px'
            },
            fontSize: {
                '10xl': '5rem',
            }
        }
    }
}

// Get a width screen

var widthScreen = this.screenWidth = document.body.clientWidth;

// Get a height screen

var heightScreen = this.screenHeight = document.body.clientHeight;

// Scroll with fade in on about us page

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});
