import logo from './logo.svg';
import{Routes,Route}from"react-router-dom";
import './App.css';
import {Counter}from "./components/Counter";
import { Todo } from './components/Todo';
import {Tododetails}from "./components/Tododetails";
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/todo/:id" element={<Tododetails/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
