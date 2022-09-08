const itemsData = [{
    id:"1", 
    name: "Msi Nvidia Geforce Rtx 3090 Gaming Trio 24gb ",
    category: "Componentes",
    description : "Fabricante: Nvidia Tipo de memoria gráfica: GDDR6X.Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1", 
    stock: 5, 
    inicial: 1, 
    img: "https://m.media-amazon.com/images/I/61-7uGhZfQL._AC_SX450_.jpg",
    price: "$452.000",
    stars: 4.5,
    more: "Numerosas pruebas de rendimiento han confirmado que la GeForce RTX 3090 Ti rinde, de media, entre un 5% y un 10% más que la GeForce RTX 3090 en función de la resolución utilizada. Cuanto más pequeña sea la resolución, menor será la diferencia, así que ese valor máximo del 10% solo se alcanza con resoluciones 4K. Sus valores de rendimiento están bastante claros, ¿pero qué hay del consumo? Este es un dato muy importante, ya que nos ayudará a resolver una de las preguntas que más se están haciendo aquellos que están considerando comprar una GeForce RTX 3090 Ti, y es que estos no terminan de tener claro qué fuente de alimentación van a necesitar."
},{
    id:"2", 
    name: "Disco duro interno hdd de 3,5 pulgadas, 4TB",
    category: "Almacenamiento",
    description :"Tipo aplicable: monitoreo de disco duro/disco duro móvil/monitoreo de seguridad DVR Disco Duro Dedicado/disco duro NVR HD/disco duro grabador de vídeo. Tamaño del disco duro: 3,5." , stock: 8, 
    inicial: 1, 
    img: "https://http2.mlstatic.com/D_NQ_NP_811175-MLA31356410480_072019-O.webp",
    price: "$27.000",
    stars: 3.5,
    more: "Hd Sas 1tb Dell Constellation 3.5 7.2k 9yz264-150 0740y. Usados en perfecto estado de uso, se retiraron de un R710 para colocar discos mas grandes. Al momento del retiro no acusaban ningún alerta en la herramienta de gestión de la PERC para la matriz RAID ni en área de SMART, el conocedor de estos sabra de lo que hablo."
},{
    id:"3", 
    name: 'Procesador Intel Core i7 12700KF, 12 núcleos',
    category: "Componentes",
    description :'Fabricante: Nvidia. Tipo de memoria gráfica: GDDR6X. Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1', 
    stock: 7, 
    inicial: 1, 
    img: "https://m.media-amazon.com/images/I/516P97gl+GL._AC_SX679_.jpg",
    price: "$61.880",
    stars: 4.0,
    more: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto."
},{
    id:"4", 
    name: 'Placa de video Nvidia Zotac Gaming GeForce',
    category: "Componentes",
    description :'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Fabricante: Nvidia', 
    stock: 3, 
    inicial: 1, 
    img: "https://http2.mlstatic.com/D_NQ_NP_745006-MLA46543672190_062021-O.webp",
    price: "$452.000",
    stars: 4.5,
    more: "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Como cuenta con 1920 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU. Criterio fundamental a la hora de elegir una placa de video, su resolución de 4096x2160 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."
},{
    id:"5", 
    name: 'Mouse Logitech G Series Lightspeed',
    category: "Perifericos",
    description :'Un sensor HERO de próxima generación ofrece rendimiento de 16.000 dpi y eficiencia energética superiores, dándote hasta 60 horas de juego ininterrumpido.', 
    stock: 2, 
    inicial: 1, 
    img: "https://http2.mlstatic.com/storage/vpp-scrapper/flixmedia_iuzl7j_logitech-53432447-g502-lightspeed-hero.png",
    price: "$14.720",
    stars: 5,
    more: "Ahora puedes jugar con más rapidez y precisión con G502 LIGHTSPEED, dotado de conectividad inalámbrica superrápida de 1 ms. Un sensor HERO de próxima generación ofrece rendimiento de 16.000 dpi y eficiencia energética superiores, dándote hasta 60 horas de juego ininterrumpido. Once botones programables te ayudan a optimizar el juego con enlaces de teclas y macros personalizadas. Los botones principales tienen tensión de resorte metálico para una actuación rápida y precisa. Seis pesas personalizables te permiten configurar la sensación del ratón en la mano. RGB LIGHTSYNC proporciona ~16,8 millones de colores para crear un entorno de juego emocionante e inmersivo. El botón rueda para desplazamiento superrápido permite recorrer a toda velocidad menús y documentos largos. Empareja con POWERPLAY para disponer de carga infinita."
},{
    id:"6", 
    name: 'Teclado Dragonborn K630 QWERTY',
    category: "Perifericos",
    description :'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años', stock: 4, 
    inicial: 1, 
    img: "https://http2.mlstatic.com/D_NQ_NP_897779-MLA46504109530_062021-O.webp",
    price: "$7.779",
    stars: 4.5,
    more: "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados. Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo."
},{
    id:"7", 
    name: 'Procesador Intel Core i7 12700KF, 12 núcleos',
    category: "Componentes",
    description :'Fabricante: Nvidia. Tipo de memoria gráfica: GDDR6X. Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1', 
    stock: 7, 
    inicial: 1, 
    img: "https://m.media-amazon.com/images/I/516P97gl+GL._AC_SX679_.jpg",
    price: "$61.880",
    stars: 4.0,
    more: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto."
},{
    id:"8", 
    name: 'Placa de video Nvidia Zotac Gaming GeForce',
    category: "Componentes",
    description :'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Fabricante: Nvidia', 
    stock: 3, 
    inicial: 1, 
    img: "https://http2.mlstatic.com/D_NQ_NP_745006-MLA46543672190_062021-O.webp",
    price: "$452.000",
    stars: 4.5,
    more: "Numerosas pruebas de rendimiento han confirmado que la GeForce RTX 3090 Ti rinde, de media, entre un 5% y un 10% más que la GeForce RTX 3090 en función de la resolución utilizada. Cuanto más pequeña sea la resolución, menor será la diferencia, así que ese valor máximo del 10% solo se alcanza con resoluciones 4K. Sus valores de rendimiento están bastante claros, ¿pero qué hay del consumo? Este es un dato muy importante, ya que nos ayudará a resolver una de las preguntas que más se están haciendo aquellos que están considerando comprar una GeForce RTX 3090 Ti, y es que estos no terminan de tener claro qué fuente de alimentación van a necesitar."
}]


export const data = new Promise((res, rej) => {
    let condition = true
    setTimeout(() => {
        if (condition) { 
        res(itemsData);
        } else {
        rej("error");}
    }, 1000);
});