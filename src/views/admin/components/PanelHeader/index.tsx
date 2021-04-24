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
  height = "260",
}) => {
  return (
    <div
      className={`panel-header ${className}`}
      css={css`
        min-height: 260px;
        height: ${height === 'auto' ? height : height + 'px'};
        padding-top: 68px;
      `}
    >
      {children}
    </div>
  );
};

export default PanelHeader;
