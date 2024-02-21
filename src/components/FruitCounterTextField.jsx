import {incrementCounter} from "../helpers/inventoryCalculations.js";

import {useState} from "react";

function FruitCounterTextField(fruitProps){
    const [counter, setCounter] = useState(0);
    return(
   // {incrementCounter(displayCounter.value,fruitProps.inStock)}
       <input type="number" id ="displayCounter" readOnly value={counter}>

       </input>
    );
}
export default FruitCounterTextField;