/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Brand from "../../components/Brand";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import NavBarContextProvider from "../../components/Navbars/NavbarContext";
import { MeContext, notMe } from "../../hooks/useMe";
import { useMeQuery } from "../../schema/schema";
interface LayoutProps {
  isHomePage?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children, isHomePage }) => {
  const meQuery = useMeQuery();
  let me = meQuery.data?.me;
  if (!me) {
    me = notMe;
  }

  return (
    <MeContext.Provider value={me}>
      <NavBarContextProvider>
        <Brand />
        <IndexNavbar isGeneral />
        <div
          css={css`
            padding-top: ${isHomePage ? "0" : "180px"};
          `}
        >
          {children}
        </div>
      </NavBarContextProvider>
    </MeContext.Provider>
  );
};
export default Layout;
