import React from 'react';
import './PageSelector.css';

class PageSelector extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selected: 1,
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

    switcher(number) {
        this.setState({
            selected: number
        });
        this.props.switcher(number);
    }

    createButton(number, title, icon) {
        return (
            <div key={number} className={number === this.state.selected ? "page-button-selected" :"page-button"} onClick={() => {this.switcher(number);}}>
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