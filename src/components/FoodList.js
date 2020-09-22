import React from "react"
import Food from "./Food"

const FoodList = ({ meals, setMeals }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {meals.map(meal => (
                    <Food
                        setMeals={setMeals}
                        meal={meal}
                        meals={meals}
                        key={meal.id}
                        text={meal.text}
                        cal={meal.calories}
                        type={meal.type}
                    />
                ))}
            </ul>
        </div>
    )
}

export default FoodList