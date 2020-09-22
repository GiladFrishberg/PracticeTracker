import React from "react"

const Food = ({ text, meal, meals, setMeals, cal, type }) => {
    const deleteHandler = () => {
        setMeals(meals.filter((el) => el.id !== meal.id));
    }

    return (
        <div className="todo">
            <li >{text}   | {type}    |  calories: {cal}</li>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Food