import React from "react"
import { useState } from "react"
import "./NewGoal.css"


const NewGoal=(props)=>{

const [enterdText,setEnteredText]=useState("")

    const textChangeHandler=(event)=>{
        setEnteredText(event.target.value)
    }

 const  addGoalHandler=(event)=>{

    const newGoal = {id:Math.random().toString(),text:enterdText}

    setEnteredText("")

    props.onAddGoal(newGoal)

    event.preventDefault()

 }
return(
<form className="new-goal" action="/" method="submit"onSubmit={addGoalHandler}>
<input type="text"value={enterdText} onChange={textChangeHandler}/>
<button type="submit">Add Goal</button>
</form>
    )
}

export default NewGoal