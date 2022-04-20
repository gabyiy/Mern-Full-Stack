import React from "react"
import "./UsersList.css"
import UsersItem from "./UserItem"

const UsersLis=(props)=>{
    if(props.items.length===0){
    return(
   <div className="center">
       <h2>No users found.</h2>
   </div>
    )
    }

    return(
        <ul>
        {/* aici instantiem UserItem pentru fiecare utilizatropr pe care il avem si ii transferam si parametri */}
     {   props.items.map(user=>{
         <UsersItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>
        })}
        </ul>
    )
}

export default UsersLis