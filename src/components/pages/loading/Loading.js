import React from 'react';
import './Loading.css';

class Loading extends React.Component {

    constructor(props) {
        super();
        this.state = { };
    }

    render() {
        return (
            <div className="loading-container">
                Loading up, thanks for waiting...
            </div>
        );
    }

}

export default Loading;