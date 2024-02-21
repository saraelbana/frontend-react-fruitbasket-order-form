import MinusPlusButton from "./MinusPlusButton.jsx";
import FruitCounterTextField from "./FruitCounterTextField.jsx";
import {decrementCounter, incrementCounter} from "../helpers/inventoryCalculations.js";
import {useState} from "react";


function FruitCounterPanel(fruit) {
    const [counter, setCounter] = useState(0);
    const increment = setCounter(incrementCounter(counter,fruit.inStock));
    const decrement = setCounter(decrementCounter(counter));

    return (
        <div>
            <MinusPlusButton sign = {"-"} clicked = {decrement}/>
            <FruitCounterTextField counter = {counter}/>
            <MinusPlusButton sign = {"+"} clicked = {increment}/>
        </div>
      );
}
export default FruitCounterPanel;