// import logo from './logo.svg';
import './App.css';
// import Moves from './components/moves';
import Board from './components/board';
import Table from './components/table';
import Players from './components/players'
import React from 'react'



class App extends React.Component {

 
  constructor(props) {
    super(props);

    this.state = {
      player1: "",
      player2: ""
    }
  }

  render() {

    let setNames = (player1, player2) => {
      if (player1 === "" || player2 === "") {
        alert("Player Name Fields Cannot be Empty");
      } else {
        this.setState({ player1: player1, player2: player2 });
      }
    }

    
    return (
      <div>
      
      <div className="game">
        <Players getNames={setNames} />
        <Board player1={this.state.player1} player2={this.state.player2} />
      </div>
      </div>



      // {/* <div className="moves">
      //   <Moves />
      // </div> */}
      // </>
    );
  }
}

export default App;
