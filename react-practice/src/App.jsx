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
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Link to="/home">
        <Button variant='primary' type='button'>Home</Button>
      </Link>
      <Link to="/users">
        <Button variant='primary' type='button'>Users</Button>
      </Link>
      <Link to="/films">
        <Button variant='primary' type='button'>Films</Button>
      </Link>
      <Link to="/myComponent">
        <Button variant='primary' type='button'>My Component</Button>
      </Link>
      <Link to="/propComp">
        <Button variant='primary' type='button'>Prop Comp</Button>
      </Link>
      <Link to="/milesAhead">
        <Button variant='primary' type='button'>Miles Ahead</Button>
      </Link>
      <Link to="/login">
        <Button variant='primary' type='button'>Login</Button>
      </Link>
      <Link to="/shopping">
        <Button variant='primary' type='button'>Shopping</Button>
      </Link>
      <Link to="/game">
        <Button variant='primary' type='button'>Game</Button>
      </Link>
      <Link to="/subcontent">
        <Button variant='primary' type='button'>Sub Content</Button>
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
