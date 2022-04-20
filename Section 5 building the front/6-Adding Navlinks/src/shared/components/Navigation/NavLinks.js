import React from "react";

// asta este o alta proprietate care se foloseste la nav link
import { NavLink } from "react-router-dom";

import "./NavLinks.css"


const NavLinks =(props)=>{

    //practic aici ne duce la rutele respective si cu exact specificam doar la ruta home
    return <ul className="nav-links">
<li>
    <NavLink  to="/" exact>ALL USERS </NavLink>
</li>
<li>
    <NavLink  to="/u1/places">MY PLACES </NavLink>
</li>
<li>
    <NavLink  to="/places/new">ADD PLACE  </NavLink>
</li>
<li>
    <NavLink  to="/auth">AUTHENTICATE </NavLink>
</li>
    </ul>
}

export default NavLinks