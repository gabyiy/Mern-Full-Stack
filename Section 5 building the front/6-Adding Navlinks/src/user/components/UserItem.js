import React from "react"
//importam link dinamic 
import { Link } from "react-router-dom"

import Avatar from "../../shared/components/UIElements/Avatar"
import Card from "../../shared/components/UIElements/Card"
import "./UserItem.css"


const UsersItem =(props)=>{

    return(
       <li className="user-item">
   
<Card className="user-item__content">
       {/* asa specifica mca dorim sa avem un link dinamica care sa ne duca la pagina userului dinamic */}
       <Link to={`/${props.id}/places`}>
      <div className="user-item__image">

      {/* aici specificam ca dorim sa vedem componentu avatar aici si ii trimitem ce avem la prop imagine si alt de la users */}
    <Avatar image={props.image} alt={props.mname}/>
      </div>
      <div className="user-item__info">
<h2>{props.name}</h2>
<h3>{props.placeCount} {props.placeCount===1?"Place":"Places"}</h3>
      </div>
      </Link>
      </Card>
       </li>
    )
}

export default UsersItem