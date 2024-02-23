function LabelField(displayProp){
    let displayValue = displayProp.value;
    if(displayProp.reset){
        displayValue = 0;
    }
    return(
        <label>
            {displayValue}
        </label>
    );
}
export default LabelField;