
import './App.css';
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight <= 0 || height <= 0 || age <= 0) {
      alert("Please enter valid values for weight, height, and age");
    } else {
      const bmiCalc = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703;
      setBmi(bmiCalc.toFixed(1));

      let msg = "";

      if (bmiCalc < 18.5) {
        msg = "You are underweight";
      } else if (bmiCalc >= 18.5 && bmiCalc < 25) {
        msg = "You are normal weight";
      } else if (bmiCalc >= 25 && bmiCalc < 30) {
        msg = "You are overweight";
      } else {
        msg = "You are obese";
      }

      // Optional: Age-based additional advice
      if (age < 18) {
        msg += " (Note: BMI is not the best indicator for children)";
      } else if (age > 60) {
        msg += " (For seniors, consult your doctor for accurate insights)";
      }

      setMessage(msg);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
       <h2><span className="icon">🏋️‍♀️</span> BMI Calculator <span className="icon">🏋️‍♂️</span></h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label>Age (years)</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>
          <div className="center">
            <h3>Your Body Mass Index (BMI) is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
