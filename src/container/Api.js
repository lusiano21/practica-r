//Cuando encuentre una api relacionada con mi proyecto la pongo tutor
import { useEffect,useState } from "react"
export const PokeApiExample = () => {
    const [pokemons,setPokemons] = useState([])

useEffect(() =>{
    const getPokemons = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=11")
        .then(response => response.json())
        .then(data => setPokemons(data.results))
    }
getPokemons();
},[])
return <ul>
    {pokemons.map ((pokemon) => (
        <li key={ppokemon.name}>{pokemon.name}</li>
    ))}
</ul>
}