import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo1.png"
import "../assets/css/App.css"

export default function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <a href="/">
                        <img src="../assets/images/logo1.png" alt="" /></a>
                
                <Link to="/" exact="true">Home </Link>
                <Link to="/productos">Lista de Productos </Link>
                <Link to="/categoriasProductos">Lista de Categorias </Link>
                <Link to="/lastProduct">Ultimo Producto Creado </Link>
                </div>
            </nav>
        </>
    )
}