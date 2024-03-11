import logo from './logo.svg';
import './App.css';

function App() {

  const headerText = 'This is Postit!';


  return (
    <div className="App">
      <h1>{headerText}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>

        We're in the body of the project
      </body>
    </div>
  );
}

export default App;
