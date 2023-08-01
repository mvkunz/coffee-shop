import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
    </Routes>

  )
}

export default App
