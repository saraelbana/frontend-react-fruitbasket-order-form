import LabelField from "./LabelField.jsx";
import InputTextField from "./InputTextField.jsx";

function LabelInputPanel(labelType){
    return(
        <div className= "LabelInputPanel">
            <LabelField value={labelType.value} />
            <InputTextField/>
        </div>
    );
}
export default LabelInputPanel;