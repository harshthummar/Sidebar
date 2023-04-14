import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddContact from './components/AddContact';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar/> */}
        <AddContact/>
      </div>
    </Router>
  );
}

export default App;
