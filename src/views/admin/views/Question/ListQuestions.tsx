import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Select from "react-select";
import {
  CardHeader,
  CardTitle,
  Table,
  Badge,
  Button,
  Input,
  Label,
} from "reactstrap";
import {
  useGetQuestionsQuery,
  EnglishCertificateType,
  SkillsType,
  QuestionFilterTypeInput,
  TestQuestionInputId,
  PartIdAndQuestionIdsInput,
  useRemoveQuestionMutation,
} from "../../../../schema/schema";
import LazyLoad from "../../components/LazyLoad";
import ModalDelete from "../../components/Modal/Delete";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ListQuestionsProps {
  setIconPills?: (val: string) => void;
  modal?: boolean;
  skillType?: SkillsType;
  dataTestQuestionInput?: TestQuestionInputId;
  refetchTestQuestions?: any;
  arrQuestionIds?: PartIdAndQuestionIdsInput;
  setArrQuestionIds?: (val: PartIdAndQuestionIdsInput) => void;
}
const optionsFilter = [
  {
    value: null,
    label: 'All',
  },
  {
    value: SkillsType.Reading,
    label: SkillsType.Reading,
  },
  {
    value: SkillsType.Listening,
    label: SkillsType.Listening,
  },
];
const ListQuestions: React.FC<ListQuestionsProps> = ({
  setIconPills,
  modal,
  skillType,
  dataTestQuestionInput,
  arrQuestionIds,
  setArrQuestionIds,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const match = useRouteMatch();
  const [currentFilter, setCurrentFilter] = React.useState(skillType);
  const [
    removeQuestionMutation,
    removeQuestionMutationResult,
  ] = useRemoveQuestionMutation();
  const [idRemove, setIdRemove] = React.useState("");
  const removeQuestion = async (): Promise<void> => {
    await removeQuestionMutation({
      variables: {
        id: idRemove,
      }
    });
  }

  const [searchName, setSearchName] = React.useState("");
  const questionsFilter: QuestionFilterTypeInput = React.useMemo(() => {
    return {
      certificateType: EnglishCertificateType.Toeic,
      skillType: currentFilter,
      testId: dataTestQuestionInput?.testId,
      title: searchName,
    };
  }, [currentFilter, dataTestQuestionInput, searchName]);

  
  const questionsQuery = useGetQuestionsQuery({
    variables: {
      data: questionsFilter,
    },
  });

  React.useEffect(() => {
    if(removeQuestionMutationResult.data?.removeQuestion){
      questionsQuery.refetch();
    }
  }, [questionsQuery, removeQuestionMutationResult.data])
  
  const fetchMoreQuestions = React.useCallback((): void => {
    if (
      questionsQuery.loading ||
      !questionsQuery.data ||
      !questionsQuery.data.questions ||
      !questionsQuery.data.questions.nextCursor
    )
      return;
    questionsQuery.fetchMore({
      variables: {
        data: {
          ...questionsFilter,
          cursor:
            questionsQuery.data && questionsQuery.data.questions?.nextCursor,
        },
      },
      updateQuery: (prev, next) => {
        return {
          ...prev,
          questions: {
            ...prev.questions,
            questions: [
              ...prev.questions.questions,
              ...(next.fetchMoreResult
                ? next.fetchMoreResult.questions.questions
                : []),
            ],
            nextCursor: next?.fetchMoreResult?.questions?.nextCursor ?? null,
          },
        };
      },
    });
  }, [questionsFilter, questionsQuery]);

  React.useEffect(() => {
    setIconPills && setIconPills("questions");
    questionsQuery.refetch();
    setArrQuestionIds &&
      setArrQuestionIds({
        partId: dataTestQuestionInput?.partId,
        questionIds: [],
      });
  }, []);


  const questions = questionsQuery.data?.questions.questions;
  return (
    <>
      {!modal && (
        <CardHeader>
          <div className="d-flex justify-content-between">
            <CardTitle tag="h4">List Of Questions</CardTitle>
            <Select
              onChange={(opt: any) => {
                setCurrentFilter(opt.value);
              }}
              placeholder="Filter"
              className="width-10rem z-header"
              classNamePrefix="react-select"
              options={optionsFilter}
            />
          </div>
        </CardHeader>
      )}
      <LazyLoad
        isHeightFull={modal ? true : false}
        className="p-0"
        refetchQuery={fetchMoreQuestions}
        loading={questionsQuery.loading}
      >
        <div className="sticky-top bg-white p-2">
          <Input
            placeholder="Search by name"
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
        </div>
        <Table responsive>
          <thead className="text-primary">
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
              <th className="text-left font-weight-semi">Question Name</th>
              <th className="text-center font-weight-semi">Certificate</th>
              <th className="text-center font-weight-semi">Skill</th>
              <th className="text-center font-weight-semi">Question Type</th>
              {!modal && (
                <th className="text-center font-weight-semi">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {questions &&
              questions
                .map((q, index) => {
                  return (
                    <tr key={index}>
                      {modal && (
                        <td className="form-check m-0 p-td-initial">
                          <Label check>
                            <Input
                              type="checkbox"
                              onChange={async (e) => {
                                if (!arrQuestionIds) {
                                  return;
                                }
                                if (e.target.checked) {
                                  const arrQuestionId =
                                    arrQuestionIds.questionIds;
                                  arrQuestionId.push(q.id);
                                  setArrQuestionIds &&
                                    setArrQuestionIds({
                                      ...arrQuestionIds,
                                      questionIds: arrQuestionId,
                                    });
                                } else {
                                  const arrQuestionId =
                                    arrQuestionIds.questionIds;
                                  setArrQuestionIds &&
                                    setArrQuestionIds({
                                      ...arrQuestionIds,
                                      questionIds: arrQuestionId.filter(
                                        (a) => a !== q.id
                                      ),
                                    });
                                }
                              }}
                            />
                            <span className="form-check-sign"></span>
                          </Label>
                        </td>
                      )}
                      {!modal && <td>{index + 1}</td>}
                      <td className="text-left font-weight-semi">
                        {q.questionName}
                      </td>
                      <td className="text-center">
                        {q.certificateType === EnglishCertificateType.Toeic ? (
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
                      {!modal && (
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
                            onClick={() => {setIdRemove(q.id); setIsOpenModalDelete(true)}}
                          >
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                          </Button>
                        </td>
                      )}
                    </tr>
                  );
                })}
          </tbody>
        </Table>
        <ModalDelete
          isOpen={isOpenModalDelete}
          onClose={setIsOpenModalDelete}
          callback={removeQuestion}
          loading={removeQuestionMutationResult.loading}
        />
      </LazyLoad>
    </>
  );
};

export default ListQuestions;
