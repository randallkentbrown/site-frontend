import React from 'react';
import './Home.css';

class Home extends React.Component {

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

    text() {
        const data = this.state.data;
        let pageString = "";
        let lines = [
            `Hey there! I'm ${data.name}. Welcome to my personal site!`,
            `I'm a fifth-year Software Engineering undergrad at Rochester Institute of Technology.`,
            `I'm currently living in the Rochester area with my lovely roommates, planning to start my final semester in the spring.`,
            `I spend my free time ${this.renderKeys(data.hobbies)}, in no particular order.`
        ]
        lines.forEach(line => {
            pageString = pageString + line + `\r\n`;
        });
        return pageString.trim();
    }

    render() {
        return (
            <div className="home-container">
                {this.text()}
            </div>
        );
    }

}

export default Home;