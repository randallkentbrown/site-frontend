import React from 'react';
import './PageView.css';
import PageSelector from '../page-selector/PageSelector.js';
import Loading from './../pages/loading/Loading.js'
import Construction from './../pages/construction/Construction.js';
import Home from '../pages/home/Home.js';
import Resume from './../pages/resume/Resume.js';
import Contact from './../pages/contact/Contact.js';

class PageView extends React.Component {

    constructor() { 
        super();
        this.state = {
            page: 0,
            pages: [ ],
            loaded: false
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
                pages: this.props.pages,
                loaded: true
            });
        }
    }

    pageScaffold() {
        const page = this.state.page;
        var currentPage = this.state.pages[page];
        if (this.state.loaded === false) {
                return <Loading/>;
        } else if (currentPage !== undefined) {
            return this.choosePage(currentPage);
        }
    }

    choosePage(currentPage) {
        if (currentPage.title === "home") {
            return <Home data={currentPage.data}/>;
        } else if (currentPage.title === "resume") {
            return <Resume data={currentPage.data}/>;
        } else if (currentPage.title === "contact") {
            return <Contact data={currentPage.data}/>
        } else {
            return <Construction/>;
        }
    }

    render() {
        return (
            <div className="page-view buffered">
                <PageSelector switcher={this.switchToPage.bind(this)} pages={this.state.pages}/>
                <div className="view-divider buffered"></div>
                <div className="page-viewport">
                    {this.pageScaffold()}
                </div>
            </div>
        );
    }

}

export default PageView;