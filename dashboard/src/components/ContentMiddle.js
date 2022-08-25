import { Route } from 'react-router-dom'
import Card from './Card'
import UltimoUsuario from './UltimoUsuario'

import Categorias from './Categorias'
import CardProductsList from './CardProductsList'
import CardUsersList from './CardUsersList'


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

            <Route path="/products-list" component={CardProductsList} />
            <Route path="/users-list" component={CardUsersList}/>
            
            
        </div>
        )
}