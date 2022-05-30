import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the Application';  //STRING
  const likes = 50;  //NUMBER 
  // const person = {name: 'Pranit', age:30}
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className='content'>
        <h1> App Component</h1>
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
