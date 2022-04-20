import React from "react";


import "./MainHeader.css"


const MainHeader=(props)=>{

    return<header className="main-header">

    {/* cu props.children practic specificam sa ne arate ce avem in interiorul componentului unde il utilizam */}
        {props.children}
    </header>
}

export default MainHeader