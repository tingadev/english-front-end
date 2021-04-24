/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import loadingJson from "../../../../assets/lotties/mini-loading.json";
interface ButtonSubmitGroupProps {
  onClick: () => void;
  link: string;
  loading?: boolean;
}
const ButtonSubmitGroup: React.FC<ButtonSubmitGroupProps> = ({
  onClick,
  link,
  loading,
}) => {
  const loadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      css={css`
        .btn {
          height: 40px;
          max-width: 100px;
        }
      `}
    >
      <Button
        type="button"
        className="bg-info font-weight-bold font-10"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? <Lottie options={loadingAnimation} /> : "Submit"}
      </Button>
      <Link
        onClick={(e) => {
          loading && e.preventDefault();
        }}
        to={link}
        className="bg-danger btn font-weight-bold font-10"
      >
        Cancel
      </Link>
    </div>
  );
};

export default ButtonSubmitGroup;
