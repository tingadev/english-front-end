/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
// import { NavbarContext } from "../../../components/Navbars/NavbarContext";
// import { useMe } from "../../../hooks/useMe";
import { TestCategoryFragment } from "../../../schema/schema";

interface CardCategoryProps {
  testCategory?: TestCategoryFragment;
}
const CardCategory: React.FC<CardCategoryProps> = ({ testCategory }) => {
  // const me = useMe();
  const match = useRouteMatch();
  // const { setModalLogin } = React.useContext(NavbarContext);
  return (
    <Link
      className="font-12 font-weight-bold"
      // onClick={(e) => {
      //   if (me.id === "-1") {
      //     e.preventDefault();
      //     setModalLogin(true);
      //   }
      // }}
      to={`${match.url}/test-category/` + testCategory?.id}
      css={css`
        width: 30%;
        margin-right: 1.5%;
        &:nth-child(3) {
          margin-right: 0;
        }
      `}
    >
      <Card className="border-brand rounded">
        <CardBody>
          <CardTitle className="mt-0">
            {testCategory?.testCategoryName}
          </CardTitle>
          <CardSubtitle className="font-weight-normal mb-2 text-muted">
            {testCategory?.certificateType}
          </CardSubtitle>
          <div
            css={css`
              div {
                margin-bottom: 0.4rem;
              }
              p {
                color: black;
              }
            `}
          >
            <div className="d-flex align-items-center">
              <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
              <p className="mb-0 font-6">Published on: 14/08/2020</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="now-ui-icons tech_laptop mr-1"></i>
              <p className="mb-0 font-6 font-weight-semi">Views: 7,500</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="now-ui-icons media-1_button-play mr-1"></i>
              <p className="mb-0 font-6 font-weight-semi">Tests Taken: 400</p>
            </div>
          </div>
          <Button
            color={"primary"}
            className="mx-auto btn btn-primary font-7 px-2 py-2"
          >
            Take Test
          </Button>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardCategory;
