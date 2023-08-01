import { useNavigate } from "react-router-dom";
import { coffeeList } from "../../data";

import './coffee-list.css';

function CoffeeList() {
  const navigate = useNavigate();

  return (
    <div className="list-page">
      <h1>NOSSOS CAFÉS</h1>
      <hr />
      <main>
        {coffeeList.map((coffee) => (
          <button
            className="coffee-card"
            style={{
              backgroundImage: `url(${coffee.image})`,
              backgroundSize: 'cover',
            }}
            onClick={() => navigate(`/coffees/${coffee.slug}`)}
          >
            <h3>{coffee.title}</h3>
          </button>
        ))}
      </main>
    </div>
  )
}

export default CoffeeList;