import "./SubmitResetButton.css";
function SubmitResetButton(button){
    return (
        <button type="button"  onClick={button.reset}>
            {button.name}
        </button>);
}
export default SubmitResetButton;