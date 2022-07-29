import logo from './logo.svg';
import './App.css';
import { FormBook } from './Components/FormBook';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <FormBook />
      </div>
    </div>
  );
}

export default App;
