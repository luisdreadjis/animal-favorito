


 //identificar campos del formulario
 var miFormulario= document.getElementById('form-contacto');
 var campoNombre = document.getElementById('nombre');
 var campoCorreo= document.getElementById('correo');
 var campoTelefono= document.getElementById('tel-user');
 var areaTematica= document.getElementById('curso');
 var cajaClausulas = document.getElementById('clausulas');

 //identificar mensajes de error
 var msjNombre= document.getElementById('msj-nombre');
 var msjCorreo= document.getElementById('msj-correo');
 var msjTelefono= document.getElementById('msj-tel');
 var msjTema= document.getElementById('msj-tema');
 var msjClausulas= document.getElementById('msj-clausulas');


 var todosMsjError= document.querySelectorAll('.mensaje-error');


 //dar valor inicial a las variables reciben el value de los campos;
 var valorNombre = null;
 var valorCorreo= null;
 var valorTel= null;
 var clausulasSeleccionado = false;


 //expresiones para validación
 var patronNombre = /^[\w\sñáéíóú]{2,20}$/i;
 var patronCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
 var patronTel = /^(?:[+]?(?:[0-9]{1,5}|\\x28[0-9]{1,5}\\x29)[ ]?)?[0-9]{2}(?:[0-9][ ]?){6}[0-9]$/;


 function validarFormulario(evento){

    //ocultar mensajes de error
    for(let i=0; i<todosMsjError.length; i++){
        //todosMsjError[i].classList.remove('error');
        todosMsjError[i].style.display="none";
    }
    
    //capturar valores de los campos:
    valorNombre = campoNombre.value;
    valorCorreo= campoCorreo.value;
    valorTel =campoTelefono.value;
    var cajaClausulas= document.querySelectorAll('[name="base-datos-clausulas"]:checked');
    

    //chequear valores
        if(!patronNombre.test(valorNombre) || valorNombre==null){
        msjNombre.style.display="block";
        //alert('escribe tu nombre')
        evento.preventDefault();
        campoNombre.focus();
        //msjNombre.classList.add('ver');
        }
        if(!patronCorreo.test(valorCorreo)){
            msjCorreo.style.display="block";
                  //alert('debes insertar tu correo electrónico');
                  evento.preventDefault();
                  campoCorreo.focus();
            //msjCorreo.classList.add('ver')
        }
        if(!patronTel.test(valorTel) || valorTel==null){
            msjTelefono.style.display="block";
            //alert('debes insertar un telefono valido');
            evento.preventDefault();
            campoTelefono.focus();
            // msjTelefono.classList.add('ver')
            }

        if(areaTematica.value==""){
            msjTema.style.display="block";
            //alert('Debes elegir un área temática');
            evento.preventDefault();
            areaTematica.focus();
            //msjTema.classList.add('ver')
            }   
                  
        if(cajaClausulas.length==0){
            msjClausulas.style.display="block";
            //alert('Debe aceptar las claúsulas legales');
            evento.preventDefault();
            //msjClausulas.classList.add('ver')
                             }
 }






 miFormulario.addEventListener('submit', validarFormulario);