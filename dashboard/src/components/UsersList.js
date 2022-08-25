import React from "react";
import { Link } from "react-router-dom";



const UsersList = () => {
   
    const [users, setUsers] = React.useState([])
     React.useEffect(() => {
        const getUsers = () => {
          fetch ('/api/users')
          .then(res => res.json())
          .then(data => setUsers(data.usuarios))
        }
        getUsers()
      }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
                {users.map((user,i) =>(
                <tr key={i}>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.lastName}</td>
                     <td>{user.email}</td>
                     <Link to={`UsersList/${user.id}`}>
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

export default UsersList