import React, { useEffect, useState, useReducer } from 'react';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState("girls");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const myFetch = async () => {
      setIsLoading(true);
      try{
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${movie}`);

        const responseParsed = await response.json();
        console.log(responseParsed);

        setIsLoading(false);
        setFetchedData(responseParsed);

      }catch(error){
        setError(error);
        setIsLoading(false);
      }
    }
  myFetch();

  }, [movie]);

  if(isLoading){
    return <p>Loading</p>
  }
  
  if(error){
    return <p>error!</p>
  }
  return (
    <div className="App">
      <button
        onClick={() => setMovie("girls")}
      >Batman</button>
    </div>
  );
}

export default App;
