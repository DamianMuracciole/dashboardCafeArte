import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Total from "./Totales";

export default function TopBar() {
    const [totalProducto, setTotalProducto] = useState([])
    const [totalUsuario, setTotalUsuario] = useState([])
    const [totalCategoria, setTotalCategoria] = useState([])

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                setTotalProducto(data.total)
            })
    }, [totalProducto])

    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(data => {
                setTotalUsuario(data.total)
            })
    }, [totalUsuario])

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                setTotalCategoria(data.productsByCategory)
                //console.log(data.productsByCategory[0].molido)
            })
    }, [])

    return (
        <div className="topBar">
            <CardGroup>
            <Card border="success" style={{ width: '24rem' }}>
                    <Total titulo="Productos" valor={totalProducto} />
                </Card>
                <Card border="danger" style={{ width: '24rem' }}>
                    <Total titulo="Usuarios" valor={totalUsuario} />
                </Card>
                <Card border="warning" style={{ width: '24rem' }}>
                    <Total titulo="Categorias" valor={10} />
                </Card>
                </CardGroup>
            {/* valor={totalCategoria.map( (total, i) => <li key={i}>{total}
         </li> )}  */}
        </div>
    )
}