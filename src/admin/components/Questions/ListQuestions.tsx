import React from "react";
import { Link } from "react-router-dom";
import {Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";
import { thead, tbody } from "../../variables/general.js";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ToiecAdminProps {}

const ListQuestions: React.FC<ToiecAdminProps> = () => {
  return (
    <>
        <Card>
                <CardHeader>
                  <CardTitle tag="h4">Test</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
    </>
  );
};

export default ListQuestions;
