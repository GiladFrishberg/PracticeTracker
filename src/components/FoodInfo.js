import React, { useEffect, useState } from 'react'

const FoodInfo = () => {

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([]);



    const fetchItems = async () => {
        const data = await fetch(`https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=${inputText}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
                "x-rapidapi-key": "c1507d911amsh181bf5bbb6f7ad2p174910jsnd71b9f85ecc1"
            }
        })
        const items = await data.json()
        setItems(items)
    }

    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        fetchItems();
    };

    return (
        <div>
            <form>
                <input
                    onChange={inputTextHandler}
                    className="todo-input-2"
                    type="text"
                    placeholder="Write down your meal"
                />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i class="fas fa-drumstick-bite"></i>
                </button>
            </form>
            {items.map(item => (
                <h2>{item.shrt_desc} | calories: {item.energ_kcal} | Protein : {item.protein}</h2>
            ))}
        </div>
    )
}

export default FoodInfo
