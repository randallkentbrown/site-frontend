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

    aboutText() {
        const data = this.state.data;
        let pageString = "";
        let lines = [
            `You've found ${data.name}'s personal site!`,
            `I'm a fifth-year Software Engineering undergrad at Rochester Institute of Technology.`,
            `I'm currently living in the Rochester area with my lovely roommates, planning to start my final semester in the spring.`,
            `I spend my time ${this.renderKeys(data.hobbies)}, though none particularly well.`
        ]
        lines.forEach(line => {
            pageString = pageString + line + `\r\n`;
        });
        return pageString.trim();
    }

    render() {
        return (
            <div className="about-container">
                {this.aboutText()}
            </div>
        );
    }

}

export default About;