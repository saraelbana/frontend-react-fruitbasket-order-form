import LabelField from "./LabelField.jsx";
import SelectBoxOption from "./SelectBoxOption.jsx";

function SelectBox(box){
  return (
    <div>
        <LabelField value={box.name}/>
        <select id = "delivery-frequency" name={box.name}>
            <SelectBoxOption name="weekly"/>
            <SelectBoxOption name="every other week"/>
            <SelectBoxOption name="monthly"/>
        </select>
    </div>
  );
}
export default SelectBox;