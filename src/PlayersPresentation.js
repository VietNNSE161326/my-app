import React from 'react'

export default function PlayersPresentation({ player }) {
    console.log(player);
    return (
        <div className='container'>
            {player.map((player) => (
                <div className='column'>
                    <div className='card'>
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
