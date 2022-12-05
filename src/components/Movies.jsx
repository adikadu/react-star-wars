import classes from "./Movies.module.css";

export default function Movies(props) {
  return (
    <ul className={classes["movie-list"]}>
      {props.moviesList.map((movie) => (
        <li key={movie.id} className={classes.movie}>
          <h3>{movie.title}</h3>
          <p>{movie.text}</p>
        </li>
      ))}
    </ul>
  );
}
