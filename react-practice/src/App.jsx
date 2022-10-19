import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shopping from './Components/Shopping/Shopping';
import Game from './Components/Game/Game';
import MilesAhead from './Components/MilesAhead';
import Login from './Components/Credentials';
import PropComp from './Components/Props';
import MyComponent from './Components/Comp_practice/MyComponent';
import Home from './Components/Home';
import Users from './Components/Users';
import FilmInfo from './Components/FilmRequest';
import SubContent from './Components/SubContent';

function App() {
  return (
    <Router>
      <Link to="/home">
        Home
      </Link>
      <Link to="/users">
        Users
      </Link>
      <Link to="/films">
        Films
      </Link>
      <Link to="/myComponent">
        My Component
      </Link>
      <Link to="/propComp">
        Prop Component
      </Link>
      <Link to="/milesAhead">
        Miles Ahead
      </Link>
      <Link to="/login">
        Login
      </Link>
      <Link to="/shopping">
        Shopping
      </Link>
      <Link to="/game">
        Game
      </Link>
      <Link to="/subcontent">
        SubContent
      </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/films" element={<FilmInfo />} />
        <Route path="/myComponent" element={<MyComponent />} />
        <Route path="/propComp" element={<PropComp />} />
        <Route path="/milesAhead" element={<MilesAhead />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/game" element={<Game />} />
        <Route path="/subcontent" element={<SubContent />} />
      </Routes>
    </Router>
  );
}

export default App;
