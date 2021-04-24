/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { NavbarContext } from "../../components/Navbars/NavbarContext";
import { Truncate } from "../../components/Truncate";
import config from "../../config";
import { BlogFragment, TestGroupInfoFragment } from "../../schema/schema";
import { HTMLToString } from "../../utils/string";
interface ListBlogProps {
  blogsData?: BlogFragment[];
  testGroupData?: TestGroupInfoFragment;
}
const ListBlog: React.FC<ListBlogProps> = ({ blogsData, testGroupData }) => {
  const match = useRouteMatch();
  const { setIsStyle } = React.useContext(NavbarContext)
  React.useEffect(() => {
    setIsStyle(true);
  }, [])
  return (
    <section className="py-5 noHeader" data-background-color="gray">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h2 className="title">{testGroupData?.testGroupName}</h2>
            <Row>
              {blogsData &&
                blogsData.length > 0 &&
                blogsData.map((blog) => {
                  return (
                    <Col md="4">
                      <Card className="card-blog">
                        <div className="card-image">
                          <Link
                            to={`${match.url}/${blog.id}`}
                            css={css`
                              position: relative;
                              padding: 33%;
                              display: block;
                              overflow: hidden;
                            `}
                          >
                            <img
                              alt="..."
                              className="img rounded"
                              src={config.PATH_IMAGE + blog.image}
                              css={css`
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                              `}
                            ></img>
                          </Link>
                        </div>
                        <CardBody>
                          <h6 className="category text-info">Blog</h6>
                          <CardTitle tag="h5">{blog.blogName}</CardTitle>
                          <Truncate
                            lines={4}
                            className="card-description text-brand font-10"
                          >
                            {HTMLToString(blog.content)}
                          </Truncate>
                          <CardFooter>
                            <div className="author">
                              {/* <img
                                alt="..."
                                className="avatar img-raised"
                                // src={require("assets/img/julie.jpg")}
                              ></img> */}
                              <span>
                                {blog.author.firstName + blog.author.lastName}
                              </span>
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ListBlog;
