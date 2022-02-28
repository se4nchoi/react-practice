import "./assets/css/App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot, faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

import Header from "./components/Header.js";
import Card from "./components/Card.js";
import data from "./data.js"

export default function App() {
  const cards = data.map(
    d => {
      return (
        <Card  
          key={d.id}
          {...d}
        />
      )}
  );

  return (
    <div className="wrapper">
      <Header />
      <div className="contents-wrapper">
        <section className="contents">
          {cards}
        </section>
      </div>
    </div>
  );
}


library.add(fas, faLocationDot, faEarthAmericas)