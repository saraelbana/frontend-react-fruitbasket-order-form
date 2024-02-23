function LabelField(displayProp){
    let displayValue = displayProp.value;
    if(displayProp.reset){
        displayValue = 0;
       // displayProp.reset = false;
        //this fires back an error, because the reset prop is read only
        //so I can't change it's value
    }
    return(
        <label>
            {displayValue}
        </label>
    );
}
export default LabelField;