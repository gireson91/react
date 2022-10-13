import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import PropComp from './Props'
import MilesAhead from './MilesAhead';
import Login from './Credentials';

function App() {

  function printInput(event) {
    // print the inputs name and its value
    console.log("EVENT:", event);
    console.log(event.target.name, ":", event.target.value);
  }

  const EventExample = () => {
    return (
    <>
      <label htmlFor="a">A:</label>
      <input type="text" name="a" id="a" onChange={printInput}/>
      <br/>
      <label htmlFor="b">B:</label>
      <input type="text" name="b" id="b" onChange={printInput}/>
      <br/>
      <label htmlFor="c">C:</label>
      <input type="text" name="c" id="c" onChange={printInput}/>
    </>
  )};
  return (
    <>
    {/* <MyComponent/>
    <PropComp/>
    <MilesAhead/> */}
    <EventExample/>
    <br/>
    <Login/>
    </>
  );
}

export default App;
