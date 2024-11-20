export default {
  global: {
    componenteFormativo: 'Digitación eficiente y salud ocupacional',
    descripcionCurso:
      'Este programa de formación proporciona al aprendiz los conocimientos fundamentales y ofrece las herramientas prácticas necesarias para desarrollar habilidades avanzadas en la digitación de textos de manera rápida, precisa y con técnicas adecuadas. El aprendiz podrá optimizar su velocidad y exactitud, lo que le permitirá estar mejor preparado para asumir tareas más complejas y desafiantes en su entorno laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Posturas corporales para digitar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Posturas frente al teclado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Uso correcto del <em>mouse</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Posturas de cuello, brazos y pies',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ergonomía y salud ocupacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Políticas de salud ocupacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Guía de prevencíon para evitar enfermedades',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Consecuencias de una mala postura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pausas activas en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Teclado y <em>mouse</em>: claves para una ergonomía eficiente',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_13210301_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ergonomía y salud ocupacional',
      referencia:
        'González, R. E. (2002). Aportes de la ergonomía a la comprensión y transformación de las condiciones de trabajo: una aproximación económica, humanista, política y social del estudio del trabajo. Salud de los Trabajadores, 10 (1), 47-62.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2938708',
    },
    {
      tema:
        'Guía de prevención para enfermedades posturales en el trabajo de digitación',
      referencia:
        'Universitat Politècnica de Catalunya. (2011). Guía de prevención para evitar enfermedades posturales en el trabajo de digitación.',
      tipo: 'Guía- Documento',
      link: 'https://www.upc.edu/es',
    },
    {
      tema: 'Ergonomía y salud ocupacional',
      referencia:
        'OTP - Oficina Técnica de Prevención. (2019, 2 septiembre). Ergonomía en la oficina: teclado y ratón.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RE-CeRAz8Z4',
    },
  ],
  glosario: [
    {
      termino: 'Digitación',
      significado:
        'Proceso de escribir textos utilizando dispositivos de entrada como el teclado de una computadora.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Ciencia que adapta productos y entornos a las características del usuario para optimizar eficiencia y confort.',
    },
    {
      termino: 'Postura',
      significado:
        'Posición corporal adecuada durante la ejecución de tareas para evitar problemas físicos.',
    },
    {
      termino: 'Teclado alfanumérico',
      significado:
        'Dispositivo de entrada compuesto por letras y números que permite la escritura digital.',
    },
    {
      termino: 'Síndrome del túnel carpiano',
      significado:
        'Afección causada por la compresión del nervio mediano en la muñeca debido a malas posturas al teclear.',
    },
    {
      termino: 'Pausas activas',
      significado:
        'Ejercicios breves que ayudan a reducir la fatiga durante largas sesiones de trabajo sedentario.',
    },
    {
      termino: 'Tecla Fn',
      significado:
        'Tecla especial que permite activar funciones secundarias en teclados de portátiles.',
    },
    {
      termino: 'Reposapiés',
      significado:
        'Accesorio utilizado para mantener los pies en una posición adecuada y prevenir la fatiga en las piernas.',
    },
    {
      termino: 'Inclinación negativa',
      significado:
        'Posición del teclado que facilita una postura ergonómica al reducir la presión muscular.',
    },
    {
      termino: 'Muñecas rectas',
      significado:
        'Recomendación para mantener las muñecas alineadas durante la digitación y evitar lesiones.',
    },
    {
      termino: 'Resolución 1016 de 1989',
      significado:
        'Normativa colombiana sobre salud ocupacional que establece lineamientos para prevenir riesgos laborales.',
    },
    {
      termino: 'Codo en ángulo de 90 grados',
      significado:
        'Posición óptima del codo que ayuda a mantener una alineación correcta de brazos y manos al digitar.',
    },
    {
      termino: 'Epicondilitis',
      significado:
        'Inflamación del codo causada por movimientos repetitivos o posturas incorrectas.',
    },
    {
      termino: 'Tendinitis',
      significado:
        'Inflamación de los tendones como resultado del uso excesivo o malas posturas al escribir en teclado.',
    },
    {
      termino: 'Tecla Control',
      significado:
        'Botón utilizado en combinación con otras teclas para ejecutar funciones rápidas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anderson, B. (2000). Stretching. Rev. Ed. Bolinas, US: Shelter Publications Inc.',
      link: '',
    },
    {
      referencia:
        'Cardozo, R. (2011). Teclas guía para ejercitar el manejo del teclado.',
      link: '',
    },
    {
      referencia:
        'Centros para el Control y la Prevención de las enfermedades. (2012). Ergonomía (desórdenes musculo esqueléticos).',
      link: '',
    },
    {
      referencia: 'Condota, G. (2009). Ergonomía en el uso de computadoras.',
      link: 'http://ergonomiaenelusodecomputadoras.blogspot.com/',
    },
    {
      referencia:
        'Dominguez, J. (2013). Ejercicios recomendados para tus pausas activas.',
      link: '',
    },
    {
      referencia: 'Ergonomía Ocupacional S.C. (2015). ¿Qué es ergonomía?',
      link: '',
    },
    {
      referencia:
        'Gottau, G. (2011). Las consecuencias de llevar una mala postura corporal.',
      link:
        'http://www.vitonica.com/prevencion/las-consecuencias-de-llevar-una-mala-postura-corporal',
    },
    {
      referencia: 'Lexicoon. (2015). Definición de Digitar.',
      link: '',
    },
    {
      referencia: 'Martínez, V. (2012). Ergonomía en trabajo de oficina.',
      link: '',
    },
    {
      referencia:
        'Ucharico, E. R. C., & Becerra, R. M. A. (2020). Ergonomía del puesto de trabajo del principio de prevención de la ley n 29783 y satisfacción laboral del personal administrativo de la sede rectorado de la Universidad Privada de Tacna, 2018. Revista veritas et scientia-UPT, 9(1), 64-78.',
      link: '',
    },
    {
      referencia:
        'Fabara, J. C. (2010). Ergonomía, eficiencia y el teclado de su computador. Economía y Negocios, 1(1), 101-103.',
      link: '',
    },
    {
      referencia:
        'Evelyn. (2009, 16 abril). Cómo Escribir más Rápido en la Computadora. ',
      link: 'https://comohacerpara.com/escribir-rapido-computadora-3644n.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Félix Augusto Reyes Gutiérrez',
          cargo: 'Experto temático',
          centro: 'Centro de Industria y de la Construcción',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro de la Tecnología del Diseño y la Productividad Empresarial',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
