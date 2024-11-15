<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Posturas corporales para digitar
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-5 Al escribir, es fundamental adoptar una postura corporal adecuada, especialmente si se utiliza un teclado. Hoy en día, existe una amplia variedad de teclados que incluyen desde los estándares, que se encuentran en la mayoría de los computadores personales, hasta los inalámbricos, ergonómicos e incluso virtuales.

    separador
    #t_1_1.titulo-segundo.mb-4
      h2 1.1 Posturas frente al teclado

    TabsC.color-primario.mb-5(data-aos="fade-left")
      .py-3.py-md-4.bg1.px-3(titulo="El teclado con inclinación negativa")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6
            p.mb-4 Se considera la postura ideal, ya que reduce tanto las cargas musculares dinámicas como las estáticas, esta posición se logra ubicando el teclado por debajo del nivel del codo cuando la persona está sentada.
            p.mb-4 La inclinación del teclado facilita una separación cómoda entre el usuario y el dispositivo, permitiendo el acceso a todas las secciones del teclado mientras las manos permanecen en una posición natural.
          .col-lg-5
            .row.justify-content-center.align-items-center
              .col-lg-11
                .titulo-sexto.color-secundario.mb-4
                  h5 Figura 1. 
                  | Posición de teclado con inclinación negativa
            .row.justify-content-center.align-items-center
              .col-lg-10
                img.img-a.img-t(src='@/assets/curso/temas/img2.svg', alt='La imagen presenta a una persona sentada frente a una computadora, adoptando una postura ergonómicamente adecuada e ideal. La persona está utilizando una silla con respaldo que apoya completamente la espalda, los pies están firmemente apoyados en el suelo, y los brazos se encuentran en un ángulo de 90 grados mientras usa el teclado en esa inclinación. El monitor está ubicado a una altura adecuada para mantener el cuello recto, y la posición de las piernas permite una postura relajada y alineada. Esta disposición promueve la comodidad y la salud postural durante el trabajo prolongado en el computador.')
      .py-3.py-md-4.bg1.px-3(titulo="Bandeja para teclado bajo la mesa")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6
            p.mb-4 Aunque es muy común, esta postura resulta inadecuada pues no permite que los codos y las manos logren un acomodamiento ideal.
            p.mb-4 La presión se hace mayor si el usuario ubica el teclado en ángulos mayores al ubicarlos en el borde de la bandeja.
          .col-lg-5
            .row.justify-content-center.align-items-center
              .col-lg-11
                .titulo-sexto.color-secundario.mb-4
                  h5 Figura 2. 
                  | Posición de bandeja para teclado bajo la mesa
            .row.justify-content-center.align-items-center
              .col-lg-10
                img.img-a.img-t(src='@/assets/curso/temas/img3.svg', alt='La imagen presenta a una persona sentada en una posición ergonómica  frente a un escritorio que incluye una bandeja para el teclado ubicada debajo de la superficie principal. Los brazos están alineados, pero sus muñecas no están ubicadas de forma correcta. Por ello no es recomendable esta ubicación.')
      .py-3.py-md-4.bg1.px-3(titulo="El teclado sobre la superficie del escritorio")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6
            p.mb-4 Es una disposición común; sin embargo, no es la más recomendada. Esta configuración obliga a las muñecas a una posición de hiperextensión, lo que genera presión en los antebrazos.
            p.mb-4 Además, los codos no se encuentran en el ángulo adecuado para permitir que las manos adopten una postura neutral.
          .col-lg-5
            .row.justify-content-center.align-items-center
              .col-lg-11
                .titulo-sexto.color-secundario.mb-4
                  h5 Figura 3. 
                  | Posición de teclado sobre la superficie del escritorio
            .row.justify-content-center.align-items-center
              .col-lg-10
                img.img-a.img-t(src='@/assets/curso/temas/img4.svg', alt='La imagen presenta a una persona sentada en una posición ergonómica, frente a un escritorio que incluye una bandeja para el teclado ubicada sobre  la superficie principal. Los brazos no están a un ángulo de 90 grados, con lo cual tendría una postura relajada mientras se utiliza el teclado. El respaldo de la silla apoya la espalda, los pies permanecen planos sobre el suelo y las piernas mantienen una posición relajada, lo que ayuda a evitar tensiones. Aunque algunos aspectos son positivos, lo ideal es la posición de la Figura 1. Posición de teclado con inclinación negativa.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-lg-4.p-md-5.p-5
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
                  img.img-a.img-t.mbt(src="@/assets/curso/temas/img5.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-2.text-white Para complementar esta información diríjase al siguiente anexo, llamado “recomendaciones ergonómicas”.
                    .col-lg-auto.pe-lg-5
                      a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Complementaria/institution/SENA/Tecnologia/13210301/Contenido/Manuales/RE_004_01_Equipos_con_PVD.pdf" target="_blank")
                        span.ps-2.pe-2 Descargar
                        i.fas.fa-file-download

    separador
    #t_1_2.titulo-segundo.mb-4
      h2 1.2 Uso correcto del #[em mouse]

    p.mb-5(data-aos="fade-left") El #[em mouse] es un componente esencial en el proceso de digitación, y una adecuada colocación de la mano sobre este dispositivo facilita enormemente su uso. A continuación, se presentan algunas recomendaciones para su correcta utilización:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 El teclado y el #[em mouse] deben estar a la misma altura, lo que permitirá que ambos brazos se relajen de manera simétrica.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Asegúrese de que el teclado esté centrado con respecto al cuerpo, manteniendo el #[em mouse] lo más cerca posible.
          li.d-flex.mb-4
            i.fas.fa-circle-check.cr
            p.mb-0 Reduzca la distancia entre el #[em mouse] y la mano para favorecer una postura ergonómicamente adecuada.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Otras recomendaciones importantes para posición correcta de las manos, tanto en el #[em mouse] como en el teclado. Considere lo siguiente:
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Mantenga las muñecas rectas tanto al escribir en el teclado como al usar el #[em mouse].
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Evite doblar las muñecas en direcciones lateral, superior o inferior. Si es necesario, ajuste los soportes del teclado para alcanzar la posición y el ángulo óptimos.
          li.d-flex.mb-4
            i.fas.fa-circle-check.cr
            p.mb-0 Las manos y muñecas deben mantenerse en suspensión sobre el teclado, sin apoyarse directamente en él. Esto permitirá que el brazo se extienda para alcanzar las teclas más alejadas, en lugar de depender únicamente de los dedos para esta tarea.
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 4. 
          | Correcta ubicación de la mano en el #[em mouse]
        img.img-a.img-t(src="@/assets/curso/temas/img6.svg",alt='La imagen presenta varias posiciones de las manos sobre un teclado y un mouse, indicando cuáles son las posturas correctas e incorrectas. Las posiciones correctas se destacan con marcas de verificación verde y consisten en mantener las manos alineadas con el teclado y el mouse, evitando flexiones exageradas de las muñecas. Las posiciones incorrectas, marcadas con una X roja, incluyen manos colocadas de manera muy juntas, muñecas dobladas hacia arriba o abajo, y una excesiva extensión o inclinación en el uso del mouse, lo que puede generar incomodidad o lesiones.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 5. 
          | Posición de muñecas al utilizar el #[em mouse]
        img.img-a.img-t(src="@/assets/curso/temas/img7.svg",alt='La imagen contrasta dos posiciones de las manos al usar el teclado y el ratón. A la izquierda, se presenta una postura incorrecta, en la que las muñecas están inclinadas hacia los lados, generando tensión en las articulaciones y riesgo de dolor o lesión. A la derecha, la posición correcta indica que las manos y muñecas deben mantenerse rectas y alineadas con los antebrazos, evitando la desviación lateral y distribuyendo de forma adecuada la presión en las articulaciones, lo que minimiza el esfuerzo y favorece una postura ergonómica.')

    separador
    #t_1_3.titulo-segundo.mb-4
      h2 1.3 Posturas de cuello, brazos y pies

    p.mb-4(data-aos="fade-left") Ya sea que trabaje o juegue, es fundamental mantener posturas adecuadas para mejorar la productividad y prevenir problemas físicos, además, es recomendable realizar pausas activas para evitar que el cuerpo permanezca en posiciones inadecuadas durante periodos prolongados.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img8.svg",alt='')
      .col-lg-8
        p.mb-4 Al interactuar con su equipo de trabajo, asegúrese de organizar el entorno y los instrumentos de manera que le permitan una postura cómoda, lo cual dependerá en gran medida del espacio disponible y de las condiciones del lugar de trabajo.
        p.mb-4 A continuación, se presentan algunas indicaciones para evitar problemas posturales:
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 La silla debe contar con soporte lumbar y ser regulable en inclinación.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 Debe tener una altura ajustable, idealmente con un rango de cinco pies, y contar con ruedas para facilitar el movimiento, además de un reposapiés.
          li.d-flex.mb-2
            i.fas.fa-circle-check.cr
            p.mb-0 El asiento debe ser flexible y estar posicionado a una altura de entre 38 y 48 centímetros del suelo.
          li.d-flex.mb-4
            i.fas.fa-circle-check.cr
            p.mb-0 Tanto la superficie de trabajo como la silla deben ajustarse a la altura adecuada para mantener una postura natural y prevenir la fatiga.

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Evite posturas sedentarias y ángulos incorrectos de la pantalla

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-4 Las complicaciones posturales más comunes incluyen dolores en el cuello, hombros, y en las regiones lumbar y dorsal; para prevenir problemas de postura, es esencial desarrollar el hábito de sentarse con la espalda recta, lo que contribuye a evitar alteraciones en la columna vertebral. 
            |
            br
            br
            p.mb-4 Algunos expertos sugieren que una postura con una leve curvatura en la espalda puede reducir la fatiga de los músculos dorsales, en este punto encontrarás unos consejos útiles.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sextos.color-primario.t.mb-4
          h3.mb-2.my-1 Cuidado del cuello
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6
        p.mb-4 Para evitar molestias en el cuello, es crucial ajustar la posición de la cabeza en relación con la pantalla, pues la distancia, altura e inclinación deben estar configuradas de manera que la mirada no provoque tensión adicional en el cuello. Realizar ejercicios de fortalecimiento para el cuello, brazos, antebrazos y espalda también contribuye a disminuir la tensión en estas zonas.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12.col-md-9.col-9
            img.img-a.img-t(src="@/assets/curso/temas/img10.png",alt='')
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 6. 
          | Postura correcta para el cuidado del cuello
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img11.svg",alt='La imagen detalla una posición de sentado adecuada frente a un escritorio para asegurar una postura ergonómica. La altura de la mesa está entre 72-75 cm, mientras que la silla ajustable tiene una altura de 38-55 cm. El monitor está situado a nivel de los ojos, con una distancia de 40-75 cm y un ángulo mínimo de 20° hacia abajo. Los pies deben descansar en un reposapiés para mantener un soporte adecuado, y las piernas deben formar un ángulo de entre 90 y 110 grados. La espalda permanece recta, apoyada en el respaldo de la silla para proporcionar soporte lumbar.')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sextos.color-primario.t.mb-4
          h3.mb-2.my-1 Cuidado de los brazos

    p.mb-4(data-aos="fade-left") Los brazos deben estar apoyados a una altura que garantice comodidad en los codos, permitiendo que los brazos caigan relajadamente a los lados del cuerpo. Para lograrlo, es importante que los codos formen un ángulo de 90°, lo que facilita que antebrazos, muñecas y manos se mantengan alineados. Las manos deben estar en contacto con superficies suaves y curvadas para mayor confort. Además, la distancia de apoyo de los brazos debe permitir al usuario cambiar de posición fácilmente, es decir, poder levantarse y sentarse sin dificultad. El apoyo no debe ser demasiado extenso, ya que limitaría el movimiento en relación con otros muebles.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 7. 
          | Posición correcta de los brazos al digitar
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img12.svg",alt='La figura ilustra una postura ergonómica adecuada para trabajar en una computadora. Una persona está sentada en una silla con respaldo, manteniendo la espalda recta y apoyada. Los brazos están colocados en ángulo recto, con los antebrazos alineados horizontalmente mientras utiliza el teclado. El monitor se encuentra a la altura de los ojos, colocado sobre una base para asegurar una posición neutral del cuello. Las rodillas forman un ángulo de 90 grados, con los pies apoyados en el suelo, lo que favorece una correcta alineación corporal y reduce la tensión muscular.')
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 8. 
          | Posición incorrecta de los brazos al digitar
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img13.svg",alt='La imagen presenta a una persona sentada frente a un teclado con los brazos en una postura semi estirada, sin formar un ángulo de 90 grados en los codos. La espalda parece apoyarse parcialmente en el respaldo de la silla, y los antebrazos están inclinados hacia adelante. La posición de los brazos puede generar tensión en los hombros y codos, lo cual no es óptimo. Un texto en la imagen destaca el hecho de que los brazos no están en la posición adecuada, sugiriendo la necesidad de ajustar la postura para mejorar la ergonomía.')
    
    p.mb-4(data-aos="fade-left") Normalmente, las personas tienden a estirar los brazos al teclear, lo que resulta en una postura inadecuada que puede afectar tanto la comodidad como la salud a largo plazo. Esta posición incorrecta de los brazos genera una tensión innecesaria en los músculos del cuello, los hombros y los antebrazos, lo que puede llevar a fatiga muscular y con el tiempo, a problemas más graves como el síndrome del túnel carpiano o tendinitis. Mantener los brazos estirados al digitar también puede provocar una alineación deficiente de las muñecas, lo que aumenta el riesgo de lesiones por esfuerzo repetitivo. Para evitar estos problemas, es recomendable mantener los codos en un ángulo de 90 grados o ligeramente abiertos y apoyar las muñecas en una superficie suave.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .titulo-sextos.color-primario.t.mb-4
              h3.mb-2.my-1 Cuidado de los pies
        p.mb-4 Los pies deben mantenerse firmes sobre el suelo, preferiblemente con uno ligeramente más adelantado que el otro para mejorar el equilibrio. Es importante evitar colocar objetos debajo de la mesa, ya que esto limita la movilidad y afecta la comodidad de las piernas. Si no es posible alcanzar el suelo con facilidad, se recomienda utilizar un reposapiés de manera ocasional para mayor confort.
        .bg33.p-4.mb-4
          p.mb-2 Se recomienda evitar trabajar durante periodos prolongados en el mismo lugar, con la misma posición y utilizando un solo dispositivo de entrada. Es importante variar tanto los movimientos como el uso de diferentes herramientas de digitación para prevenir la fatiga. Además, considere que las características especiales del software y hardware disponibles pueden optimizar su productividad y eficiencia, al mismo tiempo que reducen el esfuerzo y el cansancio físico.
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 9. 
          | Postura correcta para el cuidado del cuello
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img14.svg",alt='La imagen representa a una persona sentada frente a un escritorio con una postura ergonómica adecuada para el cuidado del cuello. Las piernas y la columna están rectas, lo que facilita una alineación correcta del cuerpo. Un pie está ligeramente adelantado respecto al otro, proporcionando estabilidad. La cabeza se mantiene en una posición neutral en relación con la pantalla, evitando inclinaciones que puedan causar tensión en el cuello. La postura general promueve la comodidad y previene problemas relacionados con el cuello y la columna durante el uso prolongado del computador.')

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .bg2.p-lg-4.p-md-5.p-5
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
                  img.img-a.img-t.mbt(src="@/assets/curso/temas/img5.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-2.text-white Para complementar esta información sobre la postura correcta visita el siguiente video:
                    .col-lg-auto.pe-lg-5
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RE-CeRAz8Z4" target="_blank")
                        span.ps-2.pe-2 Ir al sitio
                        i.fas.fa-video

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
