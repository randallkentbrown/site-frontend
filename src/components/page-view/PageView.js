import React from 'react';
import './PageView.css';
import PageSelector from '../page-selector/PageSelector.js';

class PageView extends React.Component {

    constructor() { 
        super();
        this.state = {
            page: 1,
            pages: []
        }
    }

    switchToPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    componentDidMount() {
        this.setState({
            pages: this.props.pages
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.pages !== prevProps.pages) {
            this.setState({
                pages: this.props.pages
            });
        }
    }

    render() {
        const page = this.state.page;
        var currentPage = this.state.pages[page - 1];
        if (currentPage === undefined) {
            currentPage = { number: 1, title: "None" }
        }
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