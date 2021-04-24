/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import { Col, Row } from "reactstrap";
import PanelHeader from "../../../components/PanelHeader";
import ListBlog from "../ListBlog";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToeicAdminProps {}

const BlogHomePage: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <>
      <PanelHeader>
          <div className="header text-center">
            <h2 className="title">Blog</h2>
            <p className="category">Management Blog</p>
          </div>
      </PanelHeader>
      <div className="content">
        <Row>
          <Col md={12}>
            <div className="px-4 py-2 bg-white font-weight-semi font-10">
              <Link className="btn-info btn" to={`${match.url}/create-blog`}>
                Create new blog
              </Link>
            </div>
          </Col>
          <Col className="mt-4">
            <ListBlog />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BlogHomePage;
