import React from "react";
import { Link } from "react-router-dom";



const ProductsList = () => {
    
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        const getProducts = () => {
          fetch ('/api/products')
          .then(res => res.json())
          .then(data => setProducts(data.productos))
        }
        getProducts()
      }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>description</th>
                    <th>detail</th>
                </tr>

            </thead>
            <tbody>
                {products.map((product,i) =>(
                <tr key={i}>
                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>{product.detail}</td>
                     <td>{product.weight}grs</td>
                    <Link to={`ProductsList/${product.id}`}>
                     <td>
                        <div className="mb-3">
                        <button className="btn btn-primary">Ver</button>
                        </div>
                     </td>
                     </Link>
                </tr>
                ))}
            </tbody>
        </table>

    );
    
}

export default ProductsList