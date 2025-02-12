import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {


  getStatus = (status) => {
    this.props.onStatusFilter(status)
  }
  buttons = [
    {name:'all', label:'All'},
    {name:'active', label:'Active'},
    {name:'done', label:'Done'}
  ]


  render() {
    const {filter,onFilterItem} = this.props;

    const buttons = this.buttons.map(({name, label}) =>{
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterItem(name)}
        >{label}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
