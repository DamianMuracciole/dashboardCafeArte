import React from 'react';
import { useState, useEffect } from 'react'

function TotalProductos(){
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data.productos)
            console.log("Total de Productos: ", data);
        })
        .catch(err => console.log(err));
    }, [])
    // useEffect(() => {
    //     console.log("%cSe monto el componente", "color: green");
    //     fetch('http://localhost:3000/api/products', {
    //         headers: {
    //             authorization: ' xxxxxxxxxx' ,
    //             'Content-Type': 'application/json'
    //          }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         setProductos(data)
    //     })
    //     .catch(err => console.log(err));
    // }, []) 

    
    return(
        
        <div>
            
            <h2>Soy el componente TotalProductos</h2>
            <p>Total de Productos: {productos.length}</p>
        </div>
    )
}

export default TotalProductos