// src/components/ArticleDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import { getNews } from "../services/service";

const { Meta } = Card;

const ArticleDetail: React.FC = () => {
  const { articleTitle } = useParams<{ articleTitle: string }>();
  const [article, setArticle] = useState<any | null>(null);

  useEffect(() => {
    getNews().then((data) => {
      const res = data.articles;
      console.log(res);

      const selectedArticle = res.find(
        (item: any) => item.title === articleTitle
      );
      setArticle(selectedArticle);
      console.log(selectedArticle);
    });
  }, [articleTitle]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      title={article.title}
      cover={<img alt={article.title} src={article.urlToImage} />}
      style={{ paddingInline: "50px" }}
    >
      <Meta
        description={`${article.author} | ${article.publishedAt.substring(
          0,
          10
        )}`}
      />
      <p style={{ marginBlock: "30px" }}>{article.content}</p>
    </Card>
  );
};

export default ArticleDetail;
