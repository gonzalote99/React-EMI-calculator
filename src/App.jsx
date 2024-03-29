import {useState} from 'react';
import './App.css';

const App = (props) => {
  const [amount, setAmount] = useState(0);
  const [years, setYears] = useState(0);
  const [rate, setRate] = useState(0);
  const [calculate, setCalculate] = useState(0);
  const [showResult, setShowResult] = useState({display: 'none'});

  const amountChange = (e) => {
    setAmount(e.target.value);
  }

  const yearChange = (e) => {
    setYears(e.target.value);
  }

  const rateChange = (e) => {
    setRate(e.target.value);
  }

  const calculateEMI = () => {
    if(amount === 0 || years === 0 || rate === 0) {
      alert('input fields');
    } else {
      var p = amount;
      var r = parseFloat(rate) / (12 * 100);
      var n = years * 12;

      let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      setCalculate(emi.toFixed(0));
      setShowResult({ 
        display: 'block'
      });
    }
  }

  return(
    <div className='container-fluid bg-black text-white' id='emi-box'>
    <h2 className='text-center'>{props.title}</h2>
      <div className='border border-warning'>
      <div className='row p-4 m-4 text-center'>
      <div className='col'>
      amount you need <input className='form-control rounded-0' type='text' value={amount} /> (in rupees)
      </div>
        <div className='col'>
       for <input className='form-control rounded-0' type='text' size="4" value={years} /> (in years )
        </div>
          <div className='col'>
          interes rate <input className='form-control rounded-0' type='text' size="4" value={rate} /> (in % )
          </div>
      </div>
        <div className='row p-4 m-4 text-center'>
        <div className='col'>
        min: &#8377; 50,000<input className='form-range' onChange={amountChange} type='range' min="50000" max="100000" /> max: &#8377; 100,000
        </div>
          <div className='col'>
         min: 1 <input className='form-range' onChange={yearChange} type='range' min="1" max="5" /> max: 5
          </div>
          <div className='col'>
         min: 10.5% <input className='form-range' onChange={rateChange} type='range' min="10.5" max="18.5" /> max: 18.25%
          </div>
        </div>
        
      </div>
      <div className='mt-4'>
      <div className='row'>
      <div className='col text-center'>
      <button onClick={calculateEMI} className='btn btn-outline-warning rounded-0 clcBtn'>calculate</button>
      </div>
      </div>
      </div>
      <div className='text-center mt-4' id='result' style={showResult}>
      <p>monthly emi <strong>₹{calculate}</strong>/month</p>
      </div>
    </div>
  )
  
}
export default App;