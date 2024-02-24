import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./SubmitResetButton.jsx";
import './OrderForm.css';
import {useState} from "react";
function OrderForm(fruitsInventory) {
    let [resetClicked, setResetClicked] = useState(false);
    function resetForm() {
        setResetClicked(true);
    }
    function completeReset() {
        setResetClicked(false);
    }
    return (
       <ul className="OrderForm">
           {
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} reset = {resetClicked} onReset = {completeReset}/>))
           }
           <ResetButton className="reset-button" name="Reset" clicked = {resetForm}/>
       </ul>
    );
}

export default OrderForm;
