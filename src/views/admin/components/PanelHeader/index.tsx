/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
interface PanelHeaderProps {
  className?: string;
  height?: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({
  children,
  className,
  height = "200",
}) => {
  return (
    <div
      className={`panel-header d-flex align-items-center justify-content-center ${className}`}
      css={css`
        height: ${height === 'auto' ? height : height + 'px'};
        margin-top: 68px;
      `}
    >
      {children}
    </div>
  );
};

export default PanelHeader;
