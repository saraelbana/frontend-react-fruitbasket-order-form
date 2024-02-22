import LabelInputPanel from "./LabelInputPanel.jsx";

function RegisterForm(){
    return(
        <ul className="RegisterForm">
            <LabelInputPanel value = "First Name"/>
            <LabelInputPanel value = "Last Name"/>
            <LabelInputPanel value = "Age"/>

        </ul>
    );
}
export default RegisterForm;