import { NavLink } from 'react-router-dom';
import './nav-bar.css';

function NavBar() {
  return (
    <header className="nav-bar">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coffees">Cafés</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;

// Na aplicação que está sendo desenvolvida, o componente NavBar (contem o menu de navegação). Ele está sendo renderizado no componente App, fora do escopo de Routes. Isso significa que, independentemente da página acessada, ele será renderizado. Porém, em alguns casos, esse pode não ser o comportamento esperado.