import React, { Component } from "react";
import { AcademicFoundationTable } from "./AcademicFoundationTable"
import { AcademicFoundationEditor } from "./AcademicFoundationEditor";

export class AcademicFoundationDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedFoundation: null
        }
    }

    startEditing = (foundation) => {
        this.setState({ showEditor: true, selectedFoundation: foundation })
    }

    createFoundation = () => {
        this.setState({ showEditor: true, selectedFoundation: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedFoundation: null })
    }

    saveFoundation = (foundation) => {
        this.props.saveCallback(foundation);
        this.setState({ showEditor: false, selectedFoundation: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <AcademicFoundationEditor 
                key={ this.state.selectedFoundation.id || -1 }
                foundation={ this.state.selectedFoundation } 
                saveCallback={ this.saveFoundation }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AcademicFoundationTable foundations={ this.props.foundations }
                    editCallback={ this.startEditing }
                   />            
                                  
            </div>
        }
    }
}
