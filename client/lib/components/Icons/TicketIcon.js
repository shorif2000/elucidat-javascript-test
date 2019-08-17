"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TicketIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(TicketIcon, _Component);

  function TicketIcon() {
    _classCallCheck(this, TicketIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(TicketIcon).apply(this, arguments));
  }

  _createClass(TicketIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          seatNumber = _this$props.seatNumber,
          price = _this$props.price,
          available = _this$props.available;
      return _react.default.createElement("svg", {
        version: "1.1",
        x: "0px",
        y: "0px",
        width: width + "px",
        viewBox: "0 0 512 512",
        style: {
          enableBackground: "new 0 150 512 352",
          marginTop: '-152px'
        }
      }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "187.968",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "211.98",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "235.993",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "260.005",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "284.007",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "408.191",
        y: "308.02",
        width: "15.77",
        height: "16.008"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M0,156.072v199.856h512V156.072H0z M496.23,340.157h-72.271v-8.123h-15.77v8.123H15.77V171.842h392.419v8.123h15.77 v-8.123h72.271V340.157z"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "39.899",
        y: "188.083",
        width: "176.078",
        height: "15.77"
      }), _react.default.createElement("text", {
        x: "39.899",
        y: "200.083",
        fontFamily: "Verdana",
        fontSize: "10",
        fill: "white"
      }, "Seat: ", seatNumber))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "39.899",
        y: "220.096",
        width: "176.078",
        height: "15.77"
      }), _react.default.createElement("text", {
        x: "39.899",
        y: "232.096",
        fontFamily: "Verdana",
        fontSize: "10",
        fill: "white"
      }, available ? "Available" : ""))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "39.899",
        y: "252.12",
        width: "80.038",
        height: "15.77"
      }), _react.default.createElement("text", {
        x: "39.899",
        y: "264.12",
        fontFamily: "Verdana",
        fontSize: "10",
        fill: "white"
      }, "Price: ", price))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "39.899",
        y: "300.135",
        width: "16.009",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "71.911",
        y: "300.135",
        width: "16.008",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "103.924",
        y: "300.135",
        width: "16.009",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "135.948",
        y: "300.135",
        width: "16.008",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "167.961",
        y: "300.135",
        width: "16.009",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "199.974",
        y: "300.135",
        width: "16.008",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "440.089",
        y: "188.083",
        width: "40.014",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "440.089",
        y: "220.096",
        width: "40.014",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "440.089",
        y: "252.12",
        width: "24.011",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "135.948",
        y: "252.12",
        width: "32.014",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "247.999",
        y: "300.135",
        width: "64.029",
        height: "15.77"
      }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
        x: "328.037",
        y: "300.135",
        width: "64.029",
        height: "15.77"
      }))), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null), _react.default.createElement("g", null));
    }
  }]);

  return TicketIcon;
}(_react.Component);

TicketIcon.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  seatNumber: _propTypes.default.string.isRequired,
  price: _propTypes.default.string.isRequired,
  available: _propTypes.default.bool.isRequired
};
TicketIcon.defaultProps = {
  width: "200",
  height: "200"
};
var _default = TicketIcon;
exports.default = _default;