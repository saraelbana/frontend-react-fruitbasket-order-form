function LabelField(displayProp){
    const displayValue = displayProp.value;
    return(
        <label>
            {displayValue}
        </label>
    );
}
export default LabelField;