
$(document).ready(function(){
    var slideLaps = 0;
    var clock = setInterval(function(){
        nextSlide()
        slideLaps++;
    }, 4000);
    if (slideLaps == 2) {
    clearInterval(clock);
}
});

$('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva

    // Definisco le funzioni nextImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // Invoco le funzioni per cambiare slide
    $('.prev').click(prevSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la precedente

    // Definisco le funzioni prevImage
    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var precedenteImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            precedenteImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var precedentePallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            precedentePallino.addClass('active');
        }
    }
