import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [strength, setStrength] = useState("120");
  const [result, setResult] = useState(null);

  const calculateDose = () => {
    const standardDose = 15; // mg/kg

    if (weight) {
      const singleDose = parseFloat(weight) * standardDose;
      const maxDailyDose = parseFloat(weight) * 60;

      // Calculate the amount of syrup in ml based on the selected strength
      const syrupConcentration = strength === "120" ? 120 : 250;
      const singleDoseInMl = (5 * singleDose) / syrupConcentration;
      const maxDailyDoseInMl = (5 * maxDailyDose) / syrupConcentration;

      setResult(
        `Single Paracetamol Dose: ${singleDoseInMl.toFixed(
          2
        )} ml | Max Daily Dose: ${maxDailyDoseInMl.toFixed(2)} ml`
      );
    } else {
      setResult(null);
    }
  };

  return (
    <div className="grid grid-cols-1 mx-auto border border-1 p-4 w-2/3  my-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="font-sans md:text-2xl text-base text-center p-3 font-bold ">
        Paracetamol Dose Calculator
      </h1>
      <label className="mx-auto text-center p-3">
        <p>Enter Child's Weight (in kg):</p>
        <input
          className="w-1/2"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>

      <label className="mx-auto text-center p-3">
        <p>Select Strength:</p>
        <select value={strength} onChange={(e) => setStrength(e.target.value)}>
          <option value="120">120mg</option>
          <option value="250">250mg</option>
        </select>
      </label>
      <br />
      <button
        className="mx-auto text-center bg-green-300 py-2 px-2 rounded-lg shadow-lg"
        onClick={calculateDose}
      >
        Calculate Dose
      </button>
      {result && <p className="p-3 text-blue-500 text-center">{result}</p>}
    </div>
  );
}

export default App;
