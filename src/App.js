import { useState } from 'react';
import './App.css';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import MealDropdown from './MealDropdown';
import OrderDisplay from './OrderDisplay';
import OrderNameInput from './OrderNameInput';
import InstructionForm from './InstructionForm';

function App() {
  const [drink, setDrink] = useState('tropical');
  const [side, setSide] = useState('fries');
  const [meal, setMeal] = useState('1');
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionForm, setInstructionForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionForm]);
    setInstructionForm('');
  }
  return (
    <div className="App">
      <h1 className="title">Welcome to Burger Beats FastFood!</h1>
      <div className="middle">
        <OrderNameInput setOrderName={setOrderName} />
        <h2>Order for {orderName}</h2>
      </div>
      <section>Select Order Details!</section>
      <section className="dropdown">
        <DrinkDropdown setDrink={setDrink} />
        <MealDropdown setMeal={setMeal} />
        <SideDropdown setSide={setSide} />
      </section>
      <section>
        <div className="bottom">
          <InstructionForm
            handleSubmit={handleSubmit}
            setInstructionForm={setInstructionForm}
            instructionForm={instructionForm}
          />
        </div>
      </section>
      <div className="display">
        <OrderDisplay
          drink={drink}
          meal={meal}
          side={side}
          orderName={orderName}
          instructions={instructions}
        />
      </div>
    </div>
  );
}

export default App;
