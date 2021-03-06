import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function Home({ movies = [], setMovies = (f) => f }) {
  const posterPrefix = "https://image.tmdb.org/t/p/original";

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  if (movies == null || movies === undefined)
    return <h2>No movies available</h2>;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Actors</th>
            <th>Poster</th>
            <th>Rating</th>
            <th>Remove?</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.actors.join(", ")}</td>
              <td>
                <img
                  src={posterPrefix + movie.poster}
                  alt="poster"
                  height="150"
                  width="100"
                ></img>
              </td>
              <td>{movie.rating}</td>
              <td>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isChecked}
                  onChange={checkHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="submit" variant="danger">Remove</Button>
    </>
  );
}

export default Home;



