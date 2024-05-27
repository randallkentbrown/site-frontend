import React from 'react';
import './ResumeButton.css';

class ResumeButton extends React.Component {

    constructor(props) {
        super();
        this.state = {
            text: props.text,
            link: props.link
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.pages !== prevProps.pages) {
            this.setState({
                text: this.props.text,
                link: this.props.link
            });
        }
    }

    render() {
        const href = this.state.link;
        const text = this.state.text;
        return (
            <div className="resume-download-container">
                <div className="resume-download-button">
                    <a href={href}>{text}</a>
                </div>
            </div>
        );
    }

}

export default ResumeButton;