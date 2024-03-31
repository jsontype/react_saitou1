import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";
import Count from "./components/Count";
import News from "./components/News";
import Todos from "./components/Todos";
import Shopping1 from "./components/Shopping1";
import Shopping2 from "./components/Shopping2";

export default function App() {
  return (
    <div className="App">
      <span>
        <Link className="menuItem" to="/">
          Home
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/movie">
          Movies
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/count">
          Count
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/news">
          News
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/todos">
          Todos
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/shopping1">
          Apparels
        </Link>
      </span>
      <span>
        <Link className="menuItem" to="/shopping2">
          Watches
        </Link>
      </span>

      <hr />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/count" element={<Count />} />
        <Route path="/news" element={<News />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/shopping1" element={<Shopping1 />} />
        <Route path="/shopping2" element={<Shopping2 />} />
      </Routes>
    </div>
  );
}
