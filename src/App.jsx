
import './App.css'
import {fruitsInventory} from "./constants/FruitsInventory.js";
import OrderForm from "./components/OrderForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

function App() {
  return (
    <div>
        <h1>Fruitmand bezorgservice</h1>
        <OrderForm fruitsInventory = {fruitsInventory}/>
        <RegisterForm/>
    </div>
  );
}

export default App
