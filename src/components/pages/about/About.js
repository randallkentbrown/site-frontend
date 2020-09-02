import React from 'react';
import './About.css';

class About extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    render() {
        const data = this.state.data;
        return (
            <div className="about-container">
                You found {data.sName}'s personal site! {data.name} is a fifth-year Software Engineering undergraduate at the Rochester Institute of Technology. {data.sName} currently lives in {data.basedIn} with his lovely roommates.
            </div>
        );
    }

}

export default About;