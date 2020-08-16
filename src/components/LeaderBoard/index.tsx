/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col } from "reactstrap";
interface LeaderBoardProps {}
const LeaderBoard: React.FC<LeaderBoardProps> = ({}) => {
  const data = [
    {
      name: "Lâm Tâm Như",
      point: "500",
    },
    {
      name: "Triệu Vy",
      point: "300",
    },
    {
      name: "Quang Hải",
      point: "600",
    },
    {
      name: "Tuấn Hưng",
      point: "759",
    },
    {
      name: "Maria",
      point: "548",
    },
    {
      name: "Messi",
      point: "657",
    },
    {
      name: "Beckham",
      point: "356",
    },
    {
      name: "Neymar",
      point: "467",
    },
    {
      name: "Pogba",
      point: "764",
    },
    {
      name: "Kaka",
      point: "768",
    },
  ];
  const colorBoard = ['text-danger', 'text-warning', 'text-info'] 
  return (
      <section className="border border-success rounded px-3">
        <h4 className="text-center">
            <i className="text-warning now-ui-icons sport_trophy"></i>Leader Board
        </h4>
        <ul className="d-flex flex-wrap ml-0 pl-0">
          {data.map((ele, index) => {
            
            return (
              <li key={index} className={`w-100 list-none d-flex justify-content-between mb-2 font-weight-semi ` + colorBoard[index]} style={{ listStyle: 'none' }}>
                  <div>
                  <b>{index + 1}</b> .{ele.name}{" "}
                  </div>
                  <span className=" text-black font-weight-semi ml-5">
                     {ele.point} point 
                  </span>{" "}
              </li>
            );
          })}
        </ul>
      </section>
  );
};

export default LeaderBoard;
