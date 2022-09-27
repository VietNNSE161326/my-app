import React from 'react'
import { useState } from 'react';
export default function PlayersPresentation({ Players }) {
    return (
        <div className='container'>
            {Players.map((players) => (
                <div className='column'>
                    <div className='card'>
                        <img src={players.img} />
                        <h3>{players.name}</h3>
                        <p className='title'>{players.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
