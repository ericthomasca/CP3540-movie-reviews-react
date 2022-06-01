import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "./Home";
import { AddMovie } from "./AddMovie";
import { UhOh404 } from "./UhOh404";

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
      <nav>
        <Link to="">Home | </Link>
        <Link to="add">Add Review</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies}/>} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="*" element={<UhOh404 />} />
      </Routes>
    </>
  );
}

export default App;
