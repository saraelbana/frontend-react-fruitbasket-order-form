import LabelInputPanel from "./LabelInputPanel.jsx";
import LabelField from "./LabelField.jsx";

function CommentPanel(){
    return(
        <div className="CommentPanel">
            <LabelField value = "Remarks"/>
            <LabelInputPanel inputType = "text"/>
        </div>
    );
}
export default CommentPanel;