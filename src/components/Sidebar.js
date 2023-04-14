import React from 'react';
import './Sidebar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#F89880" className='sidebar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <CDBSidebarHeader style={{ marginBottom: '80px' }}>
        <i className="fa fa-bars fa-large" ></i>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-house-door"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-person"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-file-earmark-ruled"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-alarm"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="fas fa-database"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-calendar"></i></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/"  activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="bi bi-gear"></i></CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;