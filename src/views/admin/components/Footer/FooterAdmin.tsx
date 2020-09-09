
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
interface FooterAdminProps {
  isDefault?: boolean;
  fluid?: boolean;
}

const FooterAdmin : React.FC<FooterAdminProps> = ({
  isDefault,
  fluid
}) => {
  
    return (
      <footer
        className={"footer" + (isDefault ? " footer-default" : "")}
      >
        <Container fluid={fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                  href="/english-front-end#/home"
                >
                  Omega English
                </a>
              </li>
              <li>
                <a
                  href="javascript:0;"
                >
                  About Us
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getFullYear()}, Designed by{" "}
            <a
              href="javascript:0;"
              rel="noopener noreferrer"
            >
              Omega English
            </a>
          </div>
        </Container>
      </footer>
    );
}



export default FooterAdmin;
