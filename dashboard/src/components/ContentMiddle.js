import Card from './Card'
import UltimoUsuario from './UltimoUsuario'
import ProductsList from './ProductsList'
import Categorias from './Categorias'


export default function ContentMiddle(){
    return(
        
        <div className="row">
           <Card title="Ultimo Usuario Creado">
                <div className="text-center">
                    <UltimoUsuario/>
                    </div>
            
            </Card>

            <Card title="Productos por Categorias">
                <div className="text-center">
                    <Categorias/>
                    </div>
            
            </Card>

            <Card 
            size={12}
            title="Listado de Productos">
                <ProductsList/>
            </Card>
            
            
        </div>
        )
}