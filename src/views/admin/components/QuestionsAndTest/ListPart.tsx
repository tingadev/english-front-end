import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
  Button,
  Label,
  Input
} from "reactstrap";
import {
  useGetPartsQuery,
  EnglishCertificateType,
  SkillsType,
  AudioSecondsInput, PartIdsInput, PartFilterInput, PartAndAudioSeconds
} from "../../../../schema/schema";
import { Link, useRouteMatch } from "react-router-dom";
import _ from "lodash";
import { QuestionContext } from "./QuestionContext";
interface ListPartProps {
  setIconPills?: (val: string) => void;
  modal?: boolean;
  skillType?: SkillsType;
  dataUpdateTest?: PartAndAudioSeconds[];
  setDataUpdateTest?: (val: PartAndAudioSeconds[]) => void;
}

const ListPart: React.FC<ListPartProps> = ({ setIconPills, modal, skillType, dataUpdateTest, setDataUpdateTest }) => {
  const match = useRouteMatch();
  const questionContext = React.useContext(QuestionContext);
  const partsFilter: PartFilterInput = {
    certificateType: EnglishCertificateType.Toiec,
    skillType,
    partIds: questionContext.partIds?.ids.length! > 0 ? questionContext.partIds : null,
  };
  
  const {data, loading, refetch} = useGetPartsQuery({
    variables: {
      data: partsFilter,
    },
  });

  React.useEffect(() => {
    setIconPills && setIconPills("part");
    refetch();
  }, []);
  if (loading) {
    return <>{"Loading...."}</>;
  }
  const parts = data?.getParts.parts;
  return (
    <>
      {!modal && <CardHeader>
        <CardTitle tag="h4">List of Parts</CardTitle>
      </CardHeader> }
      <CardBody>
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
            {modal && (
                <th
                  className="form-check m-0 p-td-initial"
                  style={{ width: "5%" }}
                >
                  <Label check>
                    <Input defaultChecked={false} o type="checkbox"></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </th>
              )}
              {!modal && (
                <th className="text-right" style={{ width: "5%" }}></th>
              )}
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
                  <tr key={index}>
                    {modal && (
                        <td className="form-check m-0 p-td-initial">
                          <Label check>
                            <Input
                              type="checkbox"
                              onChange={async (e) => {
                                if (e.target.checked) {
                                  const data: PartAndAudioSeconds = {
                                    partId: part.id,
                                    autdioSecs: 0,
                                    displayOrder: 0,
                                  }
                                  setDataUpdateTest!([...dataUpdateTest!, data])
                                }
                                else{
                                 setDataUpdateTest!(dataUpdateTest!.filter(d => d.partId !== part.id))
                                }
                              }}
                            />
                            <span className="form-check-sign"></span>
                          </Label>
                        </td>
                      )}
                    {!modal && <td>{index + 1}</td>}
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
