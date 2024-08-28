import React, { Component } from "react";
import { DistributiveEditor } from "./DistributiveEditor";
import { DistributiveTable } from "./DistributiveTable";

export class DistributiveDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selected: null
        }
    }

    startEditing = (distributive) => {
        this.setState({ showEditor: true, selected: distributive })
    }

    createDistributive = () => {
        this.setState({ showEditor: true, selected: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selected: null })
    }

    saveDistributive= (distributive) => {
        this.props.saveCallback(distributive);
        this.setState({ showEditor: false, selected: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <DistributiveEditor
                key={ this.state.selected.id || -1 }
                distributive={ this.state.selected } 
                saveCallback={ this.saveDistributive }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <DistributiveTable distributives={ this.props.distributives }
                        editCallback={ this.startEditing }
                        
                    />
                                         
            </div>        
        }
    }
}
