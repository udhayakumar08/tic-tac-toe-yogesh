import React from 'react'

class Status extends React.Component {
    
    constructor(props) {
        super(props);

        this.state={
            player:this.props
        }

    }

    render() {

        let {currentPlayer, gameStatus} = this.props;
       
        return (
            <label>{gameStatus === "won" ? currentPlayer + " Wins" : currentPlayer + "'s Turn"}</label>
        );
    }
}

export default Status;