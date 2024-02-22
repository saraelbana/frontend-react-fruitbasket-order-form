import "./ResetButton.css";
function ResetButton(resetButtonTrigger){
    return (
        <button type="button" className="ResetButton" onClick= {resetButtonTrigger.clicked} >
            Reset
        </button>);
}
export default ResetButton;