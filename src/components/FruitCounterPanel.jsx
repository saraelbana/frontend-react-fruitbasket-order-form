import MinusPlusButton from "./MinusPlusButton.jsx";
import {decrementCounter, incrementCounter} from "../helpers/inventoryCalculations.js";
import {useState} from "react";
import "./FruitCounterPanel.css";
import LabelField from "./LabelField.jsx";
function FruitCounterPanel(fruit) {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        console.log(fruit.inStock);
        setCounter(prevCounter => incrementCounter(prevCounter, fruit.inStock));
    };
    const decrement = () => {setCounter(prevCounter =>decrementCounter(prevCounter));
    };

    return (

        <div className="FruitCounterPanel">
            <MinusPlusButton sign = {"-"} clicked = {decrement}/>
            <LabelField value = {counter}/>
            <MinusPlusButton sign = {"+"} clicked = {increment}/>
        </div>
      );
}
export default FruitCounterPanel;