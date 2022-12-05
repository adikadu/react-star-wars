import classes from "./App.module.css";

import { Fragment, useState, useEffect, useCallback } from "react";

import Card from "./components/UI/Card";
import Movies from "./components/Movies";
import Loading from "./components/UI/Loading";

export default function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const btnClickHandler = useCallback(async () => {
    setIsLoding(true);
    const res = await fetch("https://swapi.dev/api/films/");
    const movies = await res.json();
    setIsLoding(false);
    const newMovieList = [];
    movies.results.forEach((movie) => {
      newMovieList.push({
        id: movie.episode_id,
        title: movie.title,
        text: movie.opening_crawl,
      });
    });
    setMoviesList((prevMovieList) => [...prevMovieList, ...newMovieList]);
  }, []);

  useEffect(() => {
    btnClickHandler();
  }, [btnClickHandler]);

  return (
    <Fragment>
      <Card>
        <button className={classes.btn} onClick={btnClickHandler}>
          Fetch Movies
        </button>
      </Card>
      <Card>
        {isLoding && <Loading />}
        {!isLoding && !moviesList.length && <p>No Movies found</p>}
        {!isLoding && moviesList.length > 0 && (
          <Movies moviesList={moviesList}></Movies>
        )}
      </Card>
    </Fragment>
  );
}
