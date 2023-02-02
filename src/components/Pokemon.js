import React from 'react'

import "./Pokemon.scss"; 

export default function Pokemon(props) {
    return (
        <div className="screen">
            <h1>{props.pokemon.name}</h1>
            <img src={props.pokemon.sprites.front_default} alt={`pokemon sprite of ${props.pokemon.name}`} />
            <h3 className="poke-num">#{props.pokemon.id}</h3>
            <ul className="types">
                {props.pokemon.types.map((type) => {
                    return <li className={type.type.name + " type"}>{type.type.name}</li>;
                })}
            </ul>
        </div>
    )
}
