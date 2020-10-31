/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Lottie from "react-lottie";
import animationHello from "../../assets/lotties/35787-robot-says-hello.json";
import animationLoading from "../../assets/lotties/lf30_editor_e6dctybt.json";
interface LoadingProps {
  className?: string;
  isQuery?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ className, isQuery }) => {
  const [isDisplay, setIsDisplay] = React.useState("flex");
  const defaultOptionsHello = {
    loop: 1,
    autoplay: true,
    animationData: animationHello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsLoading = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onAnimCompleted = () => {
    setIsDisplay("none");
  };
  return (
    <div
      className={className}
      css={css`
        position: fixed;
        width: 100%;
        top:0;
        left:0;
        height: 100vh;
        background: white;
        z-index: 9999999999;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: ${isDisplay};
      `}
    >
      <Lottie
        options={defaultOptionsHello}
        height={150}
        width={200}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => !isQuery && onAnimCompleted(),
          },
        ]}
      />
      <Lottie
        options={defaultOptionsLoading}
        height={200}
        width={200}
        style={{
            marginTop: -90,
            paddingLeft: 20,
        }}
      />
    </div>
  );
};

export default Loading;
