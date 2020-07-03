import React from 'react';
import './PageSelector.css';

class PageSelector extends React.Component {

    constructor(props) {
        super();
        this.state = {
            pages: props.pages
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.pages !== prevProps.pages) {
            this.setState({
                pages: this.props.pages
            });
        }
    }

    createButton(number, title, icon) {
        return (
            <div className="page-button" onClick={() => this.props.switcher(number)}>
                {title}
            </div>
        );
    }

    buttons() {
        return this.state.pages.map(page => {
            return this.createButton(page.number, page.title, null);
        });
    }

    render() {
        return (
            <div className="button-container">
                <div className="page-button-padding"/>
                {this.buttons()}
                <div className="page-button-padding"/>
            </div>
        );
    }

}

export default PageSelector;