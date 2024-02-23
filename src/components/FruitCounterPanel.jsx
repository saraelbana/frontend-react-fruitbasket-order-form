import MinusPlusButton from "./MinusPlusButton.jsx";
import {decrementCounter, incrementCounter} from "../helpers/inventoryCalculations.js";
import {useEffect, useState} from "react";
import "./FruitCounterPanel.css";
import LabelField from "./LabelField.jsx";
function FruitCounterPanel(fruit) {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (fruit.reset) {
            setCounter(0);
            fruit.onReset();
        }
    }, [fruit.reset]);
    const increment = () => {
        console.log(fruit.inStock);
        setCounter(prevCounter => incrementCounter(prevCounter, fruit.inStock));
    };
    const decrement = () => {setCounter(prevCounter =>decrementCounter(prevCounter));
    };
    return (

        <div className="FruitCounterPanel">
            <MinusPlusButton sign = {"-"} clicked = {decrement}/>
            <LabelField value = {counter} reset = {fruit.reset}/>
            <MinusPlusButton sign = {"+"} clicked = {increment}/>
        </div>
      );
}
export default FruitCounterPanel;