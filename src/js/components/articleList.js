import {Prix} from "./prix.js";
function ArticleList(props) {
  const listItems = props.articles.map((article) =>
    <tr className="articleLine" key={article.name}><td><Prix nom={article.name} prix={article.price} /></td></tr>
  );
  return (
    <table><tbody>{listItems}</tbody></table>
  );
}

export {ArticleList};
