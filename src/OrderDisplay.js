import react from 'react';

export default function OrderDisplay({ drink, side, meal, OrderName, instructions }) {
  return (
    <div>
      <section>
        <img src={`${drink}.jpeg`} />
        <img src={`burger-${meal}.jpeg`} />
        <img src={`${side}.jpeg`} />
        <h3>Name for order: {OrderName}</h3>
        <div>
          <h3>Special instructions</h3>
          <ul>
            {
              instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
            }
          </ul>
        </div>
      </section>
    </div>
  );
}