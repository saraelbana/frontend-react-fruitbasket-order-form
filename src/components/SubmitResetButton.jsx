import "./SubmitResetButton.css";
function SubmitResetButton(button){
    return (
        <button type="button"  onClick={button.clicked}>
            {button.name}
        </button>);
}
export default SubmitResetButton;