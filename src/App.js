import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Info from './components/Info';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/info/:id' element={<Info />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
