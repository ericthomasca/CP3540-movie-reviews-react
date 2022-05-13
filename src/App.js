import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Movies, AddMovie, UhOh404 } from "./pages";

function App() {
  return (
    <>
      <h1>Movie Reviews</h1>
        <nav>
          <Link to="">Home | </Link>
          <Link to="movies">Movies | </Link>
          <Link to="add">Add Movies</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="*" element={<UhOh404 />} />
      </Routes>
    </>
  );
}

export default App;
