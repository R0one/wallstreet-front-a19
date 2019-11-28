'use strict';

var _random_color = require("./utils/random_color.js");

var _ArticleList = require("./components/ArticleList.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*const bieres = 	[
			{id: 2, name: "Anosteke Blonde", price: 1.65},
			{id: 3, name: "AtyPic", price: 1.40},
			{id: 4, name: "Barbar Blonde", price: 1.60},
			{id: 5, name: "Carolus Smoked", price: 	1.85},
			{id: 6, name: "Carolus Van de Keizer Blonde", price: 	1.95},
			{id: 7, name: "Castelain Pale Ale", price: 	1.65},
			{id: 8, name: "Cidre Friels", price: 	1.70},
			{id: 9, name: "Cuvée des Trolls", price: 	1.70},
			{id: 10, name: "Delirium Tremens", price: 	1.75},
			{id: 11, name: "JI.PA", price: 	1.75},
			{id: 12, name: "Kasteel Rouge", price: 	1.75},
			{id: 13, name: "Valdieu Triple", price: 	1.80}
		]
*/
var bieres = [{
  id: 2,
  name: "Anosteke Blonde",
  price: 1.65
}];
var softsChelous = [{
  id: 1,
  name: "Sirop au chocolat",
  price: 0.82
}, {
  id: 2,
  name: "Muffin fromage",
  price: 2.5
}, {
  id: 3,
  name: "Flûte à bec",
  price: 9.9
}, {
  id: 4,
  name: "Thé liégois",
  price: 0.2
}, {
  id: 5,
  name: "Café irlandais",
  price: 300
}, {
  id: 6,
  name: "Calva coréen",
  price: 0.01
}];

var MainScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainScreen, _React$Component);

  function MainScreen(props) {
    var _this;

    _classCallCheck(this, MainScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainScreen).call(this, props));
    _this.state = {
      bieres: bieres,
      softsChelous: softsChelous
    };
    return _this;
  }

  _createClass(MainScreen, [{
    key: "getMagicalLineHeightByNumberOfArticles",
    value: function getMagicalLineHeightByNumberOfArticles(i) {
      if (i == 0) {
        return 10;
      } //un peu de maths vaudoues (#mt12):
      //1080px - 200px pour le logo et sa marge : il reste 880px à se partager entre les i lignes. On enlève ensuite 20px pour la marge dans la ligne.
      //Et on met un seuil à 100px parce qu'après c'est juste trop gros.


      console.log(i);
      return Math.min(100, 880 / i - 20);
    } //cette taille sera calculée en fonction de l'état et passée de composant en composant. C'est sale mais il n'y a pas de solution CSS. Et puis c'est bien une cascade.

  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "main-div-child"
      }, React.createElement(_ArticleList.ArticleList, {
        magicalSize: this.getMagicalLineHeightByNumberOfArticles(Math.max(this.state.bieres.length, this.state.softsChelous.length)),
        articles: bieres
      }), React.createElement(_ArticleList.ArticleList, {
        magicalSize: this.getMagicalLineHeightByNumberOfArticles(Math.max(this.state.bieres.length, this.state.softsChelous.length)),
        articles: softsChelous
      }));
    }
  }]);

  return MainScreen;
}(React.Component);

var mainDiv = document.querySelector('#main-div');
var element = React.createElement(MainScreen, null);
ReactDOM.render(element, mainDiv);