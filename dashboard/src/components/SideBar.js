import React from 'react';
import logo from "../images/logo1.png"
import { Route, Link, Switch } from "react-router-dom"
import UsersList from './UsersList';
import App from '../App'

function SideBar() {
    
    return (                   
		<div>
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House" />
				</div>
			</a>
			
			<hr className="sidebar-divider my-0" />
			
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Cafe Arte</span></a>
			</li>
			
			<hr className="sidebar-divider" />
			
			<div className="sidebar-heading">Links</div>
			
			<li className="nav-item">
			<Link className="nav-link" to="/"><span>Home</span></Link>
				{/* <a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Paginas</span>
				</a> */}
			</li>
			
			<li className="nav-item">
				<Link className="nav-link" to="/usuarios"><span>Lista de Usuarios</span></Link>
				{/* <a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Lista de Usuarios</span></a> */}
			</li>
			
			<li className="nav-item">
				
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>
			
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>

		

		</div>
		

    );
  }


export default SideBar;