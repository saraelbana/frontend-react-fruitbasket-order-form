
import './App.css'
import {fruitsInventory} from "./constants/FruitsInventory.js";
import OrderForm from "./components/OrderForm.jsx";

function App() {
  return (
    <div>
        <h1>Fruitmand bezorgservice</h1>
        <OrderForm fruitsInventory = {fruitsInventory}/>
    </div>
  );
}

export default App
