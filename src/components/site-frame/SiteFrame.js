import React from 'react';
import data from '../../data/DummySiteData.js';
import './SiteFrame.css';
import PageView from '../page-view/PageView.js';

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
                <PageView/>
            </div>
        );
    }
}

export default SiteFrame;