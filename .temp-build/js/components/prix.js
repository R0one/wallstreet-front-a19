"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prix = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//refer to variables managed by external css
var textGreen = {
  color: 'var(--price-green)'
};
var textRed = {
  color: 'var(--price-red)'
};
var textWhite = {
  color: 'var(--price-white)'
};

var Prix =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prix, _React$Component);

  function Prix(props) {
    var _this;

    _classCallCheck(this, Prix);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Prix).call(this, props));
    _this.state = {
      evolution: "const",
      prix: 0
    }; //"up" : augmentation, "down": diminution, "const": statique

    return _this;
  }

  _createClass(Prix, [{
    key: "getColorFromEvolution",
    value: function getColorFromEvolution(evolution) {
      if (evolution == 0) return textWhite;
      if (evolution == -1) return textRed;else return textGreen;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("tr", {
        className: "articleLine",
        style: {
          fontSize: this.props.magicalSize + "px"
        }
      }, React.createElement("td", {
        className: "article articleName"
      }, this.props.nom), React.createElement("td", {
        className: "article articlePrice"
      }, this.props.prix), React.createElement("td", null, React.createElement("div", {
        style: {
          height: this.props.magicalSize + 2 + "px",
          width: this.props.magicalSize + 2 + "px"
        },
        className: "priceArrow priceArrow" + this.state.evolution
      })));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.evolution !== nextState.evolution || this.props.prix !== nextProps.prix;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.prix > prevState.prix) {
        return {
          evolution: "up",
          prix: nextProps.prix
        };
      } else if (nextProps.prix < prevState.prix) {
        return {
          evolution: "down",
          prix: nextProps.prix
        };
      } else {
        return {
          evolution: "const"
        };
      }
    }
  }]);

  return Prix;
}(React.Component);

exports.Prix = Prix;