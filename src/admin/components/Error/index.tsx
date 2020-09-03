import React from "react";

interface ErrorProps {
  message?: string;
  className?: string;
  style?: any;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message, className, style }) => {
  if (!message) {
    return <></>;
  }

  return (
    <div className={`text-danger d-flex mt-2 ${className}`} style={style}>
      <span
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "100%",
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        !
      </span>{" "}
      <span className="font-8 ml-2">{message}</span>
    </div>
  );
};

export default ErrorMessage;
