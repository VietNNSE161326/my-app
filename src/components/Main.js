import React, { Component } from 'react'
import { Player } from '../shared/ListOfPlayers';
import PlayersPresentation from '../PlayersPresentation';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            player: Player
        };
    }
    render() {
        return (
            <PlayersPresentation player={this.state.player}></PlayersPresentation>
        )
    }
}

export default Main

