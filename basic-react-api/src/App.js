import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [apiURL, setApiUrl] = useState("http://api.tvmaze.com/search/shows?q=girls");

  useEffect(() => {
    const myFetch = async () => {
      const response = await fetch(apiURL);

      const responseParsed = await response.json();

      console.log(responseParsed);

      setFetchedData(responseParsed);
    }
  myFetch();

  }, []);

  
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
