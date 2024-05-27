import React from 'react';
import getPages from '../../service/pages.js';
import getResumeURI from '../../service/resume_uri.js';
import './SiteFrame.css';
import PageView from '../page-view/PageView.js';
import { connect } from 'react-redux';
import { setResumeURI } from '../../redux/actions';

class SiteFrame extends React.Component {

    constructor() {
        super();
        this.state = {
            pages: [],
            text: null
        }
    }

    componentDidMount() {
        this.loadData();
    };

    loadData() {
        getPages().then(data => {
            this.setState({
                pages: data
            });
        });
        getResumeURI().then(data => {
            this.props.setResumeURI(data);
        });
    };

    render() {
        return (
            <div className="site-frame">
                <PageView pages={this.state.pages}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setResumeURI: (resumeURI) => { dispatch(setResumeURI(resumeURI)); }
    }
};
  
export default connect(null, mapDispatchToProps)(SiteFrame);