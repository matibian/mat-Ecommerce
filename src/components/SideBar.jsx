import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SideBar() {
  return (
    <ProSidebar sx={{ backgroundColor: "rgb(1, 0, 3)"}} >
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
      <SidebarContent>
        <Menu iconShape="square" sx={{ backgroundColor: "rgb(1, 0, 3)"}}>
          <MenuItem icon={<DiamondIcon />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FavoriteIcon />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
       *  You can add a footer for the sidebar ex: copyright
       */}
      </SidebarFooter>
    </ProSidebar>

  )
}
