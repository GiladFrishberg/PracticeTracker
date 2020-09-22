import React from "react"


const Formfood = ({ inputTextFood, setInputTextFood, meals, setMeals, cal, setCal, type, setType }) => {
    const inputTextFoodHandler = (e) => {
        setInputTextFood(e.target.value)
    }
    const inputCalFoodHandler = (e) => {
        setCal(e.target.value)

    }

    const typeOfMeal = (e) => {
        setType(e.target.value)

    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setMeals([
            ...meals, { text: inputTextFood, calories: cal, type: type, id: Math.random() * 1000 }
        ]);
        setInputTextFood("");
        setCal("");
        setType("");
    };

    return (
        <form >
            <input
                type="text"
                value={inputTextFood}
                onChange={inputTextFoodHandler}
                placeholder="Write Here Your Meal"
                className="todo-input-2"
            />
            <input
                type="text"
                value={cal}
                onChange={inputCalFoodHandler}
                placeholder="Calories"
                className="todo-input-3"
            />

            <div className="select">
                <select placeholder="Chh" onClick={typeOfMeal} name="todos" className="filter-todo">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snacks</option>
                </select>
            </div>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-utensils"></i>
            </button>
        </form>
    )
}

export default Formfood