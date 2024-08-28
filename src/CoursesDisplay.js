import React, { Component } from "react";
import { CoursesTable } from "./CoursesTable"
import { CoursesEditor } from "./CoursesEditor";

export class CoursesDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    createCourse = () => {
        this.setState({ showEditor: true, selectedCourse: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <CoursesEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <CoursesTable courses={ this.props.courses }
                    editCallback={ this.startEditing }
                     />            
                               
            </div>
        }
    }
}
