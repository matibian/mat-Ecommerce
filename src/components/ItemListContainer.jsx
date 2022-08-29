import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import ItemList from './ItemList';

export default function ItemListContainer(props) {
    // const [open, setOpen] = React.useState(true);
    // const {greetings} = props
    const items = [{id:1, name: "Msi Nvidia Geforce Rtx 3090 Gaming Trio 24gb Gddr6", description : "Fabricante: Nvidia Tipo de memoria gráfica: GDDR6X.Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1", stock: 5, inicial: 1, img: "https://m.media-amazon.com/images/I/61-7uGhZfQL._AC_SX450_.jpg"},{id:2, name: "Disco duro interno hdd de 3,5 pulgadas, 4TB SATA III", description :"Tipo aplicable: monitoreo de disco duro/disco duro móvil/monitoreo de seguridad DVR Disco Duro Dedicado/disco duro NVR HD/disco duro grabador de vídeo. Tamaño del disco duro: 3,5." , stock: 8, inicial: 0, img: "https://http2.mlstatic.com/D_NQ_NP_811175-MLA31356410480_072019-O.webp"},{id:3, name: 'Procesador Intel Core i7 12700KF, 12 núcleos', description :'Fabricante: Nvidia. Tipo de memoria gráfica: GDDR6X. Interfaz con la placa madre: PCI-Express 4.0. Tamaño de memoria: 24 GB. Contectividad: 3 DisplayPort 1.4a, HDMI2.1', stock: 7, inicial: 0, img: "https://m.media-amazon.com/images/I/516P97gl+GL._AC_SX679_.jpg"}]

    return (

        <ItemList items={items} />

    )
}
