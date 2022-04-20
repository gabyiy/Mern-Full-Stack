import React from "react"

import UsersItem from "./UserItem"
import Card from "../../shared/components/UIElements/Card"
import "./UsersList.css"

const UsersLis=(props)=>{
    if(props.items.length===0){
    return(
   <div className="center">
   <Card>
       <h2>No users found.</h2>
       </Card>
   </div>
    )
    }

    return(
        <ul className="users-list">
        {/* aici instantiem UserItem pentru fiecare utilizatropr pe care il avem si ii transferam si parametri */}
     {   props.items.map(user=>(
         <UsersItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>
     ))}
        </ul>
    )
}

export default UsersLis