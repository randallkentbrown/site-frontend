import React from 'react';
import './About.css';

class About extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    renderKeys(obj) {
        const values = Object.values(obj);
        let renderedString = values[0].toString();
        values.forEach(value => {
            if (value === values[values.length - 1]) {
                renderedString += ", and " + value.toString();
            } else if (value !== values[0]) {
                renderedString += ", " + value.toString();
            }
        });
        return renderedString;
    }

    render() {
        const data = this.state.data;
        return (
            <div className="about-container">
                You found {data.sName}'s personal site! {data.name} is a fifth-year Software Engineering undergraduate at the Rochester Institute of Technology. {data.sName} currently lives in {data.basedIn} with his lovely roommates. His hobbies include {this.renderKeys(data.hobbies)}, though he's not particularly good at any of them.
            </div>
        );
    }

}

export default About;