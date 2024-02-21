import ImgIcon from "./ImgIcon.jsx";
import FruitCounterPanel from "./FruitCounterPanel.jsx";
import FruitNameTextField from "./FruitNameTextField.jsx";

function FruitQuantitySelectorPanel(fruit){
    return(
            <li>
                <ImgIcon icon = {fruit.icon}/>
                <FruitNameTextField name = {fruit.name}/>
                <FruitCounterPanel inStock = {fruit.inStock} fruitName = {fruit.name} />
            </li>
    );
}
export default FruitQuantitySelectorPanel;