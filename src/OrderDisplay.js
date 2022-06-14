// import react from 'react';

export default function OrderDisplay({ drink, side, meal, instructions }) {
  return (
    <div>
      <section className='column'>
        <img src={`${drink}.jpeg`} />
        <img src={`burger-${meal}.jpeg`} />
        <img src={`${side}.jpeg`} />
        <div>
          <h3 className='adds'>Special instructions</h3>
          <ul className="ul">
            {
              instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
            }
          </ul>
        </div>
      </section>
    </div>
  );
}