import React from 'react';
import Cell from './cell';
import Status from './status';
import Table from './table';
import Counter from './counter';

let data = []
class Board extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        let nextProps = this.props.player1;


        this.state = {
            player: this.props.player1,
            nextMove: "",
            gameStatus: null,
            Otimer:0,
            Xtimer:0,
            cells: [null, null, null, null, null, null, null, null, null]


        }

        // console.log(props)
        // this.setState({player: this.props.player1})

        this.victoryLines = [
            [[1, 2], [4, 8], [3, 6]],
            [[0, 2], [4, 7]],
            [[0, 1], [4, 6], [5, 8]],
            [[4, 5], [0, 6]],
            [[3, 5], [0, 8], [2, 6], [1, 7]],
            [[3, 4], [2, 8]],
            [[7, 8], [2, 4], [0, 3]],
            [[6, 8], [1, 4]],
            [[6, 7], [0, 4], [2, 5]]
        ];
    }

    div = {
        backgroundColor: "black",
        color: "white",
        height: "300px",
        width: "500px",
        margin: "auto",
        padding: "20px"
    }

    turn = {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        marign: "auto",
        height: "50px"
    }
     count={
         visibility:"hidden"
         
     }

    victoryCheck = (id, move, player) => {
        id = Number(id);
        for (let x = 0; x < this.victoryLines[id].length; x++) {
            let checkPoints = this.victoryLines[id][x];
            if (this.state.cells[checkPoints[0]] === move && this.state.cells[checkPoints[1]] === move) {
                return player;

            }

        }

    }


    handle = (id) => {

       
        if (this.state.cells[id] || this.state.gameStatus === "won")
            return;
        let newCells = [...this.state.cells];
        newCells[id] = this.state.nextMove;

        let winner = this.victoryCheck(id, this.state.nextMove, this.state.player);
        if (winner === this.state.player) {
            this.setState({ gameStatus: "won" });
        }
        
        data.push({
            srno: this.state.cells.filter(cells => cells != null).length + 1,
            position: id,
            move: this.state.nextMove,
            name: this.state.player

        })
        
        let nextMove = this.state.nextMove === "O" ? "X" : "O";

        let playerSwitch = this.state.player === this.props.player1 ? this.props.player2 : this.props.player1;
        this.setState({ cells: newCells, nextMove: nextMove, player: playerSwitch });

        

    }

    componentWillReceiveProps(nextProps) {
     
        this.setState({ player: nextProps.player1, nextMove:"X"})

    }


    render() {
        
        return (

            <>

                <div style={this.div} onLoad={this.handle}>
                    {this.state.cells.map((value, index) => (<Cell key={index} cellClick={this.handle} value={value} id={index} />))}
                </div >
                <div style={this.turn}>
                    <Status currentPlayer={this.state.player} gameStatus={this.state.gameStatus} />
                    
                </div>
                <Table tdata={data} />
                

                {/* {this.state.player!=""?''} */}
                <div style={{visibility:"hidden"}}>
                <Counter player={this.state.player}/>

                </div>
              

                
            </>
        );

    }

}
export default Board;