import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);

        // let states = {
        //     columns : 3
        // }
    }

    table = {
        margin : "auto",
        border : "1px solid black"
    }

    tableHeader = () => {
        
    }

    render() {
        this.tableHeader();
        return(
        <table style={this.style} className="myTable">
            <th>
                <td>S No.</td>
                <td>playerName</td>
                <td>Position</td>
                <td>move</td>
            </th>
        {this.props.tdata.map(row=>{
            return (
                <tr>
                <td>{row.srno}</td>
                <td>{row.name}</td>
                <td>{row.position}</td>
                <td>{row.move}</td>
                
            </tr>
            );
        })
            
        }
            </table>
        );
    }

}

export default Table;