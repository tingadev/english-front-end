import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import {
  SkillsType,
  QuestionFragment,
  TestFragment, TestQuestionInputId, useGetTestQuestionsLazyQuery, useGetTestLazyQuery, PartFragment, useGetPartsFromIdsLazyQuery, PartIdsInput
} from "../../../../schema/schema";
import ModalListQuestions from "./ModalListQuestions";
import Exam from "./TemplateCreateTest/Exam";
import ModalCreateQuestion from "./ModalCreateQuestion";
import { useParams } from "react-router-dom";
import { QuestionContext } from "./QuestionContext";
import ModalPart from "./ModalPart";



export interface ArrayQuestionIds {
  skillType: SkillsType,
  questions?: (QuestionFragment & { partId: string })[]
}
interface CreateAndEditTestProps {
}

const CreateAndEditTest: React.FC<CreateAndEditTestProps> = ({ }) => {
  const questionContext = React.useContext(QuestionContext);
  const { id } = useParams();
  // create and mark it draft
  const [getTestQuery, getTestResponse] = useGetTestLazyQuery();

  React.useEffect(() => {
    id && getTestQuery({
      variables: {
        id,
      }
    })
  }, [id])
  let testData: TestFragment | undefined;
  if (getTestResponse.data) {
    testData = getTestResponse.data.test;
  }
  const dataTestQuestionInput: TestQuestionInputId = {
    testId: testData && testData.id,
    partId: questionContext.partId,
  }
  

  const [testQuestionsQuery, testQuestionsResponse] = useGetTestQuestionsLazyQuery()
  const [partsQuery, partsQueryResponse] = useGetPartsFromIdsLazyQuery()
  const variablesTestQuestion = {
    testId: id
  }
  React.useEffect(() => {
    questionContext.setPartIds({
      ids: []
    })
    if(testData && testData.partAndAudioSecs?.length){
      const ids: string[] = [];
      testData.partAndAudioSecs.map((p) => {
        ids.push(p.partId!);
        questionContext.setPartIds({
          ids,
        })
      });
    }
  },[getTestResponse.data?.test])

  React.useEffect(() => {
    refetchTest();
  },[questionContext.updateTestMutationResult.data])
  React.useEffect(() => {
    questionContext.partIds?.ids && questionContext.partIds?.ids.length > 0 && partsQuery({
      variables: {
        data: questionContext.partIds
      }
    })
  },[questionContext.partIds?.ids.length])
  React.useEffect(() => {
    if (testData) {
      return;
    }
    testQuestionsQuery({
      variables: variablesTestQuestion,
    })
  }, [testData])
  const refetchTestQuestions = () => {
    testQuestionsResponse.refetch && testQuestionsResponse.refetch(variablesTestQuestion)
  }
  const refetchTest =  () => {
    getTestResponse.refetch && getTestResponse.refetch({id})
  }

  const refechParts = () => {
    partsQueryResponse.refetch && partsQueryResponse.refetch({data: questionContext.partIds})
  }
  const testQuestions = testQuestionsResponse.data?.getTestQuestions;
  if (getTestResponse.loading) {
    return <>{'...loading'}</>
  }
  const skillType = testData?.skillType!;
  const dataParts = partsQueryResponse.data?.getPartsFromIds;
  const partAndAudioSecs = testData?.partAndAudioSecs;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="title">Create Test {skillType}</h5>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12">
            <Exam
              dataParts={dataParts}
              skillType={skillType}
              questions={testQuestions}
              refetchTestQuestions={refetchTestQuestions}
              testData={testData}
              refetchTest={refetchTest}
            />
          </Col>
        </Row>
      </CardBody>
      <ModalListQuestions
        skillType={skillType}
        refetchTestQuestions={refetchTestQuestions}
        dataTestQuestionInput={dataTestQuestionInput}
      />
      <ModalCreateQuestion
        skillType={skillType}
        refetchTestQuestions={refetchTestQuestions}
        dataTestQuestionInput={dataTestQuestionInput}
      />
      <ModalPart
        skillType={skillType}
        dataParts={dataParts}
        partIds={questionContext.partIds}
        partAndAudioSecs={partAndAudioSecs}
        refechParts={refechParts}
        testId={testData?.id}
      />
    </Card>
  );
};

export default CreateAndEditTest;
