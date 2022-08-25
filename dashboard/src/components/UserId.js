import React from "react";
import { useParams } from "react-router-dom";



const UserId = () => {

    const {id} = useParams()

    const [usersId, setUsersId] = React.useState([])
    React.useEffect(() => {
        const getUsersId = () => {
          fetch (`/api/users/${id}`)
          .then(res => res.json())
          .then(data => setUsersId(data))
        }
        getUsersId()
      }, [id]);


    return(
    <div>
        <ul>
        <li>{usersId.id}</li>
        <li>{usersId.name}</li>
        <li>{usersId.lastName}</li>
        <li>{usersId.email}</li>
        <li>{usersId.url}</li>
        <li>{usersId.image}</li>
        </ul>
    </div>
        )
}

export default UserId