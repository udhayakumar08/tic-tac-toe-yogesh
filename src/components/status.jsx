import React from 'react'

class Status extends React.Component {
    
    constructor(props) {
        super(props);

        console.log(props);

    }

    render() {

        let {currentPlayer, gameStatus} = this.props;
        return (
            <label>{gameStatus === "won" ? currentPlayer + " Wins" : currentPlayer + "'s Trun"}</label>
        );
    }
}

export default Status;