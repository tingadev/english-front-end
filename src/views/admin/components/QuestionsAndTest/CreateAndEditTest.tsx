import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form
} from "reactstrap";
import {
  SkillsType,
  useGetPartsQuery,
  EnglishCertificateType,
  QuestionFragment,
  NewTestInput,
  TestFragment, TestQuestionInputId, useGetTestQuestionsLazyQuery, useGetTestLazyQuery
} from "../../../../schema/schema";
import ModalListQuestions from "./ModalListQuestions";
import Exam from "./TemplateCreateTest/Exam";
import ModalCreateQuestion from "./ModalCreateQuestion";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/UppercaseFirstLetter";



export interface ArrayQuestionIds {
  skillType: SkillsType,
  questions?: (QuestionFragment & {partId: string})[]
}
interface CreateAndEditTestProps {
}

const CreateAndEditTest: React.FC<CreateAndEditTestProps> = ({}) => {
  const { id } = useParams();
  // create and mark it draft
  const [getTestQuery, getTestResponse] = useGetTestLazyQuery();

  React.useEffect(() => {
    id && getTestQuery({
      variables: {
        id,
      }
    })
  },[id])
  let testData: TestFragment | undefined;
  if(getTestResponse.data) {
    testData = getTestResponse.data.test;
  }
  const [partId, setPartId] = React.useState('');
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenModalCreateQuestion, setIsOpenModalCreateQuestion] = React.useState(false);

 const dataTestQuestionInput: TestQuestionInputId = {
   testId: testData && testData.id,
   partId,
 }
  const {data, loading} = useGetPartsQuery({
    variables: {
      certificateType: EnglishCertificateType.Toiec,
    },
  });
  
  const [testQuestionsQuery, testQuestionsResponse] = useGetTestQuestionsLazyQuery()
  const variablesTestQuestion = {
    testId : id
  }
  React.useEffect(() => {
    if(testData && testData?.id){
      return;
    }
    testQuestionsQuery({
      variables: variablesTestQuestion,
    })
  },[testData])
  const refetchTestQuestions = () => {
    testQuestionsResponse.refetch && testQuestionsResponse.refetch(variablesTestQuestion)
  }
  const testQuestions = testQuestionsResponse.data?.getTestQuestions;
  if(getTestResponse.loading || loading){
    return <>{'...loading'}</>
  }
  const skillType = testData?.skillType!;
  const dataParts = data?.parts;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
      <h5 className="title">Create Test {skillType}</h5>
       
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12">
            <Exam
              setIsOpenModal={setIsOpenModal}
              dataParts={dataParts}
              skillType={skillType}
              setPartId={setPartId}
              questions={testQuestions}
              setIsOpenModalCreateQuestion={setIsOpenModalCreateQuestion}
              refetchTestQuestions={refetchTestQuestions}
            />
          </Col>
        </Row>
      </CardBody>
      <Form></Form>
      <ModalListQuestions
        skillType={skillType}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        refetchTestQuestions={refetchTestQuestions}
        dataTestQuestionInput={dataTestQuestionInput}
      />

      <ModalCreateQuestion
        skillType={skillType}
        isOpenModalCreateQuestion={isOpenModalCreateQuestion}
        setIsOpenModalCreateQuestion={setIsOpenModalCreateQuestion}
        partId={partId}
        certificateType={EnglishCertificateType.Toiec}
      />
    </Card>
  );
};

export default CreateAndEditTest;
