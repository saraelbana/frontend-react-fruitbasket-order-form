import ImgIcon from "./ImgIcon.jsx";
import FruitCounterPanel from "./FruitCounterPanel.jsx";
import FruitNameTextField from "./FruitNameTextField.jsx";
import "./FruitQuantitySelectorPanel.css";
function FruitQuantitySelectorPanel(fruit){
    return(
            <li className="FruitQuantitySelectorPanel">
                <ImgIcon icon = {fruit.fruit.icon}/>
                <FruitNameTextField name = {fruit.fruit.name}/>
                <FruitCounterPanel inStock = {fruit.fruit.inStock} fruitName = {fruit.fruit.name}/>
            </li>
    );
}
export default FruitQuantitySelectorPanel;