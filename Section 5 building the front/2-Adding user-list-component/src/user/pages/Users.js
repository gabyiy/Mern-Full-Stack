import React from "react";
import UsersLis from "../components/UsersList";
 


//de aici transferam items la UsersList
const Users =()=>{

    const USERS=[{id:1, name: "Nita Gabriel", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsecure.eveonline.com%2F&psig=AOvVaw0tqvs3HxxCeiAmIQHR02yf&ust=1650548649369000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCeuoHjovcCFQAAAAAdAAAAABAD", places:3}]


    return  <UsersLis items={USERS}/>
    
}


export default Users