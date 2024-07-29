import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    // common javascript
    // create an array of all the cities
    // if current country is not yet in the array then let's return a new array that contains all the elements plus a new one
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    // if countries array include current country then we just return the current countries array
    else return arr;
    // [] means looping starts at zero (so we used empty array)
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <>
          {/* <div key={index}>s</div> */}
          <CountryItem country={country} key={country.country} />
        </>
      ))}
    </ul>
  );
}

export default CountryList;
