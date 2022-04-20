import React from 'react';
import GoalList from "./components/GoalList/GoalList"
import NewGoal from './components/NewGoal/NewGoal';
import './App.css'
import { useState } from 'react';


const App = () => {

  const courseGoal=[{id:"cg1", text:"finish the course"},{id:"cg2",text:"Learn all about course main topic"},{id:"cg3",text:"Help other stundets in the course"}]

const [courseGoals,setCoursGoals]=useState(courseGoal)

 

  const addNewGoalHandler=(newGoal)=>{
    // setCoursGoals(courseGoals.concat(newGoal))

    //updata mai bine state
setCoursGoals((prevCourseGoals)=>{
  return  prevCourseGoals.concat(newGoal)
})



    console.log(courseGoals);
  }
  return (
    <div className='course-goals'>
  <h2>Course Goals</h2>
  <NewGoal onAddGoal={addNewGoalHandler}/>
 <GoalList goals={courseGoals}/>

  </div>

  );
};

export default App;
