import './App.css';
import React from 'react';
import { Home } from '../home/Home';


function App() {

  //const [movies, setMovies]=useState([]);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=c4eb739e20ffc057886bd2aaca4205ab")
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }, [])
  
  return (
    <div className="App">
       <Home/>
    </div>
  );
}

export default App;
