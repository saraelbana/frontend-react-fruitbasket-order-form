import LabelInputPanel from "./LabelInputPanel.jsx";
import SubmitResetButton from "./SubmitResetButton.jsx";
import SelectBox from "./SelectBox.jsx";
import RadioButton from "./RadioButton.jsx";
import CommentPanel from "./CommentPanel.jsx";
import CheckBox from "./CheckBox.jsx";

function RegisterForm(){
    return(
        <ul className="RegisterForm">
            <LabelInputPanel value = "First Name" inputType = "text"/>
            <LabelInputPanel value = "Last Name" inputType = "text"/>
            <LabelInputPanel value = "Age" inputType = "number"/>
            <LabelInputPanel value = "Postcode" inputType = "text"/>
            <SelectBox name="Delivery frequency"/>
            <RadioButton type = "radio" name = "deliveryTime"/>
            <CommentPanel/>
            <CheckBox/>
            <SubmitResetButton name ="Submit"/>
        </ul>
    );
}
export default RegisterForm;