import './App.css';
import Title from "./Title";
import Numbers from './Numbers';
import Prizes from './Prizes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import data from "./data.js";
import classNames from "classnames";

function App() {

  const [isFetching, setIsFetching] = useState(false);
  const [lastDate, setLastDate] = useState(null);
  const [regularNumbers, setRegularNumbers] = useState([]);
  const [specialNumbers, setSpecialNumbers] = useState([]);
  const [lastOdds, setOdds] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    //  Using a bit of timeout to see loading spinner and the app transition
    setTimeout(function () {
      axios.get('/api/drawings/euroJackpot')
        .then(function (response) {
          // handle success
          let results;
          if (typeof response.data !== 'object') {
            //  We're not getting right data, so we get fake data
            results = data;
          } else {
            results = response.data;
          }
          const {
            drawingDate,
            numbers,
            euroNumbers,
            odds
          } = results.last;
          setLastDate(drawingDate);
          setRegularNumbers(numbers);
          setSpecialNumbers(euroNumbers);
          setOdds(odds);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          setIsFetching(false);
        });
    }, 2000);
  }, []);

  const appClassNames = classNames({
    "App": true,
    "isLoading": isFetching
  });

  return (
    <div className={appClassNames}>
      <Title lastDate={lastDate} />
      <Numbers
        standardNumbers={regularNumbers}
        specialNumbers={specialNumbers} />
      <Prizes
        odds={lastOdds} />
    </div>
  );
}

export default App;
