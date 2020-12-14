import React from 'react';
import './Resume.css';
import ResumeButton from './resume-components/ResumeButton.js';

class Resume extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data
        }
    }

    resumeText() {
        let pageString = "";
        let lines = [
            `I've been programming for fun since before I knew what "software" or "engineering" were.`,
            `You can imagine that at the time, none of my work was very good.`,
            `I really began to teach myself to code after starting high school, and in sophomore year I had my first actual programming class.`,
            `For the rest of high school I helped my classmates with their coding work, but I wouldn't get another formal programming class until I started at RIT.`
        ]
        lines.forEach(line => {
            pageString = pageString + line + `\r\n`;
        });
        return pageString.trim();
    }

    render() {
        const text = `Click here to download Kent's official, well-manicured, information-dense resume!`;
        const link = `https://rkb-resume-bucket.s3.amazonaws.com/randallkentbrown-resume-current.pdf`;
        return (
            <div className="resume-container">
                <ResumeButton text={text} link={link}></ResumeButton>
                <div className="digital-resume-container">
                    {this.resumeText()}
                </div>
            </div>
        );
    }

}

export default Resume;