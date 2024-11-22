<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Teclado y #[em mouse]: claves para una ergonomía eficiente

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img36.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-5 Los dedos deben posicionarse de manera que faciliten una digitación más rápida y ergonómica. Cada dedo tiene asignada una tecla específica, siguiendo la disposición estándar #[b ASDFG] para la mano izquierda y #[b ÑLKJH] para la derecha.

    .row.justify-content-center.align-items-start.mb-3(data-aos="fade-right")
      .col-lg-5
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 13. 
          | Relación dedos - caracteres del teclado guía
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img37.svg",alt='La imagen representa la correcta distribución de los dedos sobre el teclado de un computador para una escritura eficiente. Se indican las áreas asignadas a cada mano, con la mano izquierda encargada de las teclas A, S, D, F y G, mientras que la mano derecha se encarga de las teclas J, K, L y Ñ. Ambas manos se ubican sobre la barra espaciadora, que es accesible por el pulgar de cada mano. Esta disposición facilita la mecanografía, optimizando la velocidad y precisión al teclear.')
      .col-lg-5
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 14. 
          | Posición de dedos sobre teclado guía
        img.img-a.img-t.mb-4(src="@/assets/curso/temas/img38.svg",alt='La imagen presenta un teclado de computadora con las manos posicionadas correctamente para la mecanografía. Los dedos están distribuidos sobre las teclas de la fila central, que incluye las letras F y J, que sirven como guías para ubicar las manos sin necesidad de desviarlas. Cada mano cubre un conjunto de teclas correspondiente a su lado del teclado, lo que facilita una escritura más eficiente y precisa. Esta técnica sigue el estándar de mecanografía que permite mejorar la velocidad y reducir la fatiga al escribir durante largos periodos.')
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sextos.color-primario.t.mb-4
          h3.mb-2.my-1 Digitación con los dedos índices

    p.mb-4 Las teclas que pueden ser presionadas con los dedos índices son las siguientes:
    
    .row.justify-content-center.mb-2(data-aos="fade-right")
      .col-lg-10
        .row.justify-content-center
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              h4.mb-4.text-center.my-2 Teclado guía
              p.mb-4.text-center.my-4 En este teclado, se asignan cuatro letras a los dedos índices. Con el índice izquierdo se digitan las teclas #[b f] y #[b g], mientras que con el índice derecho se presionan las teclas #[b j] y #[b h].
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              h4.mb-4.text-center.my-2 Teclado superior
              p.mb-4.text-center.my-4 En este teclado, también se asignan cuatro letras a los dedos índices. Con el índice izquierdo se digitan las teclas #[b r] y #[b t], y con el índice derecho las teclas #[b u] y #[b y].
          .col-lg.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-5
              h4.mb-4.text-center.my-2 Teclado inferior
              p.mb-4.text-center.my-4 En este teclado, también se asignan cuatro letras a los dedos índices. Con el índice izquierdo se digitan las teclas #[b v] y #[b b], y con el índice derecho las teclas #[b n] y #[b m].

    .row.fondo2.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-start.mb-3(data-aos="fade-right")
          .col-lg-6
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 15. 
              | Alcance de los índices en teclado guía
            img.img-a.img-t.mb-0(src="@/assets/curso/temas/img39.png",alt='La imagen presenta un teclado donde se destacan las áreas que cubren los dedos índices de ambas manos durante la mecanografía. El índice izquierdo se encarga de las teclas F, R, T, G, V y B, mientras que el índice derecho se ocupa de las teclas J, H, U, Y, N y M. Estas áreas están delimitadas con colores diferentes para facilitar la identificación de las zonas correspondientes a cada dedo, lo que promueve una distribución eficiente del trabajo entre las manos y una escritura más rápida y precisa.')
          .col-lg-6
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 16. 
              | Alcance de los índices en teclado superior
            img.img-a.img-t.mb-0(src="@/assets/curso/temas/img40.png",alt='La imagen presenta un teclado con las áreas que alcanzan los dedos índices de ambas manos en la fila superior. El índice izquierdo se encarga de las teclas R, T, F, y G, mientras que el índice derecho cubre las teclas U, Y, J y H. Las zonas están diferenciadas con colores para mostrar el reparto de tareas entre ambas manos, lo que facilita la mecanografía eficiente y permite un uso adecuado de los dedos, asegurando que cada uno acceda fácilmente a las teclas designadas para optimizar la precisión y velocidad al escribir.')
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-6
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 17. 
              | Alcance de los índices en teclado inferior
            img.img-a.img-t(src="@/assets/curso/temas/img39.png",alt='La imagen presenta un teclado que destaca las áreas alcanzadas por los dedos índices en la fila inferior de teclas. El índice izquierdo se encarga de las teclas V, B, C y N, mientras que el índice derecho cubre las teclas M, N, y J. Estas áreas están diferenciadas con colores, lo que facilita la identificación de las teclas que deben ser alcanzadas por cada mano. Esta distribución ayuda a mejorar la eficiencia en la mecanografía, asegurando que cada dedo cubra un conjunto específico de teclas, lo que optimiza la precisión y la velocidad al escribir.')

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Tipos de teclado

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-right")
      .col-lg-6
        p.mb-4 Es fundamental conocer los dos tipos de teclado más comunes: el teclado alfanumérico estándar y el teclado de las computadoras portátiles (incluidos los MAC).
        .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
          .col-lg-12
            .titulo-sextos.color-primario.t.mb-4
              h3.mb-2.my-1 El teclado estándar se organiza en dos secciones principales
        p.mb-4 El bloque alfanumérico, que contiene números, letras, junto con las teclas de función, y el bloque numérico, situado a la derecha, diseñado de manera similar a una calculadora para facilitar la digitación rápida de cifras.
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 18. 
          | Teclado estándar o alfanumérico
        img.img-a.img-t.mb-2(src="@/assets/curso/temas/img42.png",alt='La figura presenta un teclado estándar, organizado en diferentes grupos de teclas. Las teclas alfabéticas y de caracteres se ubican en el centro con un color verde, mientras que las teclas funcionales, situadas en la parte superior y otros extremos del teclado, se destacan en color turquesa. Las teclas especiales, localizadas en la parte superior del área de escritura y en la fila superior, tienen un tono morado. A la derecha, las teclas numéricas están representadas en rojo, y las teclas de navegación en azul oscuro. Cada sección se diferencia mediante una paleta de colores, facilitando la identificación de cada conjunto de teclas.')

    p.mb-4 En el teclado de una computadora portátil, los bloques están integrados y combinados. No obstante, algunas marcas han incorporado un bloque numérico en modelos de más de 15 pulgadas, con el objetivo de brindar mayor comodidad al usuario al realizar digitaciones numéricas o en tareas contables y financieras.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 19. 
          | Teclado de computador portátil
        img.img-a.img-t(src="@/assets/curso/temas/img43.svg",alt='La imagen representa una computadora portátil abierta, con un diseño moderno y minimalista. El teclado es de color oscuro, con teclas bien espaciadas que incluyen un bloque de funciones, alfabéticas y teclas de comando en la parte inferior. La pantalla, de gran tamaño, está inclinada hacia atrás, mostrando un diseño gráfico abstracto en tonos oscuros con detalles en colores vivos. Debajo del teclado se encuentra un amplio panel táctil que ocupa una porción significativa del área de reposo de las manos, diseñado para facilitar la navegación sin ratón adicional.')

    p.mb-4 Existen otros tipos de teclados, dependiendo de la marca y el tipo de computador, por ejemplo, los equipos de la marca Apple suelen tener teclados, a veces inalámbricos o conectados vía #[em USB], que incluyen caracteres específicos.
    p.mb-4 Así mismo vale la pena señalar que debido al espacio limitado de las computadoras portátiles, el teclado está dispuesto de manera más compacta, lo que hace que algunas teclas tengan múltiples funciones. Para gestionar estas funciones adicionales, el teclado incluye una tecla especial llamada #[b ‘Fn’], que activa las funciones secundarias indicadas en la parte inferior derecha de ciertas teclas.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 20. 
          | Teclado Mac
        img.img-a.img-t.mb-3(src="@/assets/curso/temas/img44.svg",alt='La figura presenta un teclado de Mac junto a un mouse. El diseño del teclado es compacto, con teclas rectangulares y espacios mínimos entre ellas. En la fila superior se encuentran las teclas de función, incluyendo controles de volumen y brillo. Las teclas alfanuméricas ocupan la mayor parte del teclado, con la barra espaciadora centrada en la parte inferior. Las teclas modificadoras como “control”, “option” y “command” están ubicadas en la parte inferior del teclado. A la derecha del teclado, el ratón tiene un diseño minimalista y sin botones visibles.')

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Teclas especiales: funcionalidad avanzada para navegación y gestión de tareas

    p.mb-4 Estas teclas están diseñadas para funciones específicas, como la navegación, la gestión de archivos y otras tareas relacionadas. Se utilizan principalmente para acciones especiales en determinados programas o aplicaciones y suelen ubicarse en la parte superior del teclado.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img45.svg', alt='La figura presenta un teclado de Mac junto a un mouse. El diseño del teclado es compacto, con teclas rectangulares y espacios mínimos entre ellas. En la fila superior se encuentran las teclas de función, incluyendo controles de volumen y brillo. Las teclas alfanuméricas ocupan la mayor parte del teclado, con la barra espaciadora centrada en la parte inferior. Las teclas modificadoras como “control”, “option” y “command” están ubicadas en la parte inferior del teclado. A la derecha del teclado, el ratón tiene un diseño minimalista y sin botones visibles.')
          .tarjeta.color-acento-con.p-4(x="13.2%" y="26%" numero="") 
            p.mb-0 #[b F1:] abre el menú de ayuda del programa, aplicación, proceso o ventana que esté en uso.
          .tarjeta.color-acento-con.p-4(x="17.5%" y="26%" numero="") 
            p.mb-0 #[b F2:] permite renombrar archivos seleccionados en el explorador de Windows.
          .tarjeta.color-acento-con.p-4(x="21.7%" y="26%" numero="") 
            p.mb-0 #[b F3:] abre el menú de búsqueda para programas y ventanas en uso.
          .tarjeta.color-acento-con.p-4(x="25.8%" y="26%" numero="") 
            p.mb-0 #[b F4:] expone la barra de direcciones en el explorador de Windows. Cuando se presiona junto con la tecla Alt, cierra la ventana activa.
          .tarjeta.color-acento-con.p-4(x="32.5%" y="26%" numero="") 
            p.mb-0 #[b F5:] actualiza las pantallas de navegación en Windows.
          .tarjeta.color-acento-con.p-4(x="36.7%" y="26%" numero="") 
            p.mb-0 #[b F6:] activa la navegación por teclado en los menús de programas y permite desplazarse entre menús en otras ventanas.
          .tarjeta.color-acento-con.p-4(x="40.9%" y="26%" numero="") 
            p.mb-0 #[b F7:] habilita el desplazamiento por texto con el teclado en el navegador Firefox.
          .tarjeta.color-acento-con.p-4(x="45%" y="26%" numero="") 
            p.mb-0 #[b F8:] inicia el modo a prueba de fallos al arrancar la computadora.
          .tarjeta.color-acento-con.p-4(x="51.3%" y="26%" numero="") 
            p.mb-0 #[b F9:] realiza funciones específicas fuera del entorno de Windows.
          .tarjeta.color-acento-con.p-4(x="55.4%" y="26%" numero="") 
            p.mb-0 #[b F10:] expone la barra de menús en los programas en uso.
          .tarjeta.color-acento-con.p-4(x="59.8%" y="26%" numero="") 
            p.mb-0 #[b F11:] maximiza la ventana del navegador.
          .tarjeta.color-acento-con.p-4(x="69.6%" y="26%" numero="") 
            p.mb-0 #[b Tecla #[em Print Screen] (Impr Pant):] captura una imagen de la pantalla actual (“pantallazo”), que puede pegarse posteriormente como una imagen.
          .tarjeta.color-acento-con.p-4(x="6.8%" y="50.3%" numero="") 
            p.mb-0 #[b Tecla Tab:] inserta tabulaciones en un texto o permite moverse entre cuadros, tablas o botones en un formulario.
          .tarjeta.color-acento-con.p-4(x="4.8%" y="26%" numero="") 
            p.mb-0 #[b Tecla Escape (Esc):] cierra menús desplegables y cancela cuadros de diálogo.
          .tarjeta.color-acento-con.p-4(x="80.2%" y="34.5%" numero="") 
            p.mb-0 #[b Tecla #[em Page Up:]] desplaza una página hacia arriba en un documento o ventana.
          .tarjeta.color-acento-con.p-4(x="80.2%" y="54%" numero="") 
            p.mb-0 #[b Tecla #[em Page Down:]] desplaza una página hacia abajo en un documento o ventana.
          .tarjeta.color-acento-con.p-4(x="84.6%" y="44.5%" numero="") 
            p.mb-0 #[b Tecla #[em Num Lock:]] cambia la función del teclado numérico entre entrada de números y funciones de desplazamiento similares a las teclas de dirección.
          .tarjeta.color-acento-con.p-4(x="8.2%" y="61.8%" numero="") 
            p.mb-0 #[b Tecla #[em Caps Lock:]] activa o desactiva la escritura en mayúsculas.
          .tarjeta.color-acento-con.p-4(x="9.5%" y="74%" numero="") 
            p.mb-0 #[b Tecla Shift:] ubicada a ambos lados del teclado, identificada por una flecha (↑). Al pulsarla, convierte las letras de minúsculas a mayúsculas y permite acceder a caracteres especiales en las teclas numéricas cuando se presiona junto a ellas (ej. Shift + 1 = ¡).
          .tarjeta.color-acento-con.p-4(x="6.8%" y="87%" numero="") 
            p.mb-0 #[b Tecla Control (Ctrl):] situada en las esquinas inferiores del teclado alfanumérico. Se utiliza en combinación con otras teclas para realizar funciones rápidas sin el uso del ratón (ej. Ctrl + V = Pegar).
          .tarjeta.color-acento-con.p-4(x="13.3%" y="87%" numero="") 
            p.mb-0 #[b Tecla Windows:] abre el menú de inicio de Windows.
          .tarjeta.color-acento-con.p-4(x="18.8%" y="87%" numero="") 
            p.mb-0 #[b Tecla Alt:] ubicada a la izquierda y derecha de la barra espaciadora. La tecla Alt izquierda despliega los accesos directos de teclado, mientras que la derecha, llamada “Alt Gr” (alternativa gráfica), permite insertar caracteres especiales (ej. Alt Gr + R = ®).
          .tarjeta.color-acento-con.p-4(x="73.75%" y="80.5%" numero="") 
            p.mb-0 #[b Teclas de Dirección:] se encuentran entre los bloques numérico y alfanumérico, representadas por flechas que indican las direcciones: izquierda, derecha, arriba y abajo. Se utilizan principalmente para navegar por documentos, ventanas o en juegos de computadora.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-lg-4.p-md-5.p-5
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
                  img.img-a.img-t.mbt1(src="@/assets/curso/temas/img5.svg")
                .col
                  h4.mb-3.text-white Como complemento lo invitamos a visitar los siguientes anexos: 
                  .row.justify-content-between.align-items-center.mb-2
                    .col.mb-3.mb-sm-0
                      p.mb-2.text-white Cómo escribir más rápido en la computadora
                    .col-lg-auto.pe-lg-4
                      .row.justify-content-between.align-items-center
                        .col-lg-auto.pe-lg-5
                          a.boton.color-acento-botones(href="https://comohacerpara.com/escribir-rapido-computadora-3644n.html" target="_blank")
                            span.ps-2.pe-2 Ir al sitio web
                            i.fas.fa-link
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-2.text-white Cómo mejorar la velocidad de mecanografía
                    .col-lg-auto.pe-lg-4
                      .row.justify-content-between.align-items-center
                        .col-lg-auto.pe-lg-5
                          a.boton.color-acento-botones(href="https://es.wikihow.com/mejorar-la-velocidad-de-mecanograf%C3%ADa" target="_blank")
                            span.ps-2.pe-2 Ir al sitio web
                            i.fas.fa-link

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 #[em Mouse] y sus componentes: guía para un uso correcto

    p.mb-4 Los botones del #[em mouse] cumplen diversas funciones que es importante conocer para mejorar la eficiencia en el uso del equipo. A continuación, se describen algunas de las principales tareas que realiza este dispositivo:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-6.col-6.mb-4(data-aos="fade-left" data-aos-delay="500")
          img(data-aos="zoom-in-left")(src="@/assets/curso/temas/img43.png")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Botón izquierdo")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-4 Es el más utilizado y tiene varias funciones esenciales, como el clic, el clic sostenido y el doble clic. También se usa para seleccionar objetos en pantalla y trazar elementos en herramientas de dibujo.
                ul.lista-ul
                  li.d-flex.mb-2
                    i.fas.fa-circle-check.cr
                    p.mb-0 #[b Clic:] Al presionar una vez, se pueden activar botones, cambiar la posición del cursor o seleccionar ventanas.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check.cr
                    p.mb-0 #[b Clic sostenido:] Manteniendo el botón presionado, es posible seleccionar uno o más objetos para luego moverlos o copiarlos en conjunto.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check.cr
                    p.mb-0 #[b Doble clic:] Generalmente se utiliza para abrir accesos directos, aunque también puede seleccionar objetos o textos.
          .row.col-xl-11.m-auto(titulo="Botón derecho")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Su función principal es desplegar el menú contextual de la ventana activa. Al pulsarlo sobre las barras de herramientas, permite personalizar estas o repetir el último comando ejecutado.
          .row.col-xl-11.m-auto(titulo="Botón central o rueda")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Además de permitir hacer zoom cuando se pulsa sobre objetos, al mantenerlo presionado facilita el desplazamiento vertical en una ventana.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .titulo-sextos.color-primario.t.mb-4
          h3.mb-2.my-1 Tipos de #[em Mouse]

    p.mb-4 Existen varios tipos de mouse actualmente en el mercado, cada uno diseñado para cumplir con necesidades específicas. A continuación, se mencionan algunos de los más comunes:

    .row.fondo1.align-items-center.p-3(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] óptico
                p.mb-4 Usa un sensor de luz #[em LED] para detectar el movimiento en casi cualquier superficie. Es el tipo de #[em mouse] más común y adecuado para tareas generales.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img46.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] láser
                p.mb-4 Similar al #[em mouse] óptico, pero utiliza un rayo láser para una mayor precisión. Es ideal para tareas que requieren precisión, como diseño gráfico o juegos.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img47.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] inalámbrico
                p.mb-4 Este tipo de #[em mouse] se conecta a la computadora sin cables, generalmente mediante Bluetooth o un receptor #[em USB]. Ofrece mayor movilidad y orden.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img48.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] ergonómico
                p.mb-4 Diseñado para reducir la tensión en la mano y la muñeca, se utiliza para prevenir problemas como el síndrome del túnel carpiano. Estos pueden tener una forma diferente a los ratones tradicionales, para adaptarse mejor a la postura natural de la mano.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img49.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] para juegos #[em (gaming)]
                p.mb-4 Está optimizado para videojuegos, con características como una alta tasa de #[em DPI] (puntos por pulgada), botones programables y retroiluminación. Son muy precisos y responden rápidamente a los movimientos.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img50.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse trackball]
                p.mb-4 En lugar de mover el #[em mouse], el usuario mueve una bola incrustada en el dispositivo con el pulgar o los dedos. Es útil en espacios reducidos o para usuarios con movilidad limitada.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img51.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] táctil o #[em touchpad]
                p.mb-4 Similar a los #[em touchpads] de las #[em laptops], algunos #[em mouses] incluyen superficies táctiles para controlar el cursor con gestos. Suelen ser muy minimalistas y permiten realizar gestos como desplazamiento y zoom con los dedos.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img52.svg")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em Mouse] vertical
                p.mb-4 Diseñado para que la mano adopte una postura más natural, similar a la de dar la mano, ayudando a reducir la tensión en el antebrazo y la muñeca.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/img53.svg")

</template>

<script>
export default {
  name: 'Tema5',
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
