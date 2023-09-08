import { useState, useEffect } from "react";
import { ResponseAPI } from "../api/api";
import { getNews } from "../services/service";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

export const GetList = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([]);

  useEffect(() => {
    getNews().then((data) => {
      setPosts(data.articles);
      console.log(data.articles);
    });
  }, []);

  return (
    <>
      <h1 style={{ paddingInline: "60px", paddingBlock: "50px", margin: 0 }}>
        Latest News For you 👇
      </h1>

      <Row style={{ paddingInline: "50px" }}>
        {posts.map((post, i) => (
          <Col className="gutter-row" span={12}>
            <a href={`/article/${post.title}`}>
              <Card
                hoverable
                key={i}
                style={{ width: "auto", margin: 10, height: 525 }}
                cover={
                  <img
                    alt="example"
                    src={post.urlToImage}
                    style={{ height: 379 }}
                  />
                }
              >
                <Meta title={post.title} description={post.description} />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};
