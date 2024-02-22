import LabelField from "./LabelField.jsx";
import SelectBoxOption from "./SelectBoxOption.jsx";

function SelectBox(box){
  return (
    <div>
        <LabelField value={box.name}/>
        <select id = "delivery-frequency" name={box.name}>
            <SelectBoxOption value="weekly"/>
            <SelectBoxOption value="every other week"/>
            <SelectBoxOption value="monthly"/>
        </select>
    </div>
  );
}
export default SelectBox;