import MinusPlusButton from "./MinusPlusButton.jsx";
import FruitCounterTextField from "./FruitCounterTextField.jsx";

function FruitCounterPanel(inStockProp) {

  return (
    <div>
        <MinusPlusButton sign = {"-"}/>
        <FruitCounterTextField inStockProp.inStock = {fruit.inStock} />
        <MinusPlusButton sign = {"+"}/>
    </div>
  );
}
export default FruitCounterPanel;