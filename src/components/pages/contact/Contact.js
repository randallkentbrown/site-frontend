import React from 'react';
import './Contact.css';
import text from '../../../util.js';
import contactText from './ContactText.js';

class Contact extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    fullLinkedIn(username) {
        return "https://www.linkedin.com/in/" + username;
    }
    
    fullGitHub(username) {
        return "https://www.github.com/" + username;
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            });
        }
    }

    render() {
        let email = this.state.data.email;
        let cell = this.state.data.cell;
        let linkedIn = this.state.data.linkedIn;
        let github = this.state.data.github;
        return (
            <div className="contact-container">
                <div className="contact-text-container">
                    {text(contactText)}
                </div>
                <br></br>
                <div className="contact-elements-container">
                    <div className="contact-info contact-email">email: {email}</div>
                    <div className="contact-info contact-cell">cell: {cell}</div>
                    <div className="contact-info contact-linkedin">linkedIn: <a href={this.fullLinkedIn(linkedIn)}>/in/{linkedIn}</a></div>
                    <div className="contact-info contact-github">github: <a href={this.fullGitHub(github)}>{github}</a></div>
                </div>
            </div>
        );
    }

}

export default Contact;