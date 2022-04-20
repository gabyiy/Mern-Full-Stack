import React from 'react';
//pentru a utiliza react router instalam npm install --save react-router-dom@5 --save-exact
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom"

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const  App=()=> {

  // si asa facem un wrap la toate paginile care dorim sa folosesca reract router
  return (
  <Router>

  {/* cu switch specificam ca atunci cand gaseste o ruta catre un component nu o sa mai evaluze celelte rute */}
  <Switch>

  {/* aici specificam caci cand ruta o sa fie  identica cu / adica home sa ne arate 
  componentu Users */}
    <Route path="/" exact>
<Users/>
    </Route>
<Route path="/places/new" exact>
<NewPlace/>
</Route>


    {/* asa specificam daca introducem alt destin sa ne reirectioneze la ruta / */}
    <Redirect to="/"/>
</Switch>
   
  </Router>
  )
}

export default App;
