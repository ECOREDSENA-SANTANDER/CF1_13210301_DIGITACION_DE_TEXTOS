<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La digitación eficiente y ergonómica es esencial para prevenir problemas de salud ocupacional en personas que realizan trabajos frente a un computador. Este componente formativo no solo detalla las mejores prácticas para la digitación de textos, también enfatiza la importancia de mantener una postura adecuada, realizar pausas activas y utilizar el equipo de manera correcta para evitar problemas físicos como el síndrome del túnel carpiano y la epicondilitis. En este contexto, la formación en ergonomía se convierte en un aspecto clave para optimizar el rendimiento y la salud en el entorno laboral.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="La síntesis aborda la relación entre la digitación eficiente y la salud ocupacional, estructurando los puntos clave en torno a cuatro aspectos: posturas corporales para digitar, destacando la importancia de la posición adecuada para prevenir lesiones; uso correcto del teclado y mouse, subrayando la forma adecuada de utilizarlos para minimizar tensiones; consecuencias de una mala postura, que se reflejan en enfermedades derivadas; y políticas de salud ocupacional, que incluyen normativas colombianas relacionadas. Además, se incluyen recomendaciones ergonómicas para ajustar el entorno laboral y equipo de digitación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
