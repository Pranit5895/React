// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the Application';  //STRING
  const likes = 50;  //NUMBER 
  // const person = {name: 'Pranit', age:30}
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
        <h2> {title} </h2>
        <p> Liked {likes} times</p>
        <p> { [1,2,3,4,5] }</p>
        <p> {Math.random() * 10} </p>

        <a href={link}> Google Site</a>
      </div>
    </div>
  );
}

export default App;
