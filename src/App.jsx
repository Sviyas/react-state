import { useState } from 'react';
import './App.css';

const textMessages = ['Learn React 😍', 'Apply Jobs 🤗  ', 'Invest your new income 🤗'];
/**
 * @returns Form Submitions
 */
function App() {
  const [count, setCount] = useState(1);

  const handlPrevious = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleNext = () => {
    if (count < 3) setCount(count + 1);
  };

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={count >= 1 ? 'active' : ''}>1</div>
        <div className={count >= 2 ? 'active' : ''}>2</div>
        <div className={count >= 3 ? 'active' : ''}>3</div>
      </div>

      <p className='message'>
        Step : {count} : {textMessages[count - 1]}
      </p>

      <div className='buttons'>
        <button onClick={() => handlPrevious()}>Preview</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  );
}

export default App;

