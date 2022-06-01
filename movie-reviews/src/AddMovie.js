import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlID="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={titleUpdate}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" onChange={dateUpdate}></Form.Control>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Actors</Form.Label>
          <Form.Control type="text" onChange={actorsUpdate}></Form.Control>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Select aria-label="Default select example" onChange={posterUpdate}>
            <option>Select a Poster</option>
            <option value="/5cZySBvy41eHTD5LyQn48aP444k.jpg">Poster 1</option>
            <option value="/5mq8J11266ZL7HCOwDGXoaU6eIO.jpg">Poster 2</option>
          </Form.Select>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Select aria-label="Default select example" onChange={ratingUpdate}>
            <option>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <br></br>
        <Button type="submit">Add Movie</Button>
      </Form>
    </>
  );
}

export default AddMovie;
