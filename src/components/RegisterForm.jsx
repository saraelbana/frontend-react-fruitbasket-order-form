import LabelInputPanel from "./LabelInputPanel.jsx";
import SubmitResetButton from "./SubmitResetButton.jsx";
import SelectBox from "./SelectBox.jsx";
import RadioButton from "./RadioButton.jsx";

function RegisterForm(){
    return(
        <ul className="RegisterForm">
            <LabelInputPanel value = "First Name" inputType = "text"/>
            <LabelInputPanel value = "Last Name" inputType = "text"/>
            <LabelInputPanel value = "Age" inputType = "number"/>
            <LabelInputPanel value = "Postcode" inputType = "text"/>
            <SelectBox name="Delivery frequency"/>
            <RadioButton type = "radio" name = "deliveryTime"/>
            <SubmitResetButton name ="Submit"/>
        </ul>
    );
}
export default RegisterForm;