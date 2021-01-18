/*eslint-disable*/
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

interface BreadcrumbProps {}
const BreadcrumbMain: React.FC<BreadcrumbProps> = ({}) => {
  const data = [
      {
          title: 'Home',
          link: '/home',
      },
      {
        title: 'Toeic',
        link: '/toeic',
    }
  ]
  return (
      <Breadcrumb>
          {data && data.map((ele, index) => {
             return <BreadcrumbItem key={index}><Link to={ele.link}>{ele.title}</Link></BreadcrumbItem>
          })}
      </Breadcrumb>
  );
};

export default BreadcrumbMain;
