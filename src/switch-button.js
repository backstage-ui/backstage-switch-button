import React, { Component } from "react";

export default class SwitchButton extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.props.onChange.bind(this);
  }

  render() {
    return (
      <div className={this.props.className}>
      <label></label>
      <input
      onChange={this.props.onChange}
      checked={this.props.checked}
      name={this.props.name}
      type="checkbox"
      value="1"
      />
      </div>
    )
  }
}

SwitchButton.propTypes = {
  name           : React.PropTypes.string,
  checked        : React.PropTypes.bool,
  onChange       : React.PropTypes.func
}

SwitchButton.defaultProps = {
  name           : 'switch-button',
  checked        : null,
  onChange       : () => {}
}
