import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
      <Route path="/coffees/:coffee" element={ <Coffee /> } />
      </Routes>
    </>

  )
}

export default App
