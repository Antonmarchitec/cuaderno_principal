## https://swiperjs.com/get-started

## SWIPERJS

1. INTEGRAREMOS A TRAVEZ DE LOS CDN 
     <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>


2. ENLASAREMOS LOS ENLACES EXTERNOS (SACAR LOS ARCHIVOS DE LOS OTROS PROYECTOS)
    <!--LINK CSS  -->
    <link rel="stylesheet" href="./css/swiper.css">  
    <!-- Initialize Swiper -->
    <script src="./js/swiper.js"></script>

3. COPIAR DENTRO DE UN CONTENEDOR LA ESTRUCTURA SWIPER
    <div class="cont">
        <!-- Swiper -->
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>