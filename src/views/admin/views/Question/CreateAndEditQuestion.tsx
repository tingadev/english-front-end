import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { notificationAdd } from "../../utils/Notification";
import {
  NewQuestionInput,
  QuestionType,
  useCreateQuestionMutation,
  SkillsType,
  AnswersInput,
  useGetQuestionLazyQuery,
  useUpdateQuestionMutation,
  TestQuestionInputId,
  AnswersGroupInput,
  QuestionFragment,
  useRemoveQuestionMutation,
} from "../../../../schema/schema";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { store } from "react-notifications-component";
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
import { SkillsTypeOptions } from "../Part/CreateAndEditPart";
import ModalDelete from "../../components/Modal/Delete";
import { Nav, Tab } from "react-bootstrap";
import QuestionsGroupInfo, { answersKeyDefault } from "./QuestionsGroupInfo";
import GeneralQuestion from "./GeneralQuestion";
import QuestionInfo from "./QuestionInfo";
interface CreateAndEditQuestionProps {
  modal?: boolean;
  skillType?: SkillsType;
  dataTestQuestionInput?: TestQuestionInputId;
  refetchTestQuestions?: any;
  setIdForced?: (value: number) => void;
}

const answersKey: AnswersInput[] = [
  {
    keyAnswer: "A",
    answerContent: "",
  },
  {
    keyAnswer: "B",
    answerContent: "",
  },
  {
    keyAnswer: "C",
    answerContent: "",
  },
  {
    keyAnswer: "D",
    answerContent: "",
  },
];
const CreateAndEditQuestionForm: React.FC<CreateAndEditQuestionProps> = ({
  modal,
  skillType,
  dataTestQuestionInput,
  refetchTestQuestions,
  setIdForced,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const [removeQuestionMutation, removeQuestionMutationResult] =
    useRemoveQuestionMutation();

  const [idRemove, setIdRemove] = React.useState("");
  const removeTestQuestion = () => {
    removeQuestionMutation({
      variables: {
        id: idRemove,
      },
    });
  };

  const questionContext = React.useContext(QuestionContext);

  const { questionId } = useParams() as { questionId?: string };
  // const [answersKeyGroupState, setAnswerKeyGroupState] = React.useState(answersKeyVcl);
  let notification = notificationAdd("Question");
  const questionIdFinal = questionId
    ? questionId
    : questionContext.questionIdModal;
  if (questionIdFinal) {
    notification = notificationAdd("Question", "Updated");
  }

  let initialValues: NewQuestionInput = {
    questionName: "",
    explaination: "",
    audioSec: 0,
    audioSecVN: 0,
    questionType: QuestionType.SingleChoice,
    answers: answersKey,
    certificateType: questionContext.certificateType,
    skillType: skillType
      ? skillType
      : (SkillsTypeOptions[0].value as SkillsType),
    result: "",
    image: "",
    description: "",
    testId: dataTestQuestionInput?.testId,
    partId: dataTestQuestionInput?.partId,
    questionGroupName: "",
    questionGroupDescription: "",
  };
  const [isCheckedResult, setIsCheckedResult] = React.useState(
    initialValues.result
  );
  const [getQuestionQuery, getQuestionRespone] = useGetQuestionLazyQuery();

  React.useEffect(() => {
    if (!questionIdFinal) {
      return;
    }
    getQuestionQuery({
      variables: {
        id: questionIdFinal,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIdFinal]);

  //refresh test questions
  React.useEffect(() => {
    removeQuestionMutationResult.data?.removeQuestion &&
      refetchTestQuestions &&
      refetchTestQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeQuestionMutationResult.loading]);

  const [answersGroupsArr, setAnswersGroupsArr] = React.useState<
    AnswersGroupInput[]
  >([]);
  const [answersKeyState, setAnswerKeyState] =
    React.useState(answersKeyDefault);

  const handleRemoveQuestionGroup = (id?: string | null) => {
    if (questionId || modal) {
      setIsOpenModalDelete(true);
      id && setIdRemove(id);
    }
    setAnswersGroupsArr([...answersGroupsArr.filter((a) => a.id !== id)]);
  };
  let answers: any;
  let dataQuestion: QuestionFragment | undefined;
  if (getQuestionRespone.data) {
    const { __typename, questionGroups, questionGroupOrder, isGroup, ...data } =
      getQuestionRespone.data.question;
    dataQuestion = { ...data, questionGroups, questionGroupOrder, isGroup };

    answers = data.answers.map((answer) => {
      const { __typename, ...answerData } = answer;
      return answerData;
    });

    initialValues = {
      ...data,
      answers,
    };
  }

  React.useEffect(() => {
    if (getQuestionRespone.data?.question) {
      setIsCheckedResult(getQuestionRespone.data.question.result);
      setAnswerKeyState(answers);
    }
    if (dataQuestion?.questionGroups) {
      const answersGroupsArrBE = dataQuestion.questionGroups.map((group) => {
        return {
          answers: group.answers.map((answer) => {
            const { __typename, ...answerData } = answer;
            return answerData;
          }),
          id: group.id,
          order: group.questionGroupOrder,
          description: group.description,
          result: group.result,
          questionName: group.questionName,
          explaination: group.explaination,
        };
      });
      setAnswersGroupsArr(answersGroupsArrBE);
    }
    
  }, [getQuestionRespone.loading]);
  const [createQuestion] = useCreateQuestionMutation();
  const [updateQuestion] = useUpdateQuestionMutation();

  const [shouldValidate, setShouldValidate] = React.useState(false);

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validateOnChange={shouldValidate}
        validateOnBlur={shouldValidate}
        validationSchema={yup.object().shape({
          questionName: yup.string().required("Part Name is a required field"),
          certificateType: yup
            .string()
            .required("Certificate Type is a required field"),
          skillType: yup.string().required("Skill Type is a required field"),
          result: yup.string().required("Result is a required field"),
          audioSec: yup.number().required("Audio Seconds must be number"),
        })}
        onSubmit={async (values) => {
          if (questionIdFinal) {
            const result = await updateQuestion({
              variables: {
                data: {
                  ...values,
                  answers: answersKeyState,
                  answersGroup: answersGroupsArr,
                },
              },
            });
            if (result.data?.updateQuestion) {
              store.addNotification(notification);
              getQuestionRespone.refetch && getQuestionRespone.refetch();
              refetchTestQuestions && refetchTestQuestions();
            }
          } else {
            const result = await createQuestion({
              variables: {
                data: {
                  ...values,
                  answers: answersKeyState,
                  answersGroup: answersGroupsArr,
                },
              },
            });
            if (result.data?.createQuestion) {
              store.addNotification(notification);
              setIdForced &&
                setIdForced(parseInt(result.data?.createQuestion.id));
              setAnswerKeyState(answersKeyDefault);
              refetchTestQuestions && refetchTestQuestions();
            }
          }
        }}
      >
        {(formik) => (
          <Form>
            <Row>
              <Col>
                <Card>
                  <CardHeader
                    className={`d-flex justify-content-between align-items-center ${
                      modal && "sticky-top py2 px-4 bg-white"
                    }`}
                  >
                    <h5 className="title">
                      {!questionId && !modal
                        ? "Create Question"
                        : "Update Question"}
                    </h5>
                    <div>
                      <Button
                        type="button"
                        className="bg-info font-weight-bold font-10"
                        onClick={() => {
                          formik.submitForm();
                          setShouldValidate(true);
                        }}
                      >
                        Submit
                      </Button>
                      {!modal && (
                        <Link
                          to={`/admin/toeic/questions`}
                          className="bg-danger btn font-weight-bold font-10"
                        >
                          Cancel
                        </Link>
                      )}
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Tab.Container
                      id="tabs-question"
                      defaultActiveKey="question-general"
                    >
                      <Nav className="justify-content-start" variant="pills">
                        <Nav.Item>
                          <Nav.Link eventKey="question-general">
                            General Infomation
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="question">
                            Question Infomation
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="questions-group">
                            Questions Group Infomation
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="mt-4">
                      <Tab.Pane eventKey="question-general">
                          <GeneralQuestion
                            modal={modal}
                            questionData={getQuestionRespone.data?.question}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="question">
                          <QuestionInfo
                            handleRemoveQuestionGroup={handleRemoveQuestionGroup}
                            answersKeyState={answersKeyState}
                            setAnswerKeyState={setAnswerKeyState}
                            isCheckedResult={isCheckedResult}
                            setIsCheckedResult={setIsCheckedResult}
                            setAnswersGroupsArr={setAnswersGroupsArr}
                            answersGroupsArr={answersGroupsArr}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="questions-group">
                          <QuestionsGroupInfo/>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <ModalDelete
        isOpen={isOpenModalDelete}
        onClose={setIsOpenModalDelete}
        callback={removeTestQuestion}
        loading={removeQuestionMutationResult.loading}
      />
    </div>
  );
};
const CreateAndEditQuestion: React.FC<CreateAndEditQuestionProps> = ({
  modal,
  skillType,
  dataTestQuestionInput,
  refetchTestQuestions,
}) => {
  const [idForced, setIdForced] = React.useState(0);
  return (
    <div>
      <CreateAndEditQuestionForm
        key={idForced}
        modal={modal}
        skillType={skillType}
        dataTestQuestionInput={dataTestQuestionInput}
        refetchTestQuestions={refetchTestQuestions}
        setIdForced={setIdForced}
      />
    </div>
  );
};

export default CreateAndEditQuestion;
