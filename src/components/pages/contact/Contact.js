import React from 'react';
import './Contact.css';
import text from '../../../util.js';
import contactText from './ContactText.js';
import ContactItem from './components/ContactItem.js';

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
                    {text(contactText[0])}
                </div>
                <br></br>
                <div className="contact-elements-container">
                    <ContactItem type="email" text={email}></ContactItem>
                    <ContactItem type="cell" text={cell}></ContactItem>
                    <ContactItem type="linkedIn" text={"/in/" + linkedIn} href={this.fullLinkedIn(linkedIn)}></ContactItem>
                    <ContactItem type="github" text={github} href={this.fullGitHub(github)}></ContactItem>
                </div>
                <br></br>
                <div className="contact-text-container">
                    {text(contactText[1])}
                </div>
            </div>
        );
    }

}

export default Contact;