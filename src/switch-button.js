import React, { Component } from 'react';
import styles from './switch-button.css';

export default class SwitchButton extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false, checked: props.checked };
    this.onClick = this.onClick.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  onClick() {
    this.setState({ checked: !this.state.checked });
    this.props.onChange();
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    let backgroundStyle = styles.background;
    let buttonStyle = styles.button;

    if (this.state.checked) {
      buttonStyle = Object.assign({}, buttonStyle, styles.buttonChecked);
      if (this.state.hover) {
        backgroundStyle = Object.assign({}, backgroundStyle, styles.backgroundHoverAndChecked);
      } else {
        backgroundStyle = Object.assign({}, backgroundStyle, styles.backgroundChecked);
      }
    } else if (this.state.hover) {
      backgroundStyle = Object.assign({}, backgroundStyle, styles.backgroundHover);
    }

    return (
      <div className={this.props.className} style={styles.container}>
        <input
          style={styles.checkbox}
          id="backstage-switch-button"
          onChange={this.onChange}
          checked={this.state.checked}
          name={this.props.name}
          type="checkbox"
          value={this.props.value}
        />
        <div
          style={backgroundStyle}
          onClick={this.onClick}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          <div style={buttonStyle} />
        </div>
        <label style={styles.label} htmlFor="backstage-switch-button">
          {this.props.label}
        </label>
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
  value: React.PropTypes.string,
  style: React.PropTypes.object,
};

SwitchButton.defaultProps = {
  name: 'switch-button',
  label: '',
  value: 'true',
  checked: null,
  onChange: () => {},
  style: {},
};
