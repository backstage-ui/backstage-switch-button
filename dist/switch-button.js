'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _switchButton = require('./switch-button.css');

var _switchButton2 = _interopRequireDefault(_switchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchButton = function (_Component) {
  _inherits(SwitchButton, _Component);

  function SwitchButton(props) {
    _classCallCheck(this, SwitchButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchButton).call(this, props));

    _this.state = { hover: false, checked: props.checked };
    _this.onClick = _this.onClick.bind(_this);
    _this.mouseOver = _this.mouseOver.bind(_this);
    _this.mouseOut = _this.mouseOut.bind(_this);
    return _this;
  }

  _createClass(SwitchButton, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ checked: !this.state.checked });
      this.props.onChange();
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      this.setState({ hover: true });
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      this.setState({ hover: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var backgroundStyle = _switchButton2.default.background;
      var buttonStyle = _switchButton2.default.button;

      if (this.state.checked) {
        buttonStyle = Object.assign({}, buttonStyle, _switchButton2.default.buttonChecked);
        if (this.state.hover) {
          backgroundStyle = Object.assign({}, backgroundStyle, _switchButton2.default.backgroundHoverAndChecked);
        } else {
          backgroundStyle = Object.assign({}, backgroundStyle, _switchButton2.default.backgroundChecked);
        }
      } else if (this.state.hover) {
        backgroundStyle = Object.assign({}, backgroundStyle, _switchButton2.default.backgroundHover);
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: _switchButton2.default.container },
        _react2.default.createElement('input', {
          style: _switchButton2.default.checkbox,
          id: 'backstage-switch-button',
          onChange: this.onChange,
          checked: this.state.checked,
          name: this.props.name,
          type: 'checkbox',
          value: this.props.value
        }),
        _react2.default.createElement(
          'div',
          {
            style: backgroundStyle,
            onClick: this.onClick,
            onMouseOver: this.mouseOver,
            onMouseOut: this.mouseOut
          },
          _react2.default.createElement('div', { style: buttonStyle })
        ),
        _react2.default.createElement(
          'label',
          { style: _switchButton2.default.label, htmlFor: 'backstage-switch-button' },
          this.props.label
        )
      );
    }
  }]);

  return SwitchButton;
}(_react.Component);

exports.default = SwitchButton;


SwitchButton.propTypes = {
  className: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object
};

SwitchButton.defaultProps = {
  name: 'switch-button',
  label: '',
  value: 'true',
  checked: null,
  onChange: function onChange() {},
  style: {}
};