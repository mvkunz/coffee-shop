import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import './App.css';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>

  )
}

export default App

// O Route pai irá renderizar o componente Layout, na rota /;
// Os Route filhos são as mesmas rotas definidas anteriormente;
// O Route contendo path="/*" é a única rota que não está aninhada com o Route pai.
// Basicamente, ao fazer isso estamos informando que todas as páginas definidas (/, /coffees e /coffees/:coffee) deverão renderizar, além dos seus respectivos componentes, o Layout.
// A rota que renderiza o componente Home possui a prop index. Isso indica que o componente Home será renderizado na mesma rota do Route pai. Alternativamente, seria possível indicar o caminho path="".