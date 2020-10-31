import React from "react";
import { Col, Row } from "reactstrap";
import { TestFragment, TestQuestionFragment } from "../../schema/schema";
import QuestionPalette from "../../sections/Test/QuestionPalette";
import ListQuestions from "../Questions/ListQuestions";

interface ExplainationProps {
    questions: TestQuestionFragment[]; 
    testDetail: TestFragment;
    arrChecked: any;
    setArrChecked: any;
}

const Explaination : React.FC<ExplainationProps> = ({questions, testDetail, arrChecked, setArrChecked}) => {

    return (
        <div className="p-4" style={{ maxWidth: 1920 }}>
            <h2>Review & Explanations</h2>
        <Row>
                <Col md="8">
                    {/* //List of questions */}
                    <ListQuestions questions={questions} testDetail={testDetail} arrChecked={arrChecked} setArrChecked={setArrChecked} isSuccessful/>
                </Col>
                <Col md="4">
                    <QuestionPalette questions={questions} answered={arrChecked} isResult/>
                </Col>
        </Row>
        </div>
    );
}

export default Explaination;