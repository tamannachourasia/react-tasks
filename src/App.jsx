import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const initialData = [];
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');
  const [data, setdata] = useState(initialData);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState();
  const[counter, setCounter] =useState(0);
  const Data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  const [searchText, setSearchText] = useState('');

  // Function to filter records based on search text
  const filteredData = Data.filter(item => 
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  const removeChild = () => {
    setdata(data.slice(0, -1));
  };

  const handleSum = () => {
    const result = Number(num1) + Number(num2);
    const newRecord = `User Record Sum: ${result}`;
    setdata([...data, newRecord]);
    setSum(result);
  };

  return (
    <div className="App">

      <section>
        <h2 >Sum Two Numbers</h2>
        <div id='inputs'>
        <input className='gap'
          //type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          />
        <input
          //type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          /></div>
        <button id='btn' onClick={handleSum} disabled={num1 === '' || num2 === ''}>
          Sum
        </button>
        <p id='btn' >Result : {sum}</p>
      </section>
      <section>
        <h2>Records</h2>
        {visible && (
          <ol>
            {data.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ol>
        )}
        <div className='bg-red-800'>
        <button className='gap' onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'}
        </button>
        <button onClick={removeChild}>Remove Record</button>
       </div>
      </section>
      <section>
        <h2>Counter</h2>
        <div id='flex'>
        <button  onClick={() => setCounter(pre=>  pre <= 0 ?  0 : pre - 1)}>
              Decrement
        </button>
        <p  >{counter}</p>
        <button  onClick={() => setCounter(counter + 1)}>
      Increment
        </button>
        </div>

      </section>
      <section>
        <h2>Search Filter</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <ol>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
        <section>
          <h2>Two-Way Data Binding</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>{text}</p>
        </section>

    </div>

  );
}

export default App;