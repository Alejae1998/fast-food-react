// import react from 'react';

export default function DrinkDropdown({ setDrink }) {
  return (
    <label>
      drink:
      <select onChange={(e) => setDrink(e.target.value)}>
        <option value="tropical">Tropical</option>
        <option value="shake">Chocolate Milkshake</option>
        <option value="milkshake">Wafer Milkshake</option>
      </select>
    </label>
  );
}
