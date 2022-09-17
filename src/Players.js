import React, { Component } from 'react'
import cr from "../src/assets/images/cr.jpg"
import haaland from "../src/assets/images/haaland.jpg"
import kane from "../src/assets/images/kane.jpg"
import kante from "../src/assets/images/kante.jpg"
import messi from "../src/assets/images/messi.jpg"
import neymar from "../src/assets/images/neymar.jpg"

export default class Players extends Component {
    render() {
        return (
            <div className='container'>
                <div className='column'>
                    <div className='card'>
                        <img src={cr}></img>
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src={kante}></img>
                        <h3>Kante</h3>
                        <p className='title'>Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src={messi}></img>
                        <h3>Messi</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src={neymar}></img>
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src={kane}></img>
                        <h3>Kane</h3>
                        <p className='title'>Tottemham</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <img src={haaland}></img>
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}
