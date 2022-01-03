import { useEffect, useState } from 'react';
import axios from 'axios';
import data from "../data/drawings";

function useDrawings() {

    const [lastDate, setLastDate] = useState(null);
    const [regularNumbers, setRegularNumbers] = useState([]);
    const [specialNumbers, setSpecialNumbers] = useState([]);
    const [lastOdds, setOdds] = useState(null);
    const [nextDate, setNextDate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    function updateData(results) {
        const {
            drawingDate,
            numbers,
            euroNumbers,
            odds
        } = results.last;
        const nextDrawingDate = results.next.drawingDate;
        setLastDate(drawingDate.split(",")[0]);
        setRegularNumbers(numbers);
        setSpecialNumbers(euroNumbers);
        setOdds(odds);
        setNextDate(nextDrawingDate.split(",")[0]);
    }

    useEffect(() => {
        //  Using a bit of timeout to see loading spinner and the app transition
        setTimeout(function () {
            axios.get('/api/drawings/euroJackpot')
                .then(function (response) {
                    // handle success
                    let results;

                    if ((typeof response.data === 'object') &&
                        response.data.last &&
                        response.data.next
                    ) {
                        results = response.data;
                    } else {
                        //  We're not getting right data, so we use mocked data
                        console.log("Using mocked data");
                        results = data;
                    }
                    updateData(results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    //  Call failed, so we use mocked data
                    console.log("Using mocked data");
                    updateData(data);
                })
                .then(function () {
                    // always executed
                    setIsLoading(false);
                });
        }, 2000);
    }, []);

    return {
        'isFetching': isLoading,
        'lastDate': lastDate,
        'regularNumbers': regularNumbers,
        'specialNumbers': specialNumbers,
        'lastOdds': lastOdds,
        'nextDate': nextDate
    };
}

export default useDrawings;