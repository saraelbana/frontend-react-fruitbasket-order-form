import InputField from "./InputField.jsx";
import LabelField from "./LabelField.jsx";

function RadioButtonPanel(prop){
    return (
        <div>
            <InputField type = {prop.type}/>
            <LabelField value = {prop.name}/>
        </div>
    );
}
export default RadioButtonPanel;