import {fruitsInventory} from "../constants/FruitsInventory.js";

function ImgIcon(index){
    return(
        <p>{fruitsInventory[index].icon}</p>
    );
}
export default ImgIcon;