/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Loading from "../../../../components/Loading";

interface LazyLoadProps {
  className?: string;
  refetchQuery?: any;
  isHeightFull?: boolean;
  loading?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  className,
  refetchQuery,
  children,
  isHeightFull,
  loading,
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
      className={`${className} card-body position-relative`}
      css={css`
        overflow-y: auto;
        ${!isHeightFull ? 'max-height: 40rem;' : 'height: 100%;'}
        min-height: 20rem;
      `}
      onScroll={handleScroll}
    >
      {loading && <Loading absolute/>}
      {children}
    </div>
  );
};

export default LazyLoad;
