import FruitCounterPanel from "./FruitCounterPanel.jsx";
import LabelField from "./LabelField.jsx";
import "./FruitQuantitySelectorPanel.css";
function FruitQuantitySelectorPanel(fruit){
    return(
            <li className="FruitQuantitySelectorPanel">
                <LabelField value = {fruit.fruit.icon}/>
                <LabelField value = {fruit.fruit.name}/>
                <FruitCounterPanel inStock = {fruit.fruit.inStock} fruitName = {fruit.fruit.name} reset = {fruit.reset} onReset = {fruit.onReset}/>

            </li>
    );
}
export default FruitQuantitySelectorPanel;