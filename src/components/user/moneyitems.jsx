import React, {useState,useEffect} from 'react'; 
import axios from 'axios';


const Stuff = () => {
    const url=process.env.API_URL;

    const [pokemons, setPokemons]=useState([]);

const getStuff= async() => {
    const result = await axios.get(`${url}pokemon/pokemon.php`);
    setPokemons(result.data);
  //  console.log(result.data);
}
useEffect(()=>{
getStuff();
},[]);

    return (
      <>
     {pokemons.map((res,index)=>
      <h1 key={`test${index}`}> {res.name}</h1>
      )}
      </>
    )
}

export default Stuff;