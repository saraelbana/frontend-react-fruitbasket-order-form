import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./SubmitResetButton.jsx";
import './OrderForm.css';
function OrderForm(fruitsInventory) {

    return (
       <ul className="OrderForm">
           {
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} />))
           }
           <ResetButton/>
       </ul>
    );
}

export default OrderForm;
