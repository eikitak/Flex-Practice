'use strict'
{
    window.addEventListener('DOMContentLoaded', () => {
        /////////////////////////////////////////////////
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('body', {
            opacity: 1,
            duration: .1
        });



        ////////////////////////////////////////////////
    });
}