import React from 'react';
import './Fallblock.css';

class Fallblock extends React.Component {

  /* Props:
   * page - a page (.id, .title, .shortTitle)
   */
  constructor(props) {
    super();
    const page = props.page;
    const text = props.text;
    let id = 0;
    this.state = {
      id: page.id || id++,
      title: page.tite || "Untitled",
      shortTitle: page.shortTitle || "N/A",
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
