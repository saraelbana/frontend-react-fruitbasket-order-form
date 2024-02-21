import FruitQuantitySelectorPanel from "./FruitQuantitySelectorPanel.jsx";
import ResetButton from "./ResetButton.jsx";
import './OrderForm.css';
function OrderForm(fruitsInventory) {
    return (
       <ul className="OrderForm">
           {
               // The map function is used to iterate through the fruitsInventory array and return a new array of FruitQuantitySelectorPanel components
               // The key attribute is used to uniquely identify each component in the array
               //what is the fruit object? It is the object that is passed to the FruitQuantitySelectorPanel component
               //what properties are in the fruit objectq? The fruit object has the properties name, price, and quantity    
               //quantity or inStock? The inStock property is used to determine the maximum quantity of a fruit that can be ordered
               fruitsInventory.fruitsInventory.map((fruit, index) => (<FruitQuantitySelectorPanel key={index} fruit={fruit} />))
           }
           <ResetButton />
       </ul>
    );
}

export default OrderForm;
