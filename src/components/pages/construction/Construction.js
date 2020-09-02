import React from 'react';
import './Construction.css';
import construction from './../../../img/construction.png';

class Construction extends React.Component {

    constructor(props) {
        super();
        this.state = { };
    }

    render() {
        return (
            <div className="construction-container">
                This page is under construction. Check back later!
                <div className="icon-container">
                    <img className="construction-icon" src={construction} alt="A cute construction icon"></img>
                </div>
            </div>
        );
    }

}

export default Construction;