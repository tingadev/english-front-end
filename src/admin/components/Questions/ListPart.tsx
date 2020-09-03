import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
  Button,
} from "reactstrap";
import {
  useGetPartsQuery,
  EnglishCertificateType,
  SkillsType,
} from "../../../schema/schema";
import { Link, useRouteMatch } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ListPartProps {
  setIconPills: (val: string) => void;
}

const ListPart: React.FC<ListPartProps> = ({ setIconPills }) => {
  const match = useRouteMatch();
  const partsQuery = useGetPartsQuery({
    variables: {
      certificateType: EnglishCertificateType.Toiec,
    },
  });

  React.useEffect(() => {
    setIconPills("part");
    partsQuery.refetch();
  }, []);
  const { loading } = useGetPartsQuery();
  if (loading) {
    return <>{"Loading...."}</>;
  }
  const parts = partsQuery.data?.parts;
  return (
    <>
      <CardHeader>
        <CardTitle tag="h4">List of Parts</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
              <th className="text-right" style={{ width: "5%" }}></th>
              <th className="text-center font-weight-semi">Part Name</th>
              <th className="text-center font-weight-semi">Certificate</th>
              <th className="text-center font-weight-semi">Skill</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parts &&
              parts.map((part, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-left font-weight-semi">
                      {part.partName}
                    </td>
                    <td className="text-center">
                      {part.certificateType === EnglishCertificateType.Toiec ? (
                        <Badge color="primary">{part.certificateType}</Badge>
                      ) : (
                        <Badge color="brand">{part.certificateType}</Badge>
                      )}
                    </td>
                    <td className="text-center">
                      {part.skillType === SkillsType.Reading ? (
                        <Badge color="success">{part.skillType}</Badge>
                      ) : (
                        <Badge color="info">{part.skillType}</Badge>
                      )}
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="info"
                        size="sm"
                        type="button"
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </Button>
                      <Link
                        className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                        to={`${match.url}/${part.id}/edit`}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </Link>
                      <Button
                        className="btn-icon btn-round"
                        color="danger"
                        size="sm"
                        type="button"
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </CardBody>
    </>
  );
};

export default ListPart;
