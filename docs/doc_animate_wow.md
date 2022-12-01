1. Extraer cdn de la pagina animate.css
   <link
    rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

2. Extraer el script de la pagina oficial
    <!--SCRIPT DE ANIMATION EL SCROLLING-->
    <script src="./js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>

3. Insertar en los elemntos que queremos animar
<h1 class="animate__animated animate__bounce">An animated element</h1>







/*DOCUMENTACION*/

Clases de retraso
Puede agregar retrasos directamente en el atributo de clase del elemento, así:

<div class="animate__animated animate__bounce animate__delay-2s">Example</div>
Animate.css proporciona los siguientes retrasos:

Nombre de la clase	Tiempo de retardo predeterminado
animate__delay-2s	2s
animate__delay-3s	3s
animate__delay-4s	4s
animate__delay-5s	5s



Clases lentas, más lentas, rápidas y más rápidas
Puede controlar la velocidad de la animación agregando estas clases, como se muestra a continuación:

<div class="animate__animated animate__bounce animate__faster">Example</div>

animate__slow	2s
animate__slower	3s
animate__fast	800ms
animate__faster	500ms



USO CON JAVASCRIPT
Puedes hacer muchas otras cosas con animate.css cuando lo combinas con Javascript. Un ejemplo sencillo:

const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');







ANIMATE
1. Colocar archivo minificado en el head "min.css"
<!--ANIMATE.CSS-->
    <link rel="stylesheet" href="./css/animate.min.css">

    tambien podemos utilizar CDN
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

2. <!--SCRIPT DE ANIMATION EL SCROLLING-->
    <script src="./js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
