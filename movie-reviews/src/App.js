import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, AddReview, UhOh404 } from "./pages";

function App() {
  return (
    <>
      <h1>Movie Reviews</h1>
        <nav>
          <Link to="">Home | </Link>
          <Link to="add">Add Review</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddReview />} />
        <Route path="*" element={<UhOh404 />} />
      </Routes>
    </>
  );
}

export default App;
