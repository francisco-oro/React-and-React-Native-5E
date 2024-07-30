import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles, onClickRemove }) => {
  return (
    <ul>
      {articles.map((i) => (
        <ArticleItem
        article={i}
        onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
};

export default ArticleList;
