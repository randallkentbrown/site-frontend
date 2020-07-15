import React from 'react';
import getPages from '../../service/pages.js';
import './SiteFrame.css';
import PageView from '../page-view/PageView.js';

class SiteFrame extends React.Component {

    constructor() {
        super();
        this.state = {
            pages: [],
            text: null
        }
    }

    componentDidMount() {
        getPages().then(data => {
            this.setState({
                pages: data
            });
        });
    }

    render() {
        return (
            <div className="site-frame">
                <PageView pages={this.state.pages}/>
            </div>
        );
    }
}

export default SiteFrame;