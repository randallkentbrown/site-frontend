import React from 'react';
import data from '../../data/DummySiteData.js';
import './SiteFrame.css';

class SiteFrame extends React.Component {

    constructor() {
        super();
        this.state = {
            text: null
        }
    }

    componentDidMount() {
        this.setState(data);
    }

    render() {
        return (
            <div className="site-frame">
                {this.state.text}
            </div>
        );
    }
}

export default SiteFrame;