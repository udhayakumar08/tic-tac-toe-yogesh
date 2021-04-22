import React from "react";

class Cell extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);


    }

    cell = {
        margin: "0px",
        width: "33.33%",
        height: '33.33%',
        padding: 'auto',
        border: "1px solid black",
        fontSize: "24px"
    }


    render() {


        return (
            <button type="button" style={this.cell} id={this.props.index} onClick={()=>this.props.cellClick(this.props.id)}>{this.props.value}</button>
        );
    }

}


export default Cell;