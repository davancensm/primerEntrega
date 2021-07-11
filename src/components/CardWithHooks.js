import React, {useState,useEffect} from "react";
import "./style.css";

export default function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch('http://172.21.2.35/api/slot/0/io/ai',{
      method : 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Accept' : 'vdn.dac.v1'
    }
    })
    .then(res => res.json())
    .then((data) => setCharacter(data.results))
  },[])
console.log(character)
  return (
      <>
      {character.map(personaje => 
        <div>
          <img src={personaje.image}/>
        </div>
      )}
      </>
    )
}
