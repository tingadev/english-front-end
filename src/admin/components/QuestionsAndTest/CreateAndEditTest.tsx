import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  Button,
  NavItem,
  Nav,
  NavLink,
  TabPane,
  TabContent,
} from "reactstrap";
import {
  SkillsType,
  useGetPartsQuery,
  EnglishCertificateType,
  QuestionFragment,
  useCreateTestMutation,
  NewTestInput,
  TestFragment,
} from "../../../schema/schema";
import ModalListQuestions from "./ModalListQuestions";
import Exam from "./TemplateCreateTest/Exam";
import ModalCreateQuestion from "./ModalCreateQuestion";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/UppercaseFirstLetter";

const TemplateOptions = [
  {
    templateName: SkillsType.Listening,
  },
  {
    templateName: SkillsType.Reading,
  },
];

export interface ArrayQuestionIds {
  skillType: SkillsType,
  questions?: (QuestionFragment & {partId: string})[]
}
interface CreateAndEditTestProps {
}

const CreateAndEditTest: React.FC<CreateAndEditTestProps> = ({}) => {
  const {skillTypeParam} = useParams();
  const skillType = capitalizeFirstLetter(skillTypeParam) as SkillsType;
  // create and mark it draft
  const [createTestMutation, resultCreateTestMutation] = useCreateTestMutation();
  const dataCreateTest : NewTestInput = {
    testName: '',
    isPublished: false,
    description: '',
    skillType,
    certificateType: EnglishCertificateType.Toiec,
  }
  React.useEffect(() => {
    createTestMutation({
      variables: {
        data: dataCreateTest,
      }
    })
  },[])
 
  let testData: TestFragment ;
  if(resultCreateTestMutation.data) {
    testData = resultCreateTestMutation.data.createTest;
  }

 

  const [partId, setPartId] = React.useState('');
  const [arrQuestionIds, setArrQuestionIds] = React.useState<ArrayQuestionIds[]>();
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenModalCreateQuestion, setIsOpenModalCreateQuestion] = React.useState(false);

 
  const {data, loading} = useGetPartsQuery({
    variables: {
      certificateType: EnglishCertificateType.Toiec,
    },
  });
  React.useEffect(() => {
    const temp : ArrayQuestionIds[] =  [
      {
        skillType: SkillsType.Listening,
        questions: [],
      },
      {
        skillType: SkillsType.Reading,
        questions: [],
      },
    ]
    setArrQuestionIds(temp);
  },[])
  if(resultCreateTestMutation.loading || loading){
    return <>{'...loading'}</>
  }
  const dataParts = data?.parts;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="title">Create Test</h5>
       
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12">
            <Exam
              setIsOpenModal={setIsOpenModal}
              dataParts={dataParts}
              skillType={skillType}
              setPartId={setPartId}
              setIsOpenModalCreateQuestion={setIsOpenModalCreateQuestion}
            />
          </Col>
        </Row>
      </CardBody>
      <Form></Form>
      <ModalListQuestions
        skillType={skillType}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        arrQuestionIds={arrQuestionIds}
        setArrQuestionIds={setArrQuestionIds}
        partId={partId}
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
