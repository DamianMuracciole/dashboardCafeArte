import React, {useState, useEffect} from "react"

import Total from "./Totales";

export default function TopBar(){
    const [totalProducto, setTotalProducto] = useState([])
    const [totalUsuario, setTotalUsuario] = useState([])
    const [totalCategoria, setTotalCategoria] = useState([])

    useEffect( ()=> {
        fetch("/api/products")
        .then (res => res.json())
        .then (data => {
            setTotalProducto(data.total)
        })
    }, [totalProducto])

    useEffect( ()=> {
        fetch("/api/users")
        .then (res => res.json())
        .then (data => {
            setTotalUsuario(data.total)
        })
    }, [totalUsuario])

    useEffect( ()=> {
        fetch("/api/products")
        .then (res => res.json())
        .then (data => {
            setTotalCategoria(data.productsByCategory)
            //console.log(data.productsByCategory[0].molido)
        })
    }, [totalCategoria])

    return (
        <>
        <Total titulo="Productos" valor={totalProducto} />
        <Total titulo="Usuarios" valor={totalUsuario} />
        <Total titulo="Categorias" valor={totalCategoria.map( (total, i) => <li key={i}>{total}</li> )} />
        </>
    )
}