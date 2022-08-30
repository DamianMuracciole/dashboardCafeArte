import React, {useState, useEffect} from "react"

export default function Categories(){
    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            setCategorias(data.productsByCategory)
            console.log(data.productsByCategory[0].molido)
        })
    },[])
    return (
        <>
       {categorias.molido}
    </>
    )
}