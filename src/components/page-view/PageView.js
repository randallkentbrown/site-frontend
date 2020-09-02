import React from 'react';
import './PageView.css';
import PageSelector from '../page-selector/PageSelector.js';
import About from './../pages/about/About.js';
import Construction from './../pages/construction/Construction.js';

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

    choosePage() {
        const page = this.state.page;
        var currentPage = this.state.pages[page - 1];
        if (currentPage !== undefined && currentPage.title === "about") {
            return <About data={currentPage.data}/>;
        } else {
            return <Construction/>;
        }
    }

    render() {
        return (
            <div className="page-view">
                <PageSelector switcher={this.switchToPage.bind(this)} pages={this.state.pages}/>
                <div className="page-viewport">
                    {this.choosePage()}
                </div>
            </div>
        );
    }

}

export default PageView;