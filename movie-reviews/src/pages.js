import React, { useState } from "react";

export function Home({ movies = [], setMovies = (f) => f }) {
  const posterPrefix = "https://image.tmdb.org/t/p/original";

  if (movies == null || movies === undefined)
    return <h2>No movies available</h2>;

  return (
    <>
      <table>
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
              <td></td>
              <td>
                <button
                  onClick={() => {
                    const movieResult = movies.filter(
                      (movie) => movie._id !== this.id
                    );
                    console.log(movieResult);
                    setMovies(movieResult);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          const movieResult = movies.filter((movie) => movie._id !== this.id);
          console.log(movieResult);
          setMovies(movieResult);
        }}
      >
        Remove
      </button>
    </>
  );
}

export function AddMovie() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [actors, setActors] = useState(null);
  const [poster, setPoster] = useState(null);
  const [rating, setRating] = useState(null);

  const titleUpdate = (event) => {
    setTitle(event.target.value);
  };

  const dateUpdate = (event) => {
    setDate(event.target.value);
  };

  const actorsUpdate = (event) => {
    var actorArray = event.target.value.split(",");
    setActors(actorArray);
  };

  const posterUpdate = (event) => {
    setPoster(event.target.value);
  };

  const ratingUpdate = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    fetch("/api/addMovie", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        release_date: date,
        actors: actors,
        poster: poster,
        rating: rating,
      }),
    }).then(() => {
      console.log("Movie has been added to the database!");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br></br>
        <input type="text" onChange={titleUpdate}></input>
        <br></br>
        <label>Release Date: (YYYY-MM-DD) </label>
        <br></br>
        <input type="text" onChange={dateUpdate}></input>
        <br></br>
        <label>Actors: </label>
        <br></br>
        <input type="text" onChange={actorsUpdate}></input>
        <br></br>
        <label>Poster: </label>
        <select onChange={posterUpdate}>
          <option value="/5cZySBvy41eHTD5LyQn48aP444k.jpg">Example 1</option>
          <option value="/5mq8J11266ZL7HCOwDGXoaU6eIO.jpg">Example 2</option>
        </select>
        <br></br>
        <label>Rating: </label>
        <select onChange={ratingUpdate}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export function UhOh404() {
  return (
    <div>
      <h2>There's nothing here. Try one of the links.</h2>
    </div>
  );
}
