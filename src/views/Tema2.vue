<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ergonomía y salud ocupacional


    separador
    #t_2_1.titulo-segundo.mb-4
      h2 2.1 Políticas de salud ocupacional




    separador
    #t_2_2.titulo-segundo.mb-4
      h2 2.2 Guía de prevención para evitar enfermedades posturales en el trabajo de digitación
























</template>

<script>
export default {
  name: 'Tema2',
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
