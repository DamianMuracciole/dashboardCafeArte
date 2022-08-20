import React, {Component} from "react"

class ProductList extends Component {
    constructor(props){
        super(props);
            this.state = {
                product: {}
            }
    }

    
    componentDidMount(){
        fetch("/api/products")
        .then (res => res.json())
        .then (data => {
            console.log(data)
        })
        
    }
  
    render(){
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

        return (
            <>
            <h5>cargando...</h5>
            </>
        )
    }
}
export default ProductList

// export default function ProductList(){
//     return (
//         <div>lista de Productos</div>
//     )
// }