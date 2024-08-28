import React, { Component } from "react";
import { CoursesTableRow } from "./CoursesTableRow";

export class CoursesTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered p-4">
                <thead>
                    
                        <th colSpan="8" 
                                className="bg-primary text-white text-center h2 p-4">
                            Additional Requirement
                        </th>
                    
                    <tr>
                        <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th>
                        <th>Number</th><th>Grade</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.courses.map(c => 
                            <CoursesTableRow course={ c } 
                                key={ c.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback }
                                 />)
                    }
                </tbody>
            </table>        
    }
}
