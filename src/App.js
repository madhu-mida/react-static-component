import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Menu from './Menu';
import Reviews from './Reviews';
import AverageRating from './AverageRating';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div className='left'>
        <Menu />
      </div>

      <div className='right'>

        <div className='right-top'>

          <Reviews />
          <AverageRating />
          <SentimentAnalysis />
        </div>

        <div className='right-bottom'>
          <WebsiteVisitors />
        </div>

      </div>



    </div>
  );
}

export default App;
