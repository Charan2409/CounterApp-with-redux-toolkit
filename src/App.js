import './App.css';
import {useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () =>{
    dispatch(actions.increment())
  }
  const decrement = () =>{
    dispatch(actions.decrement())
  }
  const addby = () =>{
    dispatch(actions.addBy(40))
  }
  const resetCount = () =>{
    dispatch(actions.resetCount())
  }

  return (
    <div className="App">
      <h1>Counter App with Redux</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add by 10</button>
      <button onClick={resetCount}>Reset the counter</button>
    </div>
  );
}

export default App;
