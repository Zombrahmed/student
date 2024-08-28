import React, { Component } from "react";
import { DistributiveTableRow } from "./DistributiveTableRow";

export class DistributiveTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    
                    <th colSpan="8" 
                                className="bg-primary text-white text-center h2 p-4">
                            Distributive Requirement
                        </th>
                        <tr>
                        <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th>
                        <th>Number</th><th>Grade</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.distributives.map(d => 
                            <DistributiveTableRow distributive={ d } 
                                key={ d.id }
                                editCallback={ this.props.editCallback }
                                />)
                    }
                </tbody>
            </table>        
    }
}
