$(document).ready(function(){

    var alturaPantalla = parseInt($(window).height());
    var scroll;

    $('header .menu a').each(function(index, el) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top:'0'
        }, 1000 + (index * 500));
    });

    $('header .layer .some-space .nombreHeader, header .layer .some-more-space').css({
        opacity : 0,
        marginTop : 0
    });

    $('header .layer .some-space .nombreHeader, header .layer .some-more-space').animate({
        opacity : 1,
        marginTop : '-35px'
    }, 1500);

    $('.menu a, .layer .some-more-space a').click(function(e){               
            e.preventDefault();     //evitar el eventos del enlace normal
            
            var strAncla=$(this).attr('href'); //id del ancla
                $('body,html').stop(true,true).animate({                
                    scrollTop: $(strAncla).offset().top
                },1000);
    });

    $(window).scroll(function() {
        scroll = $(window).scrollTop();

        if( scroll >= alturaPantalla / 5){
            $('.main .acercaDe .texto .titulo').addClass('tracking-in-expand');
        }

        if( scroll >= alturaPantalla / 2){
            $('.main .acercaDe .hexagono').addClass('roll-in-left');
        }

        if( scroll >= alturaPantalla){
            $('.lineamientos .titulo, .lineamientos .texto').addClass('tracking-in-expand');
        }

        if( scroll >= alturaPantalla / 0.75){
            $('.card').addClass('slide-in-left');
        }

        if( scroll >= alturaPantalla / 0.75){
            $('.habilidades').addClass('slide-in-right');
        }

        if( scroll >= alturaPantalla / 0.75){
            $('.fill').addClass('slide-left');
        }
        
        if( scroll >= alturaPantalla / 0.38){
            $('.main .trabajos .contenedor .contenedorTrabajos .trabajo').addClass('slide-in-elliptic-top-fwd');
        }

    }); 
    
    


    
    
    
});