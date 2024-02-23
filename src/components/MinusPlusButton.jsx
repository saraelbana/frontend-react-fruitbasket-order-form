function MinusPlusButton(buttonProps){
    return (
        <button type="button" onClick = {buttonProps.clicked}>
            {buttonProps.sign}
        </button>
    );
}
export default MinusPlusButton;