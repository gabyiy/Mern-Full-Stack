import React from "react";
import UsersLis from "../components/UsersList";
 


//de aici transferam items la UsersList
const Users =()=>{

    const USERS=[{id:1, name: "Nita Gabriel", image:"https://s.yimg.com/uu/api/res/1.2/YO0fMb.FovjezcPmUVvqKQ--~B/aD0xMTI1O3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/B9VWgJAQe73L3DEoGj0T2w--~B/aD0xMTI1O3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/46d31a6cf021d0b0b15f479bab5c7dc5/206352358/eve-ed.jpg.cf.jpg", places:3}]


    return  <UsersLis items={USERS}/>
    
}


export default Users