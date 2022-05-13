import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/add">Add a Movie</Link></li>
      </ul>  
      <Routes>
        <Route path="/movies">
          <Home/>
        </Route> 
        <Route path="/movies">
          <Movies/>
        </Route>  
        <Route path="/add">
          <AddMovie/>
        </Route>
        <Route path="*">
          <UhOh404/>
        </Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
