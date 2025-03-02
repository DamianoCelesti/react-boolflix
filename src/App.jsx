
import axios from "axios";
import Header from './components/Header'
import Main from './components/Main'
import GlobalContext from "./components/contexts/GlobalContext"
import { useState, useEffect } from "react";


function App() {
  const [titolo, setTitolo] = useState("");
  const [movies, setMovies] = useState([]);



  function fetchMovies() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=62b15f1030df58533b6f0c83c86a88b7&query=${titolo}`)
      .then((res) =>
        // console.log(res),
        setMovies(res.data.results)


      )
  }


  useEffect(fetchMovies, [titolo]);



  return (
    <>
      <GlobalContext.Provider value={{ movies, setTitolo }}>
        <Header />
        <Main />
      </GlobalContext.Provider >
    </>
  )
}

export default App
