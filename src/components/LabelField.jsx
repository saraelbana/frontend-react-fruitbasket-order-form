function LabelField(displayProp){
    console.log(displayProp);
    return(
        <label>
            {displayProp.value}
        </label>
    );
}
export default LabelField;