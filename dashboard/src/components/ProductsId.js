import React from "react";
import { useParams } from "react-router-dom";



const ProductsId = () => {

    const {id} = useParams()

    const [productsId, setProductsId] = React.useState([])
    React.useEffect(() => {
        const getProductsId = () => {
          fetch (`/api/products/${id}`)
          .then(res => res.json())
          .then(data => setProductsId(data))
        }
        getProductsId()
      }, [id]);


    return(
    <div>
        <ul>
        <li>{productsId.id}</li>
        <li>{productsId.name}</li>
        <li>{productsId.weight}</li>
        <li>{productsId.quantity}</li>
        <li>{productsId.status}</li>
        <li>{productsId.detail}</li>
        <li>{productsId.category}</li>
        <li>{productsId.session}</li>
        <li>{productsId.url}</li>
        <li>{productsId.image}</li>
        </ul>
    </div>
    
    
        )
}

export default ProductsId