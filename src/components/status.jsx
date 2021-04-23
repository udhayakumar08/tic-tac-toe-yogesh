import React from 'react'

class Status extends React.Component {
    
    constructor(props) {
        super(props);

        console.log(props);

        this.state={
            player:this.props
        }

    }

    render() {

        let {currentPlayer, gameStatus} = this.props;
        console.log(this.props);
        return (
            <label>{gameStatus === "won" ? currentPlayer + " Wins" : currentPlayer + "'s Turn"}</label>
        );
    }
}

export default Status;