import React, { Component } from 'react';


class counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            Xtimer:0,
            Otimer:0,
            player:""

        }

    }

   

   

      

    componentDidUpdate(){
       

        this.setState({Xtimer:this.state.Xtimer+1})

    }
       

    
    timerFun=()=>{

        

        // if (this.state.nextMove === 'X') {
        //     let newOtimer = this.state.Otimer;
        //     setInterval(() => {
              
        //         this.setState({ Otimer: newOtimer++ })
        //     }, 1000);
            

        // }
    
        // else if (this.state.nextMove === 'O') {
        //     let newXtimer = this.state.Xtimer;
            
        //     setInterval(() => {
        //         this.setState({ Xtimer: newXtimer++ })
        //     }, 1000);
        // }



    }


    render() {
        return (
            <div onLoad={this.timerFun}>
             <h1>this is h1{this.state.Xtimer}</h1>
                <h1>this is h2{this.state.Otimer}</h1>

            </div>
        );
    }
}



export default counter;