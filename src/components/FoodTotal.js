import React, { useState, useEffect } from 'react';
import Formfood from "./Formfood"
import FoodList from "./FoodList"

const FoodTotal = () => {
    const [inputTextFood, setInputTextFood] = useState("");
    const [cal, setCal] = useState("");
    const [meals, setMeals] = useState([]);
    const [type, setType] = useState("");
    const [tot, setTot] = useState("")

    const saveLocalTodos2 = () => {
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    const getLocalTodos2 = () => {
        if (localStorage.getItem('meals') === null) {
            localStorage.setItem('meals', JSON.stringify([]));
        } else {
            let mealLocal = JSON.parse(localStorage.getItem('meals'))
            setMeals(mealLocal)
        }
    }


    useEffect(() => {
        getLocalTodos2();
    }, [])


    useEffect(() => {
        saveLocalTodos2();
    }, [meals])

    useEffect(() => {
        totalCalories();
    }, [meals])

    const totalCalories = () => {
        const sum = meals.reduce(function (prev, current) {
            return prev + Number(current.calories)
        }, 0);
        setTot(sum);
    }


    return (
        <div>
            {/* <a className="main_links" href="https://www.nhs.uk/live-well/healthy-weight/calorie-checker/">Link to Food Calorie Checker</a> */}
            <Formfood
                inputTextFood={inputTextFood}
                setInputTextFood={setInputTextFood}
                meals={meals}
                setMeals={setMeals}
                cal={cal}
                setCal={setCal}
                type={type}
                setType={setType}
            />
            <FoodList
                setMeals={setMeals}
                meals={meals}
            />
            <h4 className="formfood"> Your Total Calories for Today is : {tot} </h4>
        </div>
    )
}

export default FoodTotal
