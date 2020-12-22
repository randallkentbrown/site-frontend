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
      <SiteFrame/>
    );
  }
}

export default Site;
