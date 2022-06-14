import React from 'react';

export default function InstructionForm({ handleSubmit, setInstructionForm, instructionInForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add special instruction:
        <input value={instructionInForm} onChange={(e) => setInstructionForm(e.target.value)} />
      </label>
      <button>submit</button>
    </form>
  );
}
