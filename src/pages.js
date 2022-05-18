import reviewData from "./reviews.json";
import { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";

export function Home() {
  const posterPrefix = "https://image.tmdb.org/t/p/original";

  const removeReview = () => {
    reviewData.filter((review) => review.checked !== true);
  };

  return (
    <div>
      {reviewData.map((review) => (
        <p key={review.id}>
          {review.name} - {review.release_date} - {review.actors.join(", ")}
          <img
            src={posterPrefix + review.poster}
            alt="poster"
            height="150"
            width="100"
          ></img>{" "}
          - {review.rating} - <Checkbox checked={review.checked}/>
        </p>
      ))}
      <button onClick={removeReview}>Remove Checked</button>
    </div>
  );
}

export function AddReview() {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>Title: </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Release Date: (YYYY-MM-DD) </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Actors: </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Poster: </label>
        <select>
          <option value="/5cZySBvy41eHTD5LyQn48aP444k.jpg">Example 1</option>
          <option value="/5mq8J11266ZL7HCOwDGXoaU6eIO.jpg">Example 2</option>
        </select>
        <br></br>
        <label>Rating: </label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <button>Add</button>
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
