import './App.css';
import Title from "./Title";
import Numbers from './Numbers';
import Prices from './Prices';
import { useEffect } from 'react';
import axios from 'axios';
import data from "./data.js";

function App() {
  useEffect(() => {
    axios.get('/api/drawings/euroJackpot')
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.headers["content-type"] !== "application/json") {
          //  We're not getting json object, so we get fake data
          response = data;
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <Title />
      <Numbers />
      <Prices />
    </div>
  );
}

export default App;
