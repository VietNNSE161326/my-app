import React, { Component } from 'react'
import { Player } from '../shared/ListOfPlayers';
import Players from '../Players';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            player: Player
        };
    }
    render() {
        return (
            <Players player={this.state.player}></Players>
        )
    }
}

export default Main

