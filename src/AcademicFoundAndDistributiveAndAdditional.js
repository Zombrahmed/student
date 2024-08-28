import React, { Component } from 'react';
import { Selector } from './Selector';
import { AcademicFoundationDisplay } from './AcademicFoundationDisplay';
import { DistributiveDisplay } from './DistributiveDisplay';
import { CoursesDisplay } from './CoursesDisplay';
export default class AcademicFoundAndDistributiveAndAdditional extends Component {

    constructor(props) {
        super(props);
        this.state = {

            foundations: [
        { id: 1, description: "First Year Experience", semester: " ",prefix:"FYE", number:"",grade:"", price:"" },
        { id: 2, description: "English Composition I", semester: "",prefix:"WRT", number:" ",grade:"", price: "" },
        { id: 3, description: "English Composition II", semester: "",prefix:"WRT", number:"200",grade:"", price: "" },
        { id: 4, description: "Mathemathics", semester: " ",prefix:"Math", number:"151",grade:"", price:"" },
        { id: 5, description: "Interdisplinary", semester: "",prefix:"", number:" ",grade:"", price: "" },
        { id: 6, description: "Diverse Communities", semester: "",prefix:"", number:"",grade:"", price: "" }
            ],
            distributives: [

        { id: 1, description: "Science I", semester: " ",prefix:"", number:"",grade:"", price: "" },
        { id: 2, description: "ScienceII", semester: "",prefix:"", number:" ",grade:"", price: "" },    
        { id: 3, description: "Behaviol and social Sciences I", semester: " ",prefix:"T", number:"",grade:"", price: "" },
        { id: 4, description: "Behaviol and social Sciences II", semester: "",prefix:"", number:" ",grade:"", price: "" },
        { id: 5, description: "Humanities I", semester: "",prefix:"", number:"",grade:"", price: "" },
        { id: 6, description: "Humanities II", semester: " ",prefix:"", number:"",grade:"", price: "" },
        { id: 7, description: "Art", semester: "",prefix:"", number:" ",grade:"", price: "" },
        
            ],

            courses: [
        { id: 1, description: "Writing Emphasis I", semester: " ",prefix:"ENG", number:"",grade:"", price: "" },
        { id: 2, description: "Writing Emphasis II", semester: "",prefix:"WRT", number:" ",grade:"", price: "" },
        { id: 3, description: "Writing Emphasis III", semester: "",prefix:"WRT", number:"",grade:"", price: "" },
        { id: 4, description: "Speaking Emphasis I", semester: " ",prefix:"SPK", number:"",grade:"", price: "" },
        { id: 5, description: "Speaking Emphasis II", semester: "",prefix:"", number:" ",grade:"", price: "" },
        { id: 6, description: "Speaking Emphasis III", semester: "",prefix:"SPK", number:"",grade:"", price: "" }
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        return <div>
            <Selector>
                <AcademicFoundationDisplay 
                    name="Academic Foundation"
                    foundations={ this.state.foundations }
                    saveCallback={ f => this.saveData("foundations", f) }
                    deleteCallback={ f => this.deleteData("foundation", f) } />
                <DistributiveDisplay
                    name="Distributive Requirement"
                    distributives={ this.state.distributives }
                    saveCallback={ d => this.saveData("distributives", d) }
                    deleteCallback={ d => this.deleteData("distributives", d) } />
                    
                    <CoursesDisplay 
                    name="Additional Requirement"
                    courses={ this.state.courses }
                    saveCallback={ c => this.saveData("courses", c) }
                    deleteCallback={ c => this.deleteData("courses", c) } />
            </Selector>
        </div>
    }
}
/**
 * <CoursesDisplay
                    name="Courses"
                    courses={ this.state.courses }
                    saveCallback={ c => this.saveData("courses", c) }
                    deleteCallback={ c => this.deleteData("courses", c) } />
 * 
 */