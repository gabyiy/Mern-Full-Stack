import React from 'react';
import GoalList from "./components/GoalList"
import './App.css'


const App = () => {
  const courseGoal=[{id:"cg1", text:"finish the course"},{id:"cg1",text:"Learn all about course main topic"},{id:"cg1",text:"Help other stundets in the course"}]
  return (
    <div className='course-goals'>
  <h2>Course Goals</h2>
 <GoalList goals={courseGoal}/>
  </div>

  );
};

export default App;
