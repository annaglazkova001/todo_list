import './App.css';
import { List } from './List';
import image from './task.jpg';
import imageTwo from './taskTwo.jpg';


function App() {
  return (
    <div className='App'>
    <div className="container">
      <img src={image} alt='todo' width='300px'/>
    </div>

    <div className="container">
      <h1>What's your plan for today?</h1>
    </div>

    <div className="container">
      <List/>
    </div>

    <div className="container">
      <img src={imageTwo} width='300px' alt='todo'/>
    </div>

    </div>
  );
}

export default App;
