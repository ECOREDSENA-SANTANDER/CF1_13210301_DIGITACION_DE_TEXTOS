<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Consecuencias de una mala postura
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img23.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-5 Las posturas recomendadas para realizar las tareas no solo facilitarán un trabajo más cómodo y eficiente, sino que también ayudarán a prevenir molestias e incluso enfermedades a corto y largo plazo. Un par de ejemplos de malas posturas comunes durante la digitación incluyen la incorrecta alineación de la columna y la posición inadecuada de las piernas, lo que puede generar tensión muscular y problemas posturales con el tiempo.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 11. 
          | Posición incorrecta de columna y piernas
        img.img-a.img-t(src='@/assets/curso/temas/img24.svg', alt='La imagen ilustra cuatro posiciones diferentes de una persona sentada frente a un escritorio con un monitor, destacando las posturas incorrectas y correctas para trabajar de manera ergonómica. Las dos primeras posiciones, marcadas como incorrectas, muestran una espalda encorvada, un ángulo inadecuado entre la cabeza y el monitor, y una falta de apoyo adecuado para los pies y la espalda. En contraste, la postura correcta, marcada con un símbolo de aprobación, muestra una espalda recta, una distancia de 40 a 50 cm entre los ojos y el monitor, y un ángulo visual de 30 grados. Además, se asegura que los pies estén apoyados en el suelo, lo que favorece una alineación adecuada del cuerpo y previene problemas posturales.')
      .col-lg-4.col-md-7.col-7
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/img25.png', alt='.')

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Consecuencias a corto plazo

    p.mb-4(data-aos="fade-left") Permanecer en una posición rígida durante un tiempo prolongado puede generar síntomas de fatiga, como dolores de cabeza, calambres, adormecimiento, y molestias oculares. Para mitigar estos efectos, es recomendable incorporar pausas activas que ayuden a reducir el impacto negativo de mantener la misma postura por periodos extendidos.

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Consecuencias a largo plazo

    p.mb-4(data-aos="fade-left") Permanecer en una posición rígida durante un tiempo prolongado puede generar síntomas de fatiga, como dolores de cabeza, calambres, adormecimiento, y molestias oculares. Para mitigar estos efectos, es recomendable incorporar pausas activas que ayuden a reducir el impacto negativo de mantener la misma postura por periodos extendidos.

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-7.col-7.mb-4(data-aos="fade-left" data-aos-delay="500")
          img(data-aos="zoom-in-left")(src="@/assets/curso/temas/img26.png")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Síndrome del túnel carpiano")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Causado por una mala postura de las manos al usar la computadora, se caracteriza por la compresión del nervio mediano, provocando adormecimiento y dolor en la mano.
          .row.col-xl-11.m-auto(titulo="Síndrome del ojo seco")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Asociado a cambios hormonales que disminuyen la producción de lágrimas, y agravado por la exposición al sol, ambientes secos y tabaquismo.
          .row.col-xl-11.m-auto(titulo="Tenosinovitis")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Inflamación de los tendones cercanos a la base del pulgar, acompañada de hinchazón, dolor intenso y entumecimiento en la zona afectada.
          .row.col-xl-11.m-auto(titulo="Bursitis")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Inflamación de una “bursa”, una pequeña bolsa que protege y amortigua los huesos. Suele afectar rodillas y codos.
          .row.col-xl-11.m-auto(titulo="Epicondilitis (codo de tenista)")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Inflamación del epicóndilo, donde los músculos del antebrazo se conectan con los huesos del codo, causando dolor al apretar, girar o realizar movimientos en forma de gancho.
          .row.col-xl-11.m-auto(titulo="Tendinitis")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Inflamación de los tendones de las manos, caracterizada por dolor intenso en el área afectada, tratándose generalmente con inmovilización temporal del antebrazo.


</template>

<script>
export default {
  name: 'Tema3',
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
