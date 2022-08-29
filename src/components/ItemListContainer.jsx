import * as React from 'react';
import ItemList from './ItemList';

export default function ItemListContainer(props) {
    // const [open, setOpen] = React.useState(true);
    // const {greetings} = props
    const items = [{id:1, name: "Msi Nvidia Geforce Rtx 3090 Gaming Trio 24gb Gddr6", description : "Fabricante: Nvidia Tipo de memoria gráfica: GDDR6X.Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1", stock: 5, inicial: 1, img: "https://m.media-amazon.com/images/I/61-7uGhZfQL._AC_SX450_.jpg"},{id:2, name: "Disco duro interno hdd de 3,5 pulgadas, 4TB SATA III", description :"Tipo aplicable: monitoreo de disco duro/disco duro móvil/monitoreo de seguridad DVR Disco Duro Dedicado/disco duro NVR HD/disco duro grabador de vídeo. Tamaño del disco duro: 3,5." , stock: 8, inicial: 0, img: "https://http2.mlstatic.com/D_NQ_NP_811175-MLA31356410480_072019-O.webp"},{id:3, name: 'Procesador Intel Core i7 12700KF, 12 núcleos', description :'Fabricante: Nvidia. Tipo de memoria gráfica: GDDR6X. Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1', stock: 7, inicial: 0, img: "https://m.media-amazon.com/images/I/516P97gl+GL._AC_SX679_.jpg"},{id:4, name: 'Placa de video Nvidia Zotac Gaming GeForce RTX 20', description :'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Fabricante: Nvidia', stock: 3, inicial: 0, img: "https://http2.mlstatic.com/D_NQ_NP_745006-MLA46543672190_062021-O.webp"},{id:5, name: 'Mouse Logitech G Series Lightspeed G502 negro', description :'Un sensor HERO de próxima generación ofrece rendimiento de 16.000 dpi y eficiencia energética superiores, dándote hasta 60 horas de juego ininterrumpido.', stock: 2, inicial: 0, img: "https://http2.mlstatic.com/storage/vpp-scrapper/flixmedia_iuzl7j_logitech-53432447-g502-lightspeed-hero.png"},{id:6, name: 'Teclado Dragonborn K630 QWERTY Redragon Brown', description :'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años', stock: 4, inicial: 0, img: "https://http2.mlstatic.com/D_NQ_NP_897779-MLA46504109530_062021-O.webp"}]

    return (

        <ItemList items={items} />

    )
}
