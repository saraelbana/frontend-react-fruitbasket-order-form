function SelectBoxOption(option){
    return(
        <option value={option.name}>{option.name}
        </option>
    );
}
export default SelectBoxOption;