import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react'
import { Link } from 'react-router-dom';


export default function SideBar() {
  return (
    <ProSidebar style={{ width: "25%", position: "absolute", height: "auto" }} >
      {/* <Menu iconShape="square">
        <MenuItem icon={<DiamondIcon />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FavoriteIcon />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu> */}

      <SidebarHeader>
        {/**
       *  You can add a header for the sidebar ex: logo
       */}
      </SidebarHeader>
      <SidebarContent >
        <Menu iconShape="square" color="white">
          <MenuItem>
            <Link to="/category/Componentes" >Componentes</Link>
            
          </MenuItem>
          {/* <SubMenu title="Componentes y periféricos">
            <MenuItem>Procesadores</MenuItem>
            <MenuItem>Placas base</MenuItem>
            <MenuItem>Ratones</MenuItem>
            <MenuItem>Teclados</MenuItem>
          </SubMenu> */}
          <MenuItem>
            <Link to="/category/Perifericos" >Periféricos</Link>
          </MenuItem>
          {/* <SubMenu title="Portátiles">
            <MenuItem>Portátiles para gaming</MenuItem>
            <MenuItem>Portátiles ultrafinos</MenuItem>
            <MenuItem>Accesorios para portátiles</MenuItem>
            <MenuItem>Teclados</MenuItem>
            <MenuItem>Accesorios para tablets</MenuItem>
            <MenuItem>Fundas y maletines para portátiles</MenuItem>
          </SubMenu> */}
          <MenuItem>
          <Link to="/category/Almacenamiento" >Dispositivos de almacenamiento</Link>
  
          </MenuItem>
          {/* <SubMenu title="Dispositivos de almacenamiento">
            <MenuItem>Tarjetas de memoria</MenuItem>
            <MenuItem>Discos duros externos</MenuItem>
            <MenuItem>Carcasas para discos duros</MenuItem>
            <MenuItem>SSD</MenuItem>
          </SubMenu> */}
          <SubMenu title="Redes">
            <MenuItem>Routers inalámbricos</MenuItem>
            <MenuItem>Tarjetas de red</MenuItem>
            <MenuItem>Módems 3G</MenuItem>
            <MenuItem>Packs módem/router</MenuItem>
            <MenuItem>Herramientas de redes</MenuItem>
          </SubMenu>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
          <MenuItem>Electrónica de oficina</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>

      </SidebarFooter>
    </ProSidebar>

  )
}
