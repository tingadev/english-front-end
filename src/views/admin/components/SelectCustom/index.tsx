import React from "react";
import Select from "react-select";
import { SelectComponentsProps } from "react-select/src/Select";

export const SelectCustom: React.FC<SelectComponentsProps> = ({zIndex , ...props}) => {
  return (
    <Select
      {...props}
      className={`react-select react-select-primary ${props.className}`}
      styles={{
        loadingIndicator: (styles) => ({ ...styles, color: "#c211a1" }),
        container: (styles) => ({ ...styles, zIndex: zIndex ? zIndex : 999})
      }}
      classNamePrefix="react-select"
    />
  );
};
