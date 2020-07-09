import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [movie, setMovie] = useState("girls");

  useEffect(() => {
    const myFetch = async () => {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${movie}`);

      const responseParsed = await response.json();

      console.log(responseParsed);

      setFetchedData(responseParsed);
    }
  myFetch();

  }, [movie]);

  
  return (
    <div className="App">
      <button
        onClick={() => setMovie("batman")}
      >Batman</button>
    </div>
  );
}

export default App;
