import LabelInputPanel from "./LabelInputPanel.jsx";
import SubmitResetButton from "./SubmitResetButton.jsx";
import SelectBox from "./SelectBox.jsx";
import RadioButton from "./RadioButton.jsx";
import CommentPanel from "./CommentPanel.jsx";
import CheckBox from "./CheckBox.jsx";
import {useState} from "react";

function RegisterForm(){
    const [submit, setSubmit] = useState(false);
    const submitForm = () =>{
        //console.log()
        setSubmit(true);
    }

    return(

        <ul className="RegisterForm">
            <LabelInputPanel value = "First Name" inputType = "text" submit = {submit}/>
            <LabelInputPanel value = "Last Name" inputType = "text" submit = {submit}/>
            <LabelInputPanel value = "Age" inputType = "number" submit = {submit}/>
            <LabelInputPanel value = "Postcode" inputType = "text" submit = {submit}/>
            <SelectBox name="Delivery frequency"/>
            <RadioButton type = "radio" name = "deliveryTime"/>
            <CommentPanel submit = {submit}/>
            <CheckBox/>
            <SubmitResetButton name ="Submit" clicked = {submitForm}/>
        </ul>
    );
}
export default RegisterForm;