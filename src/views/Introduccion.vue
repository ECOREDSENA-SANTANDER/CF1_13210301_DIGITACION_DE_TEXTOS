<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El presente componente, capacita a los aprendices en el uso adecuado del teclado y el #[em mouse], promoviendo posturas ergonómicas que previenen enfermedades ocupacionales. A través de técnicas de digitación y ejercicios de pausas activas, el programa busca optimizar la velocidad y precisión en la digitación, mejorando así el rendimiento y bienestar laboral.

    .row
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aFBZtXKyhQI?si=ASH9N01akq2zl-OA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Digitación eficiente y salud ocupacional


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
