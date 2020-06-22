import React from 'react';
import './PageView.css';

class PageSelector extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 1,
            pages: [{
                number: 1,
                title: "About",
                pageData: <div></div>
            }]
        }
        this.switchToPage.bind(this);
    }

    switchToPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        const page = this.state.page;
        const currentPage = this.state.pages[page];
        const title = currentPage.title;
        const pageData = currentPage.pageData;
        return (
            <div className="page-selector">
                
            </div>
        );
    }

}
