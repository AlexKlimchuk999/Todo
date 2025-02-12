import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {


  state = {
    label: ''
  }

  onLabelChange = (e) => {
    const newLabel = e.target.value;
      this.setState({
        label: newLabel
      })

      this.props.onSearchItem(newLabel);
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onLabelChange} 
        value={this.state.label}
        />
    );
  }

};
