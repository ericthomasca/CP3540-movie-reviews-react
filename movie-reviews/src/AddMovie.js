import React, { useState } from "react";

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
        remove: false,
      }),
    }).then(() => {
      console.log("Movie has been added to the database!");
    });
  };

  return (
    <>
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
    </>
  );
}

export default AddMovie;
