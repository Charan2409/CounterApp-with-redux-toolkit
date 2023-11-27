import './App.css';
import {useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () =>{
    dispatch({type: 'INC'});
  }
  const decrement = () =>{
    dispatch({type : "DEC"})
  }
  return (
    <div className="App">
      <h1>Counter App with Redux</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
