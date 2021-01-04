import React from 'react';
import './Home.css';
import text from '../../../util.js';
import homeText from './HomeText.js';

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            });
        }
    }

    renderHobbies(obj) {
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
        return (
            <div className="home-container">
                {text(homeText({
                    ...this.state.data,
                    hobbies: this.renderHobbies(this.state.data.hobbies)
                }))}
            </div>
        );
    }

}

export default Home;