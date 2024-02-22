import LabelField from "./LabelField.jsx";
import InputTextField from "./InputTextField.jsx";

function LabelInputPanel(panelType){
    return(
        <div className= "LabelInputPanel">
            <LabelField value={panelType.value} />
            <InputTextField type = {panelType.inputType}/>
        </div>
    );
}
export default LabelInputPanel;