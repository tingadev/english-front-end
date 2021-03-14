import React from "react";
import { Button } from "reactstrap";
interface ButtonAddProps {
    onClick?: () => void;
    text?: string;
  }

export const ButtonAdd: React.FC<ButtonAddProps> = ({
    onClick,
    text
  }) => {
    return (
      <div>
        <Button
          className="btn-icon btn-round mr-1"
          color="success"
          size="md"
          type="button"
          onClick={() => {
            onClick && onClick()
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-10">{text || `Add`}</span>
      </div>
    );
  };
  