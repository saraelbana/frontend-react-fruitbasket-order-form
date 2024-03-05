import LabelField from "./LabelField.jsx";
import InputField from "./InputField.jsx";

function LabelInputPanel(panelType){
    return(
        <div className= "LabelInputPanel">
            <LabelField value={panelType.value} />
            <InputField type = {panelType.inputType}/>
        </div>
    );
}
export default LabelInputPanel;