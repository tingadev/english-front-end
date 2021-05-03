/**  @jsx jsx */
import { jsx, css } from "@emotion/core";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardTitle, Col, Container, Row } from "reactstrap";
import config from "../../config";
import { BlogFragment } from "../../schema/schema";

interface BlogDetailProps {
  blogsData?: BlogFragment[];
}
const BlogDetail: React.FC<BlogDetailProps> = ({ blogsData }) => {
  const { blogId } = useParams() as { blogId?: string };
  const blog = blogsData?.find((b) => b.id === blogId);
  const dateFormatted = moment(blog?.createdAt).format("DD/MM/YYYY");
  return (
    <React.Fragment>
      <div className="container noHeader">
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title">{blog?.blogName}</h1>
              {/* <h5>{blog?.author.firstName || '' + blog?.author.lastName}</h5> */}
            </Col>
          </Row>
        </div>
        <div className="d-flex">
          <div
            className="button-container d-flex flex-column"
            css={css`
              position: sticky;
              top: 120px;
              left: 100px;
              align-self: flex-start;
            `}
          >
            <Button
              className="btn-icon btn-round mr-1"
              color="twitter"
              size="lg"
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-round mr-1"
              color="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button className="btn-icon btn-round" color="google" size="lg">
              <i className="fab fa-google"></i>
            </Button>
          </div>
          <div
            className="page-header-image"
            css={css`
              max-width: 700px;
              margin: 0 auto;
            `}
          >
            <img
              src={`${config.PATH_IMAGE + blog?.image}`}
              alt="header"
              className="w-100 mx-auto"
            />
          </div>
        </div>

        <div className="section">
          <Container>
            <div dangerouslySetInnerHTML={{ __html: blog?.content! }}></div>
            <h4>{dateFormatted}</h4>
          </Container>

          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Row>
                  <Col md="6">
                    <div className="blog-tags">
                      Tags:{" "}
                      <label className="label label-info mr-1">
                        Photography
                      </label>
                      <label className="label label-info mr-1">Stories</label>
                      <label className="label label-info">Castle</label>
                    </div>
                  </Col>
                  <Col md="6">
                    <Button
                      className="btn-round pull-right"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google"></i> 232
                    </Button>
                    <Button
                      className="btn-round pull-right"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i> 910
                    </Button>
                    <Button
                      className="btn-round pull-right"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i> 872
                    </Button>
                  </Col>
                </Row>
                <hr></hr>
                {/* <Card className="card-profile card-plain">
                  <Row>
                    <Col md="2">
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/mike.jpg")}
                            ></img>
                        </a>
                        <div className="ripple-container"></div>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardTitle tag="h4">Alec Thompson</CardTitle>
                      <p className="description">
                        I've been trying to figure out the bed design for the
                        master bedroom at our Hidden Hills compound...I like
                        good music from Youtube.
                      </p>
                    </Col>
                    <Col md="2">
                      <Button
                        className="pull-right btn-round"
                        color="default"
                        type="button"
                      >
                        Follow
                      </Button>
                    </Col>
                  </Row>
                </Card> */}
              </Col>
            </Row>
          </Container>
          {/* <Container>
            <Col md="12">
              <h2 className="title text-center">Similar Stories</h2>
              <br></br>
              <div className="blogs-1" id="blogs-1">
                <Row>
                  <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-plain card-blog">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={""}
                            ></img>
                          </div>
                        </Col>
                        <Col md="7">
                          <h6 className="category text-info">Enterprise</h6>
                          <CardTitle tag="h3">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Warner Music Group buys concert discovery service
                              Songkick
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            Warner Music Group announced today it’s acquiring
                            the selected assets of the music platform Songkick,
                            including its app for finding concerts and the
                            company’s trademark.
                          </p>
                          <p className="author">
                            by{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <b>Sarah Perez</b>
                            </a>
                            , 2 days ago
                          </p>
                        </Col>
                      </Row>
                    </Card>
                    <Card className="card-plain card-blog">
                      <Row>
                        <Col md="7">
                          <h6 className="category text-danger">
                            <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                            Startup
                          </h6>
                          <CardTitle tag="h3">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Insticator raises $5.2M to help publishers
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            Insticator is announcing that it has raised $5.2
                            million in Series A funding. The startup allows
                            online publishers to add quizzes, polls and other
                            interactive elements...
                          </p>
                          <p className="author">
                            by{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <b>Anthony Ha</b>
                            </a>
                            , 5 days ago
                          </p>
                        </Col>
                        <Col md="5">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={""}
                            ></img>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Container> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogDetail;
