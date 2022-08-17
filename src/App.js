import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { FormBook } from './Components/FormBook';
import BookTable from './Components/BookTable';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <FormBook />
        <BookTable />
      </div>
    </div>
  );
}

export default App;
