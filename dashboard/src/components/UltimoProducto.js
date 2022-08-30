import React, {useState, useEffect} from "react"

export default function UltimoProducto(){
    const [ultimoProd, setUltimoProd] = useState([])

    useEffect(()=> {
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
           let ultimoIndex = data.productos.length-1
           setUltimoProd(data.productos[ultimoIndex]) 
           console.log(data.productos[ultimoIndex])
        })
    }, [])
    
    return (
        <>

        {ultimoProd.name}
        <br></br> 
        Precio: {ultimoProd.price}
        <br></br> 
        Peso: {ultimoProd.weight}
        <br></br> 
        Sesion: {ultimoProd.session}

        </>
    )
}