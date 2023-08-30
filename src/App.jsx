import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
import Header from './compoments/Header';

function App() {
  // const [count, setCount] = useState(0);
  // const [showModal, setShowModal] = useState(false);

  // !!!ONLY EXAMPLE!!!
  // function useState(state) {
  //   return [state, (newState) => state = newState];
  // }
  // !!!ONLY EXAMPLE!!!

  // let count = 0;

  // const countValue = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  // const setValue = (value) => {
  //   setCount(value);
  // }

  // const toggleShowModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <div className="App">
      <Header />
      <TodoPage />
      {/* <h1>Counter:</h1>
      <h2 className={`text-${count}`}>{count}</h2>
      <button onClick={countValue}>Add more!</button>
      <button onClick={() => setValue(10)}>Set value!</button>
      <button onClick={toggleShowModal}>Show</button>
      {showModal && <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}></div>} */}
    </div>
  );
}

export default App;
