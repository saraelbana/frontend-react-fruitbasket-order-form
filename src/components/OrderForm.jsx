import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./SubmitResetButton.jsx";
import './OrderForm.css';
import {useState} from "react";
function OrderForm(fruitsInventory) {
    let [resetClicked, setResetClicked] = useState(false);
    function resetForm() {
        setResetClicked(true);
    }
    return (
       <ul className="OrderForm">
           {
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} reset = {resetClicked}/>))
           }
           <ResetButton name="Reset" reset = {resetForm}/>
       </ul>
    );
}

export default OrderForm;
