function InputTextField(inputType){
    return(
        // how to determine the type of input field?
        // <input type="text"/> // this is a text field
        // <input type="password"/> // this is a password field
        // <input type="email"/> // this is an email field
        // <input type="number"/> // this is a number field
        <input type={inputType.type}/>
    );
}
export default InputTextField;