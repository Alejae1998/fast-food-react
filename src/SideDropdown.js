import react from 'react';

export default function SideDropdown({ setSide }) {
  return (
    <label>
      Side:
      <select onChange={(e) => setSide(e.target.value)}>
        <option value="fries">Crazy fries</option>
        <option value="nachos">Yummy nachos</option>
        <option value="chill">Chill night</option>
        <option value="movie">Movie combo</option>
        <option value="picnic">Family picnic style</option>
        <option value="hotdog">The Doggie</option>
      </select>
    </label>
  );
}
