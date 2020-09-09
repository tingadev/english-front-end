import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
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
  useGetQuestionsQuery,
  EnglishCertificateType,
  SkillsType,
  QuestionFilterTypeInput,
} from "../../../../schema/schema";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ListQuestionsProps {
  setIconPills: (val: string) => void;
}

const ListQuestions: React.FC<ListQuestionsProps> = ({ setIconPills }) => {
  const match = useRouteMatch();
  const questionsFilter: QuestionFilterTypeInput = {
    certificateType: EnglishCertificateType.Toiec,
    skillType: undefined,
  };
  const { data, loading, refetch } = useGetQuestionsQuery({
    variables: {
      data: questionsFilter,
    },
  });
  React.useEffect(() => {
    setIconPills("questions");
    refetch();
  }, []);

  if (loading) {
    return <>{"Loading...."}</>;
  }
  const questions = data?.questions;
  return (
    <>
      <CardHeader>
        <CardTitle tag="h4">List Of Questions</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead className="text-primary">
            <tr>
              <th className="text-right" style={{ width: "5%" }}></th>
              <th className="text-left font-weight-semi">Question Name</th>
              <th className="text-center font-weight-semi">Certificate</th>
              <th className="text-center font-weight-semi">Skill</th>
              <th className="text-center font-weight-semi">Question Type</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions &&
              questions.map((q, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-left font-weight-semi">
                      {q.questionName}
                    </td>
                    <td className="text-center">
                      {q.certificateType === EnglishCertificateType.Toiec ? (
                        <Badge color="primary">{q.certificateType}</Badge>
                      ) : (
                        <Badge color="brand">{q.certificateType}</Badge>
                      )}
                    </td>
                    <td className="text-center">
                      {q.skillType === SkillsType.Reading ? (
                        <Badge color="success">{q.skillType}</Badge>
                      ) : (
                        <Badge color="info">{q.skillType}</Badge>
                      )}
                    </td>
                    <td className="text-center font-weight-semi">
                      {q.questionType}
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
                        to={`${match.url}/${q.id}/edit`}
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

export default ListQuestions;
