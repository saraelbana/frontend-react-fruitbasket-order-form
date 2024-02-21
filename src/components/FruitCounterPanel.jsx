import MinusPlusButton from "./MinusPlusButton.jsx";
import FruitCounterTextField from "./FruitCounterTextField.jsx";
import {decrementCounter, incrementCounter} from "../helpers/inventoryCalculations.js";
import {useState} from "react";


function FruitCounterPanel(fruit) {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <MinusPlusButton sign = {"-"} clicked = {setCounter(decrementCounter(counter))}/>
            <FruitCounterTextField counter = {counter}/>
            <MinusPlusButton sign = {"+"} clicked = {setCounter(incrementCounter(counter,fruit.inStock))}/>
        </div>
      );
}
export default FruitCounterPanel;