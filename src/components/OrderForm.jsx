import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./ResetButton.jsx";

function OrderForm(fruitsInventory) {
    return (
       <ul>
           {
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} />))
           }
           <ResetButton />
       </ul>
    );
}

export default OrderForm;
