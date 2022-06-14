import React from 'react';

export default function InstructionForm({ handleSubmit, setInstructionInForm, instructionInForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add special instruction:
        <input value={instructionInForm} onChange={(e) => setInstructionInForm(e.target.value)} />
      </label>
      <button>submit</button>
    </form>
  );
}
