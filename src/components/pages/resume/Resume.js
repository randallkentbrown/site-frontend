import React from 'react';
import './Resume.css';
import ResumeButton from './resume-components/ResumeButton.js';
import { connect } from 'react-redux';
import text from '../../../util.js';
import resumeText from './ResumeText.js';

class Resume extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <div className="resume-container">
                <div className="digital-resume-container">
                    {text(resumeText)}
                </div>
                <br/>
                <ResumeButton text={`Click here to download Kent's official, well-manicured, information-dense resume!`} link={this.props.resumeURI}></ResumeButton>
            </div>
        );
    }

}

const mapStateToProps = state => {
    const resumeURI = state.resumeURI;
    return { resumeURI: resumeURI };
}

export default connect(mapStateToProps)(Resume);