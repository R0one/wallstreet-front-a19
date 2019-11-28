"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrixArticle = PrixArticle;

function PrixArticle(props) {
  return React.createElement("div", null, "Bi\xE8re : ", props.prix, " \u20AC");
}