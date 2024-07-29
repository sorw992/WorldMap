import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();

  // destructure object
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    // prevent running Link when user presses delete button
    e.preventDefault();
    console.log("test");
    // id is current id
    deleteCity(id);
  }

  return (
    <li>
      {/* pass the data that we want to pass from this page to next one */}
      {/* to "cities/:id" */}
      {/* to={`${id}`} will add or attach id to current url e.g. -> http://localhost:5173/app/Cities/17806751 */}
      <Link
        // note: if we want to add multiple classe names with css modules, we need to do so in a string.
        // note for ternary condition here: otherwise dont add any class here
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        {/* time html element */}
        <time className={styles.date}>({formatDate(date)})</time>
        {/* &times; is X icon */}
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
