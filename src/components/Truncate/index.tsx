import React from "react";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
interface TruncateProps {
    lines?: number;
    className?: string;
}

export const Truncate: React.FC<TruncateProps> = ({children, lines, className}) => {
    return (
        <p css={css`
            overflow: hidden;
            -webkit-line-clamp: ${lines};
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        `} 
        className={className}>{children}</p>
    )
}

