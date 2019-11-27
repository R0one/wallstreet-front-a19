function articleList(props) {
  const articles = props.articles;
  const listItems = numbers.map((article) =>
    <li>{article.name} : {article.price}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
