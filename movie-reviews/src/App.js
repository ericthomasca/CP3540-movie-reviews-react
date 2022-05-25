import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, AddReview, UhOh404 } from "./pages";
import { useState, useEffect } from "react";

var movies = null;

function App({ secret: sc }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("running");
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
        <Route path="/add" element={<AddReview />} />
        <Route path="*" element={<UhOh404 />} />
      </Routes>
    </>
  );
}

export default App;
