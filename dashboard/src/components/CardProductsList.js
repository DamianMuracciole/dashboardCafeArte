import Card from './Card'
import ProductsList from './ProductsList'

export default function CardProductsList() {
    return(
        <Card 
            size={12}
            title="Listado de Productos">
            <ProductsList/>
        </Card>
    )
}