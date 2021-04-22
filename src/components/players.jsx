import React from 'react'

class Players extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            player1 : "",
            player2 : ""
        }
    }

    div = {
        backgroundColor: "black",
        display: "flex",
        alignItems : "center",
        flexDirection: "column",
        width: "500px",
        height: "20vh",
        marginBottom: "20px",
        padding: "20px",

    }

    handlePlayer1 = (e) => {
        this.setState({player1 : e.target.value});
    }

    handlePlayer2 = (e) => {
        this.setState({player2 : e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getNames(this.state.player1, this.state.player2);
    }

    render() {
        return (
            <div style={this.div}>
                <form onSubmit={this.handleSubmit}>
                    <lable style={{ color: "white" }}>Player 1 Name : </lable>
                    <input type="text" value = {this.state.player1} onChange={(e)=> this.handlePlayer1(e)}></input><br/>
                    <label style={{ color: "white" }}>Player 2 Name : </label>
                    <input type="text" value = {this.state.player2} onChange={(e)=> this.handlePlayer2(e)}></input><br/>
                    <button style={{margin : "auto", marginTop : "15px"}} type="submit">Start Game</button>
                </form>

            </div>

        );
    }
}

export default Players;