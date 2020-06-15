import React from 'react';
import SiteFrame from './site/SiteFrame';
import './Site.css';

function Site() {
  return (
    <div className="site">
      <div className="site-padding"/>
      <div className="site-row">
        <div className="site-padding"/>
        <SiteFrame/>
        <div className="site-padding"/>
      </div>
      <div className="site-padding"/>
    </div>
  );
}

export default Site;
