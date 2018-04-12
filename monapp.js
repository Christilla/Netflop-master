$(document).ready(function() {

    //on récupére tous les éléments "a" enfants de l'élèment "nav"
    $('#nav > li > a').each(function(){
        //le this se réfère à l'enfant cliqué, on lui passe dans l'attribut href le contenu du dataset
       $(this).attr('href', '#' + $(this).data ('link'));
       $(this).on('click',function (){
           var tata = '#' + $(this).data('link');
            var vitesse = 900;
            $('html, body').animate({
                scrollTop:$(tata).offset().top
            }, vitesse);
            return false;      
        });
    });

$('.category > ul > li > a').on('click', function () {
    $('<div>').attr("id", "osef");
    $('<div>').append($('h2').addclass('titre').text('titre1'));
    $('<div>').append($('p').addclass('realisateur').text('realisateur1'));
    $('<div>').append($('p').addclass('date').text('date1'));
    $('<div>').append($('img').attr('src','image'));

});


});