import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Login from "./components/Login";
import Register from "./components/Register";
import "./style.css";
// dotenv.config();

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
