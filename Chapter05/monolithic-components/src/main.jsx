import * as ReactDOM from "react-dom/client";
import MyFeature from "./MyFeature";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyFeature
  addArticle={({
    title, 
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
  }) => (
    <AddArticle
    name={"Articles"}
    title={title}
    summary={summary}
    onChangeTitle={onChangeTitle}
    onChangeSummary={onChangeSummary}
    onClickAdd={onClickAdd}
  />
  )}

  articleList={({ articles, onClickRemove }) => (
    <ArticleList
    articles={articles}
    onClickRemove={onClickRemove}/>
  )}
   />);
