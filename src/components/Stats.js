import React from 'react'

import "./Stats.scss";

export default function Stats(props) {
    return (
        <div className="stats-wrapper">
            {props.pokemon.stats.map(stat => {
                return (
                <div className="stat-container">
                    <p className="base-stat">{stat.base_stat}</p>
                    <h3 className="stat-name">{stat.stat.name}</h3>
                </div>
                )
            })}
        </div>
    )
}
