import react from 'react';

export default function MealDropdown({ setMeal }) {
  return (
    <label>
      meal:
      <select onChange={(e) => setMeal(e.target.value)}>
        <option value="1">Pork N Roll </option>
        <option value="2">Epic Veggie Burger</option>
        <option value="3">Rock N Bacon</option>
        <option value="4">The Power Burger</option>
        <option value="hotdog">The Doggie</option>
      </select>
    </label>
  );
}
