/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/






import './App.css';
import Form from './CRUD/form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePassword from './CRUD/updatepassword';
import DeleteUser from './CRUD/deleteuser';
import Read from './CRUD/read';
import ActualPage from './CRUD/ActualPage';
import Search from './CRUD/Search';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ActualPage />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/create" element={<Form />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<UpdatePassword />}></Route>
          <Route exact path="/delete" element={<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
