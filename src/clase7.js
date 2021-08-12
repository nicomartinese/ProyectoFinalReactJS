import { useEffect, useState } from "react"
export const Clase7 = ()=> {
    const [number, setNumber] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [pokemones, setPokemones] = useState([]);
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=0&offset=10")
        .then((response) => response.json())
        .then((data) => setPokemones(data.results))
    }, []);
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
    }, []);
    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search#json")
        .then((response) => response.json())
        .then((data) => setProductos(data.results))
    }, []);
    return(
        <>
           <h1>
               CLASE 7
           </h1>
           <div>
                <button onClick={()=>setNumber(number+1)}>
                        +
                </button>
                <span> {number} </span>
                <button onClick={()=>setNumber(number-1)}>
                        -
                </button>
            </div>
            <div>
                <h2>
                    Character container
                </h2>
                {characters.map((character)=>(
                    <p key={character.id}>
                        {character.name}
                    </p>
                ))}
            </div>
            <div>
                <h2>
                    Pokemon container
                </h2>
                {pokemones.map((pokemon)=>(
                    <p key={pokemon.id}>
                        {pokemon.name}
                    </p>
                ))}
            </div>
            <div>
                <h2>
                    Product container
                </h2>
                {productos.map((producto)=>(
                    <p key={producto.id}>
                        {producto.name}
                    </p>
                ))}
            </div>
            
        </>
    )
}