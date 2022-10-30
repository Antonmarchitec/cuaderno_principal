## DOCUMENTACION SWITCH ALERT
- https://sweetalert2.github.io/

1. Personalizar un archivo 'style.css':
    <link rel="stylesheet" href="./css/switchAlert.css">
2. Extraer CDN SCRIPT de su documentacion:
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
3. Datos importantes:

    //alert("rellene los espacios") Se reemplaza en vez de esta alerta
        Swal.fire({
            title:"<h2> RELLENAR TODOS LOS ESPACIOS <h2>",    //tilte si se acepta codigo html
            //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
            icon:"success",  //error   wargning  info  success
            confirmButtonText:"Aceptar",
            backdrop:true,    //el fondo se matiza oscuro con true y false 
            footer: '<h3>¡La información es importante!</h3>',  //se puede utilizar html
            //width:"35%",    //ancho de ventana trabajar en %
            //timer: 5000,
            //timerProgressBar: true,
            padding: "10px",   //paddinn ventana
            background:"rgba(17, 17, 17, 0.895)",   //fondo de la ventana
            //color:'white',
            //grow:"column",   //funciona como width o height con valores column, row , fullscreen
            position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
            
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"Confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#0000",
               cancelButtonAriaLabel:"dfdfa",

            //IMAGENES EN LA ALERTA
                imageUrl:'./img/ada.png',
                //imageWidth:'100px',
                //imageHeight:'100px',
                imageAlt:'ada',

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
                buttonsStyling: false,     //true para trabajar con stilos de switchAlert
                showCloseButton: true,     //coloca el la x para cerrar
                closeButtonAriaLabel:"Cerrar alerta",

            //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
                customClass:{
                    popup: "class_popup",
                    image:'class_image',
                    confirmButton:"class_buttonConfirm",
                    footer:'class_footer'

                    //container:'container',
                    //html:'class_title',
                    //header:'header',
                    //closeButton:'close_buttom',
                    //content:'class_content',
                    //input:'inputClass',
                    //actions:'actions',
                    //icon:"class_icon",
                    //cancelButton:"class_buttonCancel",
                },
        });
        return false;







INFORMACION COMPLEMENTARIA
COMANDOS SWITCH ALERT2
----------------------
----------------------

Swal.fire({
   title:"Bienvenido",
   text:"Espero te sea de utilidad",     
   html:'<b class="clase">Entrar</b>'    // estilizar en pagina de css
   icon:'success',   //error/ warning / info / question
   confirmButtonText:'Seleccionar',    //leyenda del boton
   footer:'<span class="red">Esta es info importante</span>',   //colocar un pie de pagina
   width:"600%"              //tamaño ancho de la alerta en %
   padding:"20px",           //de la alerta
   background:"yellow"
   grow:"fullscreen"       //row / column / fullscreen
   backdrop:true,             //false / true    (sin comillas)   //para cerrar la ventana desde fuera
   timer:5000,             //tiempo de estancia ventana
   timerProgressBar:true       //aparece barra progresiva
   toast: true,
   position:"center",        //bottom-start o end /top-start o end   (funciona con position)


   /***PAQUETE PARA VENTANA */
   allowOutsideClick:true,      //permitir que afuera de la alerta se de click y cerrarla
   allowEscapeKey:false,        //se cierra la alerta con la tecla esc
   allowEnterKey:false,         //que el usuario de click dentro de la alerta y se cierre
   stopKeydownPropagation:false,    // mas avanzado


   /***PAQUETE PARA VENTANA */
   customClass: {
      //container:''
      //popup:'clase'
      /*header:''
      title:''
      closeButton:''
      icon:''
      image:''
      content:''
      imput:''
      actions:''
      confirmButton:''
      cancelButton:''
      footer:''*/
   },




   /****BOTON DE CONFIRMACION*********** */
   showConfirmButton:true,       //true o false
   confirmButtonColor:"#203753",      //color del boton
   confirmButtonAriaLabel:"Confirmar",   //confirma el color de boton que le puse
   



   /****BOTON DE CANCELAR*********** */
   showCancelButton:true,     ///false o true para que se muestre
   cancelButtonText:"cancelar",
   cancelButtonColor:"",
   cancelButtonAriaLabel:"cancelar",



   /***SI SE QUIERE TRABAJAR CON LOS ESTILOS DE LA ALERTA*************************** */
   buttonsStyling:false,    //dapaso a que se trabaje con mis propios estilos y no con los de la libreria
                            //utilizando customClass:)
   showCloseButton:true,    //para mostrar icono x de cerrar ventana
   closeButtonAriaLabel:"cerrar alerta",    //un simple label



   /******SI SE QUISIERA TRABAJAR CON IMG******************** */
   imgUrl:'img/img1.png',      
   imageWidth:'200px',
   imageHeigth:'',
   imageAlt:'nombre-imagen'
});