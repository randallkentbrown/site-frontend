import React from 'react';
import './PageView.css';
import PageSelector from '../page-selector/PageSelector.js';
import data from '../../data/DummySiteData.js';

class PageView extends React.Component {

    constructor() { 
        super();
        this.state = {
            page: 1,
            pages: data
        }
    }

    switchToPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        const page = this.state.page;
        console.log(page);
        const currentPage = this.state.pages[page - 1];
        console.log(currentPage);
        return (
            <div className="page-view">
                <PageSelector switcher={this.switchToPage.bind(this)} pages={this.state.pages}/>
                <div className="view-number">Page {currentPage.number}</div>
                <div className="view-title">* {currentPage.title} *</div>
            </div>
        );
    }

}

export default PageView;