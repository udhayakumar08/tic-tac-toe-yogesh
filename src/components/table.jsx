import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);

        // let states = {
        //     columns : 3
        // }
    }

    style = {
        // margin : "auto",
        borderCollapse:"collapse",
        border : "1px solid black",
        width:"300px",
       
        
    }

    tableHeader = () => {
        
    }

    render() {
        this.tableHeader();
        return(
        <table style={this.style} className="myTable">
            <tr>
                <td style={this.style}>S No.</td>
                <td style={this.style}>playerName</td>
                <td style={this.style}>Position</td>
                <td style={this.style}>move</td>
            </tr>
        {this.props.tdata.map(row=>{
            return (
                <tr>
                <td style={this.style}>{row.srno}</td>
                <td style={this.style}>{row.name}</td>
                <td style={this.style}>{row.position}</td>
                <td style={this.style}>{row.move}</td>
                
            </tr>
            );
        })
            
        }
            </table>
        );
    }

}

export default Table;