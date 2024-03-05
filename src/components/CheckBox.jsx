import InputField from "./InputField.jsx";
import LabelField from "./LabelField.jsx";

function CheckBox(){
    return(
        <div>

            <InputField type = "checkbox" name = "agree"/>
            <LabelField value = "I agree to the terms and conditions"/>
        </div>
    )
}
export default CheckBox;