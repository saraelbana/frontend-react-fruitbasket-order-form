import InputField from "./InputField.jsx";
import LabelField from "./LabelField.jsx";

function RadioButtonPanel(prop){
    return (
        <div>
            <InputField type = {prop.type} name = {prop.name} value = {prop.value}/>
            <LabelField value = {prop.value}/>
        </div>
    );
}
export default RadioButtonPanel;