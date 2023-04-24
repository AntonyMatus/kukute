// -----------> jQuery
(function($) {
    "use strict";


    // -----------------------
    // preloader area here js
    // ------------------------ 
    $(window).on('load', function() {
        $('.preloder').fadeOut('slow', function() {
            $(this).remove();
        });
    });


    // -----------------------
    // This will create a sticky js
    // header area here
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });


    /*---------------------
    Header area here
    --------------------- */
    // search box area here 
    $(".bar_container").click(function(){
        $(".header_container").toggleClass("show");
    });
    $(".closing_container").click(function(){
        $(".header_container").removeClass("show");
    });


    /*---------------------
    Header navigation area here
    --------------------- */
    $('.navigation > li > a').click(function(){
        $(this).parent().toggleClass('SubMenuShow');

    });


    // -----------------------
    // This will create a owlCarousel
    // testimonial area here js
    // -----------------------
    $(".cl_carousel").owlCarousel({
        loop: true,
        items: 5,
        margin: 30,
        nav: false,
        dots: false,
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            700: {
                items: 3,
                margin: 20
            },
            1200: {
                items: 5,
                margin: 30
            }
        }
        
    });

    $(".cl_carousel2").owlCarousel({
        loop: false,
        items: 1,
        margin: 30,
        nav: false,
        dots: false,
        center: true,
        autoplay: false,
        smartSpeed: 2000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            700: {
                items: 1,
                margin: 20
            },
            1200: {
                items: 1,
                margin: 30
            }
        }
        
    });

    // -----------------------
    // This will create a counter up js
    // -----------------------
    $('.totalfunfact span').counterUp({
        delay: 10,
        time: 1000
    });


    // -----------------------
    // aos animate js
    // -----------------------
    AOS.init({
        duration: 1000,
        once: true
    });

    
    // -----------------------
    // This will create a video gallery magnific popup js
    // -----------------------
    $('.expand-video').magnificPopup({
        type: 'iframe'
    });

    // form-contact
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        email();
    });

    function email() {
        let datos = new FormData(formulario);
        fetch(`../../assets/email-templates/contact-form.php`, {
            method: 'POST',
            body: datos
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data === 'exito'){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Exito",
                    text: "El mensaje ha sido enviado con exito!",
                    showConfirmButton: false,
                    timer: 3500
                });
                formulario.reset();
            } else { 
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Oops",
                    text: "Error al enviar el mensaje",
                    showConfirmButton: false,
                    timer: 3500
                });
            }
        })
    }
}(jQuery));