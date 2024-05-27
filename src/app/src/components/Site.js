import React from 'react';

// Old Imports - TODO: Remove!
import SiteFrame from './site-frame/SiteFrame';

// Real Imports
import Waterfall from './waterfall/Waterfall';
import './Site.css';

// Backend access
import RouterService from '../service/routerService';

class Site extends React.Component {

  // Constructor
  constructor() {

    super();

    const routerService = new RouterService();
    const title = "Kent Brown's Website";

    this.state = {
      title: title,
      pages: [],
      routerService: routerService
    }

  };

  componentDidMount() {

    // load page data from the router service
    const newPages = []; // this.state.routerService.pages(); when backend is updated

    // enter newly loaded pages
    this.setState({
      pages: newPages
    });

  }

  // new site; runs in development
  home() {

    const pages = this.state.pages;

    return (
      <div>
        <h1>{this.state.title}</h1>
        <Waterfall pages={pages} archives={null}/>
        <div class="footer"></div>
      </div>
    )
  }

  // Old website; retired in development as of 6pm 9/18/2022
  old() {
    return ( 
      <div className="site">
        <div className="site-padding"></div>
        <SiteFrame/>
        <div className="site-padding"></div>
      </div>
    );
  }

  // Render
  render() {
    return (
      <div className="site">
        {this.home()}
      </div>
    );
  }
}

export default Site;
