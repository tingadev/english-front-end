/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

interface LazyLoadProps {
  className?: string;
  refetchQuery?: any;
  isHeightFull?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  className,
  refetchQuery,
  children,
  isHeightFull,
}) => {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    
    const node = bodyRef.current;
    if (!node) return;
    const bottom =
      Math.floor(node.scrollHeight - node.scrollTop) === node.clientHeight;
      console.log('hello', bottom)
    if (bottom) {
       
      refetchQuery && refetchQuery();
    }
  };
  return (
    <div
      ref={bodyRef}
      className={`${className} card-body`}
      css={css`
        overflow-y: auto;
        ${!isHeightFull ? 'max-height: 20rem;' : 'height: 100%;'}
      `}
      onScroll={handleScroll}
    >
      {children}
    </div>
  );
};

export default LazyLoad;
