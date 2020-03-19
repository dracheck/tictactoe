import React from 'react'

export default class Row extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={`${this.props.rownumber}`} onClick={this.props.handleClick} className='row'>
        <div id={`${this.props.rownumber} 0`} datarow={this.props.rownumber} datacell='0' className='cell'>
        </div>
        <div id={`${this.props.rownumber} 1`} className='cell'>
        </div>
        <div id={`${this.props.rownumber} 2`} className='cell'>
        </div>
      </div>

    )
  }

}