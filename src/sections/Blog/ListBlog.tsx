/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import moment from "moment";
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
  const { setIsStyle } = React.useContext(NavbarContext);
  React.useEffect(() => {
    setIsStyle(false);
  }, []);
  return (
    <section className="pb-5 noHeader" data-background-color="gray">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h2 className="title">{testGroupData?.testGroupName}</h2>
            <Row>
              {blogsData &&
                blogsData.length > 0 &&
                blogsData.map((blog, index) => {
                  const dateCreated = moment(blog.createdAt).format('DD-MM-YYYY');
                  if(index === 0){
                    return (<React.Fragment>
                      <Col md="5">
                          <div className="card-image">
                            <Link to={`${match.url}/${blog.id}`}>
                            <img
                              alt="..."
                              className="img img-raised rounded img-hover"
                              src={config.PATH_IMAGE + blog.image}
                            ></img>
                            </Link>
                          </div>
                        </Col>
                        <Col md="7">
                          <h6 className="category text-primary mt-3">
                            {blog.testGroup.certificateType}
                          </h6>
                          <CardTitle tag="h3">
                          <Link className='text-brand' to={`${match.url}/${blog.id}`}
                          >
                              {blog.blogName}
                            </Link>
                          </CardTitle>
                          <Truncate
                            lines={4}
                            className="card-description text-brand"
                          >
                            {HTMLToString(blog.content)}
                          </Truncate>
                          <p className="author">
                            by{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <b>{blog.author.firstName + " " + blog.author.lastName}</b>
                            </a>
                            , <span className="font-italic font-9">{dateCreated}</span>
                          </p>
                        </Col>
                    </React.Fragment>)
                  }
                  return (
                    <Col className='mt-5' md="4">
                      <Card className="card-blog card-hover">
                        <div className="card-image">
                          <Link
                            to={`${match.url}/${blog.id}`}
                            className="text-decoration-none border-0"
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
                          <h6 className="category text-primary">{blog.testGroup.certificateType}</h6>
                          <CardTitle tag="h5" className="text-brand">{blog.blogName}</CardTitle>
                          <Truncate
                            lines={4}
                            className="card-description text-brand font-10"
                          >
                            {HTMLToString(blog.content)}
                          </Truncate>
                          <CardFooter className="px-0">
                            <div className="author">
                              {/* <img
                                alt="..."
                                className="avatar img-raised"
                                // src={require("assets/img/julie.jpg")}
                              ></img> */}
                              <span>
                                by{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <b>{blog.author.firstName + " " + blog.author.lastName}</b>
                                </a>
                                , <span className="font-italic font-8">{dateCreated}</span>
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
