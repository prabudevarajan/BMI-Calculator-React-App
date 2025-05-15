import React, { useState } from 'react';
import './App.css';
import bimimg from '../src/bmi_img.svg'

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMetters = height / 100;
      const bmiValue = weight / (heightInMetters * heightInMetters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else if (bmiValue >= 30.0 && bmiValue < 34.9) {
        setBmiStatus("Obese class I");
      } else if (bmiValue >= 35 && bmiValue < 39.9) {
        setBmiStatus("Obese class II");
      } else {
        setBmiStatus("Obese class III");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for the height & weight");
    }
  };


  const clearAll = () => {
    setBmi(null);
    setHeight("");
    setWeight("");
    setBmiStatus("");
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
              <img src={bimimg} className='img-fluid' alt='bimimg' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
              <div className='border bg-white shadow px-5 pb-5 rounded'>
                <h3 className='m-3 text-center'>BMI Calculator</h3>
                {errorMessage && <p className='error-msg'>{errorMessage}</p>}
                <div className="mb-2">
                  <label htmlFor="name">Height:</label>
                  <input type='text' className='form-control'
                    value={height} id='height' onChange={(e) => setHeight(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="name" className='text-left'>Weight:</label>
                  <input type='text' className='form-control'
                    value={weight} id='Weight' onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="mb-2 mt-4">
                  <button className='btn btn-success me-2' onClick={calculateBmi}>Calculeate BMI</button>
                  <button className="btn btn-primary" onClick={clearAll}>Clear</button>
                </div>
                {
                  bmi !== null &&
                  (
                    <div className='bmistatus-box'>
                      <p>Your BMI Is : {bmi}</p>
                      <p>Status : {bmiStatus}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
