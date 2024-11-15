<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ergonomía y salud ocupacional
    
    p.mb-4(data-aos="fade-left") Hoy en día, mantener una buena postura no es solo una cuestión de cuidado personal o de mejorar la digitación, sino que forma parte de una política de prevención en salud. En Colombia, existen regulaciones que obligan a las empresas a prestar atención a las condiciones de trabajo, especialmente a las posturas y actividades de quienes pasan largas horas frente a un computador.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img15.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-5 Para cumplir con estas regulaciones, es fundamental comprender la ergonomía, definida como la ciencia que busca adaptar productos, sistemas y entornos a las características y necesidades de los usuarios, optimizando su eficiencia, seguridad y confort (Asociación Internacional de Ergonomía, 1999). La ergonomía establece los parámetros que las entidades de salud pública deben implementar para asegurar que el trabajo frente a un computador se realice de manera efectiva y sin riesgos para la salud. En este contexto, las aseguradoras de riesgos profesionales en Colombia promueven políticas que buscan mejorar las condiciones laborales.

    separador
    #t_2_1.titulo-segundo.mb-4
      h2 2.1 Políticas de salud ocupacional

    p.mb-4(data-aos="fade-right") Para proteger la salud de los trabajadores en labores administrativas, se han promulgado leyes, resoluciones y decretos basados en la Constitución, convenios de la #[b Organización Internacional del Trabajo y el Código Sustantivo del Trabajo.] Estas normativas establecen parámetros en salud ocupacional que garantizan el desarrollo seguro de actividades frente al computador, minimizando el riesgo de enfermedades posturales.
    p.mb-4(data-aos="fade-left") La siguiente figura presenta algunas de las políticas más relevantes en esta materia en Colombia:
    
    .row.justify-content-center.align-items-end.mb-3(data-aos="fade-right")
      .col-lg-7
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 10. 
          | Políticas de salud ocupacional
        img.img-a.img-t(src='@/assets/curso/temas/img16.svg', alt='La imagen presenta un esquema que detalla diferentes políticas de salud ocupacional en Colombia. Se listan leyes y decretos, como la Ley 9 de 1979, la Ley 100 de 1993, el Decreto 1607 de 2002, el Decreto 1477 de 2014, y resoluciones como la 1016 de 1989 y la 2013 de 1986. Cada normativa se acompaña de una breve descripción de su utilidad, que incluye temas como medidas sanitarias, seguridad social y gestión de riesgos laborales, así como la fuente de consulta, con enlaces para acceder a los textos completos de dichas normativas.')
      .col-lg-5.col-md-7.col-7
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/img17.png', alt='.')
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img18.png",alt='')
      .col-lg-4
        p.mb-4 Según lo establece la #[b Resolución 1016 de 1989], los siguientes son los subprogramas de salud ocupacional que regulan el buen desarrollo de las labores dentro de las empresas:
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Subprograma de Medicina Preventiva y del Trabajo.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Subprograma de Higiene Industrial.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Subprograma de Seguridad Industrial.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Comité Paritario de Salud Ocupacional.

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Guía de prevención para evitar enfermedades posturales en el trabajo de digitación

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-5.col-md-7.col-7
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img19.png",alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-2
            img.img-a.img-t.mb-4.d-none.d-lg-block(src="@/assets/curso/temas/img20.svg",alt='')
          .col-lg-10
            p.mb-4 La #[em Universitat Politècnica de Catalunya] (2011) promueve un adecuado desempeño en las labores de digitación mediante una serie de recomendaciones esenciales para prevenir enfermedades posturales. Se sugiere que estas indicaciones se implementen rigurosamente en el entorno de trabajo y se alineen con las posturas previamente mencionadas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Para evitar que el uso del monitor genere malas posturas de espalda, cuello o brazos, se deben seguir las siguientes pautas:

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Colocar el monitor a la altura de los ojos. Si está por encima o por debajo, se provocarán extensiones inadecuadas del cuello.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Mantener una distancia mínima de 50 cm entre el usuario y el monitor.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Posicionar el monitor directamente frente al usuario. Colocarlo a un lado obligará a realizar giros del cuello.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Asegurarse de que las imágenes, textos, números y gráficos sean fácilmente visibles, ya que el esfuerzo para ver caracteres pequeños puede llevar a inclinaciones incorrectas de la cabeza.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Evitar que el monitor refleje la luz natural o artificial, ya que esto puede causar deslumbramiento en los ojos.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Configurar el monitor con niveles de contraste adecuados, lo que ayudará a evitar dificultades visuales al leer o interpretar gráficos e imágenes.
      .col-lg-4.col-md-7.col-7
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img21.png",alt='')
      
    p.mb-4(data-aos="fade-left") La adaptación del teclado también es fundamental. A continuación, se detallan algunas recomendaciones para mantener una postura adecuada frente a este dispositivo:

    .row.justify-content-center.mb-2(data-aos="fade-right")
      .col-lg-10
        .row.justify-content-center
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              p.mb-4.text-center.my-4 Dejar una distancia de aproximadamente 10 cm entre el teclado y el borde de la mesa, permitiendo apoyar cómodamente los antebrazos, muñecas y manos.
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              p.mb-4.text-center.my-4 Evitar el uso de las patas traseras del teclado, ya que esto reduce la extensión de las muñecas.
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              p.mb-4.text-center.my-4 Asegurarse de que el teclado esté alineado de forma paralela al borde de la mesa, facilitando un apoyo equilibrado de los brazos.

    p.mb-4(data-aos="fade-left") Para mejorar la comodidad y reducir la tensión, es fundamental apoyar el antebrazo, la muñeca y la mano de manera adecuada:

    .row.justify-content-center.align-items-center
      .col-lg-5.col-md-9.col-9.mb-4.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/img22.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .tarjeta.bg3.p-4
          SlyderA
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 Mantenga el #[em mouse] a una altura mínima para evitar extensiones innecesarias de la muñeca.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 Al mover el #[em mouse], utilice la mano, muñeca y antebrazo de forma conjunta, evitando desviaciones o giros excesivos de la muñeca.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 Coloque el #[em mouse] al mismo nivel que el teclado y lo más cerca posible de este para facilitar su uso.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 Asegúrese de que el #[em mouse] tenga un tamaño adecuado, de modo que permita apoyar la mano de manera completa y confortable.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 Reubique cualquier objeto que interfiera con la movilidad del #[em mouse], asegurando un espacio libre para su correcto manejo.

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
