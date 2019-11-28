"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleList = ArticleList;

var _prix = require("./prix.js");

function ArticleList(props) {
  var listItems = props.articles.map(function (article) {
    return React.createElement(_prix.Prix, {
      key: article.id,
      nom: article.name,
      prix: article.price,
      magicalSize: props.magicalSize
    });
  });
  return React.createElement("table", null, React.createElement("tbody", null, listItems));
}