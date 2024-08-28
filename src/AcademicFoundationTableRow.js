import React, { Component } from "react";

export class AcademicFoundationTableRow extends Component {

    render() {
        let f = this.props.foundation;
        return <tr>
            <td>{ f.id }</td>
            <td>{ f.description }</td>
            <td>{ f.semester}</td>
            <td>{ f.prefix }</td>
            <td>{ f.number }</td>
            <td>{ f.grade}</td>
            <td>{f.price} </td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(f) }>
                        Edit
                </button>
                                 
            </td>
        </tr>
    }
}
