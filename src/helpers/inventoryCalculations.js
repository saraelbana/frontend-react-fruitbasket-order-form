export const incrementCounter = (counter, inStock) =>{
    console.log(counter);
    console.log(inStock);
    if(counter < inStock && inStock > 0){
        return  ++counter;
    }
    else{
        console.log("Out of stock!");
        return  counter;
    }
}
export const decrementCounter = (counter) =>{
    console.log(counter);
    if (counter <= 0) {
        //honestly checking here that the counter is less than or equal to 0 is redundant
        //because the counter is a number, so it can't be less than 0 because it's initialized to 0
        //and for now it comes from a numeric input read only fields
        //the incrementCounter function will only increment the counter if it's less than inStock
        //and inStock is always greater than 0
        //so this condition will never be true
        //but let's keep it because we never know what the future holds
        // and who knows, maybe in the future the counter will be a string and then this condition will be useful
        // is it better to write it that way, so I can always guarantee to have a numeric value in the counter
        // if(counter === 0 || counter < 0) ?
        console.log("Invalid operation!");
        return counter;
    }
    else
        return --counter;
}
export const getCounterValue = (counter, counterTrigger) =>{
    if(counterTrigger === true){
        counterTrigger = false;
        return 0;
    }
    else
        return counter;
}
export const getFruitsStock = (fruitsInventory) =>{
    let fruitsStock = [];
    fruitsInventory.fruitsInventory.map((fruit) => {
        fruitsStock.push(fruit.inStock);
    });
    return fruitsStock;
}
