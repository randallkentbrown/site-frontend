import React from 'react';
import './Fallblock.css';

class Fallblock extends React.Component {

  /* Props:
   * page - a page (.id, .title, .shortTitle)
   */
  constructor() {
    super();
    const page = this.props.page;
    const text = this.props.text;
    let id = 0;
    this.state = {
      id: page.id || id++,
      title: page || "Untitled",
      shortTitle: page || "N/A",
      text: text || "[REDACTED]",
    }
  };

  render() {
    const id = this.state.id;
    const title = this.state.title;
    const text = this.state.text;
    return (
      <div className="fallblock">
        <h1>{title}</h1>
        <div className="id-dim">{id.toString()}</div>
        <div className="block-content">{text}</div>
      </div>
    );
  }
}

export default Fallblock;
