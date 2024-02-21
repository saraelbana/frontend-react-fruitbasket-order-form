function LabelField(displayProp){
    console.log(displayProp);
    return(
        <label>
            {displayProp.name}
        </label>
    );
}
export default LabelField;