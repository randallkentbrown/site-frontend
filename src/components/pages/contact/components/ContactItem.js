import React from 'react';
import './ContactItem.css';

class ContactItem extends React.Component {

    constructor(props) {
        super();
        let type = props.type;
        let text = props.text;
        let href = props.href;
        this.state = {
            type: type,
            text: text,
            href: href
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                type: this.props.type,
                text: this.props.text,
                href: this.props.href
            });
        }
    }

    contactText() {
        if (this.state.href !== undefined) {
            return <a className="contact-text" href={this.state.href}>{this.state.text}</a>
        } else {
            return <div className="contact-text">{this.state.text}</div>
        }
    }

    render() {
        return (
            <div className="contact-info">
                <div className="contact-type">{this.state.type}:</div>
                <div className="contact-buffer"></div>
                {this.contactText()}
            </div>
        );
    };

}

export default ContactItem;