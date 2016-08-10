import React, { Component } from 'react';
import style from './switch-button.css';

export default class SwitchButton extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.props.onChange.bind(this);
  }

  render() {
    return (
      <div className={this.props.className} style={style}>
        <label htmlFor="backstage-switch-button">{this.props.label}</label>
        <input
          id="backstage-switch-button"
          onChange={this.props.onChange}
          checked={this.props.checked}
          name={this.props.name}
          type="checkbox"
          value="1"
        />
      </div>
    );
  }
}

SwitchButton.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

SwitchButton.defaultProps = {
  name: 'switch-button',
  label: '',
  checked: null,
  onChange: () => {},
};
