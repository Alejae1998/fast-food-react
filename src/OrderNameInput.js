// import react from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div>
      <label>
        Name for order: <input onChange={(e) => setOrderName(e.target.value)} />
      </label>
    </div>
  );
}