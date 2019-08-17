"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSeatmap = _interopRequireDefault(require("react-seatmap"));

require("../../style/main.scss");

var _seatData = _interopRequireDefault(require("../../seatData"));

var _Ticket = _interopRequireDefault(require("../Ticket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Booking =
/*#__PURE__*/
function (_Component) {
  _inherits(Booking, _Component);

  function Booking(props) {
    var _this;

    _classCallCheck(this, Booking);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Booking).call(this, props));
    _this.state = {
      row: null,
      number: null,
      data: [],
      selected: null
    };
    _this.addSeatCallback = _this.addSeatCallback.bind(_assertThisInitialized(_this));
    _this.removeSeatCallback = _this.removeSeatCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Booking, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //load data
      var data = this.formatSeatData(_seatData.default);
      this.setState({
        data: data
      });
    }
  }, {
    key: "getIndexFromLetter",
    value: function getIndexFromLetter(letter) {
      return letter.charCodeAt(0) - 65;
    }
  }, {
    key: "formatSeatData",
    value: function formatSeatData(seats) {
      var _this2 = this;

      var rows = [];
      seats.seats.map(function (seat, i) {
        var arr = seat.seatNumber.split(/([0-9]+)/).filter(Boolean);
        seat.number = arr[0];
        seat.isReserved = !seat.available;

        var index = _this2.getIndexFromLetter(arr[1]);

        if (typeof rows[index] === 'undefined') {
          rows[index] = [];
        }

        rows[index].push(seat);
        return true;
      });
      return rows;
    }
  }, {
    key: "addSeatCallback",
    value: function addSeatCallback(row, number) {
      var data = this.state.data;
      console.log(row, number);
      var index = this.getIndexFromLetter(row);
      console.log(data[index][number - 1]);
      this.setState({
        row: row,
        number: number,
        selected: data[index][number - 1]
      });
    }
  }, {
    key: "removeSeatCallback",
    value: function removeSeatCallback(row, number) {
      console.log(row, number);
      this.setState({
        row: null,
        number: null,
        selected: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          selected = _this$state.selected;
      console.log(selected);

      if (Object.keys(data).length > 0) {
        return _react.default.createElement("div", {
          className: "container-fluid text-center"
        }, _react.default.createElement("div", {
          className: "",
          style: {
            float: 'left',
            padding: '10px',
            marginTop: '10px'
          }
        }, _react.default.createElement(_reactSeatmap.default, {
          rows: data,
          maxReservableSeats: 1,
          alpha: true,
          addSeatCallback: this.addSeatCallback,
          removeSeatCallback: this.removeSeatCallback
        })), _react.default.createElement("div", {
          className: "",
          style: {
            float: 'left',
            padding: '10px'
          }
        }, _react.default.createElement(_Ticket.default, {
          selected: selected
        })));
      }

      return null;
    }
  }]);

  return Booking;
}(_react.Component);

var _default = Booking;
exports.default = _default;