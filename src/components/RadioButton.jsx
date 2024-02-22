import RadioButtonPanel from "./RadioButtonPanel.jsx";

function RadioButton(prop){
    return(
        <form className="radio-button">
            <RadioButtonPanel type ={prop.type} name = "deliveryTime" value = "morning" />
            <RadioButtonPanel type = {prop.type} name = "deliveryTime" value = "evening"/>
        </form>
    );
}
export default RadioButton;