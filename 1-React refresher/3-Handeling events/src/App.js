import React from 'react';
import GoalList from "./components/GoalList/GoalList"
import NewGoal from './components/NewGoal/NewGoal';
import './App.css'


const App = () => {

  const courseGoal=[{id:"cg1", text:"finish the course"},{id:"cg1",text:"Learn all about course main topic"},{id:"cg1",text:"Help other stundets in the course"}]



 
  const addNewGoalHandler=(newGoal)=>{

  courseGoal(newGoal)
  }

  console.log();
  return (
    <div className='course-goals'>
  <h2>Course Goals</h2>
  <NewGoal onAddGoal={addNewGoalHandler}/>
 <GoalList goals={courseGoal}/>

  </div>

  );
};

export default App;
