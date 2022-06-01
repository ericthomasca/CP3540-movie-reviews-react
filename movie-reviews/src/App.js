import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import AddMovie from "./AddMovie";
import UhOh404 from "./UhOh404";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App({ secret: sc }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/data");
      const body = await result.json();
      setMovies(body);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Movie Reviews</h1>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add">Add Review</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies}/>} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="*" element={<UhOh404 />} />
      </Routes>
    </>
  );
}

export default App;
