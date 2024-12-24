import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)
    const [searchinput, setsearchinput] = useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=200"
    const fetchapi = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data
            })
            const detailresponseData = await Promise.all(detailPokemonData);
            console.log(detailresponseData)
            setPokemon(detailresponseData)
            setLoading(false)


        } catch (error) {
            console.log(error)
            setLoading(false)
            seterror(error)
        }


    }

    useEffect(() => {
        fetchapi();
    }, [])

    const searchData = pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(searchinput.toLowerCase())
    )

    if (loading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    return (
        <>
            <section className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>

                </header>
                <div className="pokemon-search">
                    <input type="text"
                        placeholder="Search Pokemon"
                        value={searchinput}
                        onChange={(event) => setsearchinput(event.target.value)} />
                </div>

                <div>
                    <ul className="cards">
                        {
                            searchData.map((curPokemon) => {
                                return <PokemonCard key={curPokemon.id} curPokemon={curPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}