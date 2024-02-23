import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./SubmitResetButton.jsx";
import './OrderForm.css';
import {useEffect, useState} from "react";
function OrderForm(fruitsInventory) {
    let [resetClicked, setResetClicked] = useState(false);
    function resetForm() {
        console.log("Reset clicked! again true ");
        setResetClicked(true);
    }
    function completeReset() {
        console.log("Reset clicked! again false ");
        setResetClicked(false);
    }
    return (
       <ul className="OrderForm">
           {
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} reset = {resetClicked} onReset = {completeReset}/>))
           }
           <ResetButton name="Reset" reset = {resetForm}/>
       </ul>
    );
}

export default OrderForm;
