/*eslint-disable*/
import React from "react";

// reactstrap components
interface DividerProps {
  color?: string;
}
const Divider: React.FC<DividerProps> = ({ color='grey' }) => {

  return (
    <div className={`w-full border border-` + {color}}/>
  );
};

export default Divider;
