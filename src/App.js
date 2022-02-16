import Navbar from "./components/Navbar"
import React, {useEffect, useState} from "react"
import './App.css';
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";


 

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const rickUrl = "https://rickandmortyapi.com/api/character"

const fetchCraracters = (rickUrl) => {
  fetch(rickUrl)
  .then((response) => response.json())
  .then((data) =>{
     setCharacters(data.results);
     setInfo(data.info);
    })
  .catch((error) => console.log(error));
};
const onPrevious = () => {
  fetchCraracters(info.prev);
}

const onNext = () => {
  fetchCraracters(info.next);

}
  useEffect(() => {
    fetchCraracters(rickUrl);

  },[])

  return (
  <>
    <Navbar brand="Rick and morty app"/>
     
     <div className= "container mt-5">
       <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
       <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
     </div>
   </>
 
  );
}

export default App;
