import React from "react"
import "./NewGoal.css"


const NewGoal=(props)=>{



 const  addGoalHandler=(event)=>{

    const newGoal = {id:Math.random().toString(),text:"dummy"}

    props.onAddGoal(newGoal)

    event.preventDefault()

 }
return(
<form className="new-goal" action="/" method="submit"onSubmit={addGoalHandler}>
<input type="text" on/>
<button type="submit">Add Goal</button>
</form>
    )
}

export default NewGoal