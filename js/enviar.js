$(document).ready(function(){
    $(".formulario").bind("submit", function(){
        
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function(){
                Swal.fire(
                    '¡Mensaje Enviado!',
                    'Gracias por contactarme, tendrás una respuesta lo mas pronto posible.',
                    'success'
                  )
            },
            error: function(){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ha ocurrido un error!',
                    footer: '<a href="mailto:contacto@menyinchang.com">Haz click aquí para enviarme un correo.</a>'
                  })
            },
        });

        return false;
    })

})