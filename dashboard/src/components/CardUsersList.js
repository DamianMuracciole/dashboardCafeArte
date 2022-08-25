import UsersList from '../Pages/UsersList'
import Card from './Card'


export default function CardUsersList() {
    return(
        <Card 
            size={12}
            title="Listado de Usuarios">
            <UsersList/>
        </Card>
    )
}