function FruitNameTextField(nameProp){
    console.log(nameProp);
    return(
        //
        <input type="text" value={nameProp.name} readOnly />
    );
}
export default FruitNameTextField;