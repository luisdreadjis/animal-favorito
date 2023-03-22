$(window).on('scroll', moverBarra);

function moverBarra(){
    var scrollRealizado = $(window).scrollTop();
    //console.log(scrollRealizado);

    //calcular alto total scroleable
    var altoScroleable = $('body').innerHeight() - $(window).innerHeight();

    //calcular porcentaje scroleado
    var porcentajeScroleado = scrollRealizado / altoScroleable * 100;
    //console.log(porcentajeScroleado);

    //dar anchura a la barra en función del valor de porcentajeScroleado
    $('#barra').css('width', porcentajeScroleado + '%');

}

/* botón enlace menu */
/* $('.enlace-menu').on('click', function(){
    $('.visible ul').fadeToggle(1000);
    //resto de acciones
}); */


/* método toggleClass */

$('.enlace-menu').on('click', function(){
    $('.navegacionPrincipal').toggleClass('visible');
})


 //eventos cerrar y abrir modal
 $('#bot-abrir-modal').on('click', abrirModal);
 $('#bot-cerrar-modal').on('click', cerrarModal);
 $(document).on('keydown', function(evento){
  var tecla= evento.key;
  console.log(tecla);
  
  if(tecla=="Escape"){
      cerrarModal();
  }
 })

 function abrirModal(){
     $('.fondoModal').fadeIn(700, function(){
      $('.ventanaModal').fadeIn(1000);
     });
     
 }

 function cerrarModal(){
  $('.fondoModal,.ventanaModal').fadeOut(300);
 }
