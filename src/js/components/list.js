function ArticleList(props) {
  const listItems = props.articles.map((article) =>
    <li key={article.name}>{article.name} : {article.price}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export {ArticleList};
