import {Prix} from "./prix.js";
function ArticleList(props) {
  const listItems = props.articles.map((article) =>
    <Prix key={article.id} nom={article.name} prix={article.price} magicalSize={props.magicalSize}/>
  );
  return (
    <table><tbody>{listItems}</tbody></table>
  );
}

export {ArticleList};
