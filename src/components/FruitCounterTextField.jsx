function FruitCounterTextField(counter){
    return(
   // {incrementCounter(displayCounter.value,fruitProps.inStock)}
       <input type="number" id ="displayCounter" readOnly value={counter.counter}>

       </input>
    );
}
export default FruitCounterTextField;