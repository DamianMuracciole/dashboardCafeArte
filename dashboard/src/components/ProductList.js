import React, {useState, useEffect} from "react";


function ProductList()  {
    const [productos, setProductos] = useState([])
    useEffect( ()=>{
        fetch('/api/products')
         .then (res => res.json())
         .then (data => {
            setProductos(data.productos)
         })
         .catch( err => console.log(err))
    }, [])

    let contenido;

    if(!productos){
       contenido = <h5>cargando...</h5>
    } else { 
          contenido=  productos.map((producto, i) => {
                return <li key={i}>{producto.name} {producto.price} </li>
            })
         
    }
    return (
        <>
        {contenido}
        
        </>
    )
}
    
    // componentDidMount(){
    //     fetch('/api/products')
    //     .then (res => res.json())
    //     .then (data => {
    //         this.state.product = data.productos
    //         console.log(data.productos)
    //     })
    // }
        // let contenido;
        // if(this.state.product == ""){
        //     contenido = <p>Cargando Lista de Productos...</p>
        // }
        // else {
        //     contenido = this.state.product.map((product, i)=> 
        //         <div>
        //         <li key={i+product}> {product.id} </li>
        //         <li key={i+product}> {product.name} </li>
        //         </div>
        //     )
        // }

       

export default ProductList

// export default function ProductList(){
//     return (
//         <div>lista de Productos</div>
//     )
// }