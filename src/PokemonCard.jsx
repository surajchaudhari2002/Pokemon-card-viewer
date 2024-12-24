export const PokemonCard = ({ curPokemon }) => {
    return (
        <>
            <li className="pokemon-card">
                <figure>
                    <img src={curPokemon.sprites.other.dream_world.front_default} alt={curPokemon.name} className="pokemon-image" />
                </figure>
                <h1 className="pokemon-name">{curPokemon.name}</h1>
                <div className="pokemon-info pokemon-highlight">
                    <p>{curPokemon.types.map((curtype) => {
                        return curtype.type.name
                    }).join(", ")}</p>
                </div>


                <div className="grid-three-cols">
                    <p className="pokemon-info">
                        <span> Height:</span> {curPokemon.height}
                    </p>
                    <p className="pokemon-info">
                        <span> Weight:</span> {curPokemon.weight}
                    </p>
                    <p className="pokemon-info">
                        <span> speed:</span> {curPokemon.stats[5].base_stat}
                    </p>
                </div>

                <div className="grid-three-cols">
                    <div className="pokemon-info">
                        <span> Experience:</span>
                        <p>{curPokemon.base_experience}</p>

                    </div>

                    <div className="pokemon-info">
                        <span>Attack:</span>
                        <p>{curPokemon.stats[1].base_stat}</p>

                    </div>

                    <div className="pokemon-info">
                        <span> Abilities: </span>
                        <p>
                            {curPokemon.abilities
                                .map((abilityInfo) => abilityInfo.ability.name)
                                .slice(0, 1)
                                .join(", ")}
                        </p>

                    </div>
                </div>
            </li>
        </>
    )
}