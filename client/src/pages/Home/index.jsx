import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import Header from '../../components/Header';
import styles from './Home.module.sass';

const Home = () => {
  const { weather, loading, error } = useSelector(state => state.weather);

  return (
    <>
      <Header />

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Weather Forecast</h1>
        <p className={styles.heroText}>
          Track weather anywhere in the world. To unlock extended features
          (5-day forecast, favorites & browsing history)
          <span className={styles.heroSpan}> — please log in.</span>
        </p>
      </section>
      <section className={styles.search}>
        <Input />
        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}
      </section>

      {weather && (
        <section className={styles.forecast}>
          <h2 className={styles.forecastTitle}>
            5-day forecast —{weather.name}, {weather.country}
          </h2>
          <ul className={styles.forecastList}>
            {weather.daily.map((day, i) => (
              <li className={styles.forecastItem}>
                <p className={styles.forecastText}>{day.date}</p>
                <p className={styles.forecastText}>{day.temp} °C</p>
                <p className={styles.forecastText}>{day.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Home;
