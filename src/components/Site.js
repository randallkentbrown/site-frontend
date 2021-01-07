import React from 'react';
import SiteFrame from './site-frame/SiteFrame';
import './Site.css';

class Site extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  };

  render() {
    return (
      <div className="site">
        <div className="site-padding"></div>
        <SiteFrame/>
        <div className="site-padding"></div>
      </div>
    );
  }
}

export default Site;
