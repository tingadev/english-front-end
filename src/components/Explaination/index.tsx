import React from "react";
import { Col, Row } from "reactstrap";
import { TestFragment, TestQuestionFragment } from "../../schema/schema";
import QuestionPalette from "../../sections/Test/QuestionPalette";
import ListQuestions from "../Questions/ListQuestions";

interface ExplainationProps {
    testQuestions: TestQuestionFragment[]; 
    testDetail: TestFragment;
    arrChecked: any;
    setArrChecked: any;
}

const Explaination : React.FC<ExplainationProps> = ({testQuestions, testDetail, arrChecked, setArrChecked}) => {

    return (
        <div className="p-4" style={{ maxWidth: 1920 }}>
            <h2>Review & Explanations</h2>
        <Row>
                <Col md="8">
                    {/* //List of questions */}
                    <ListQuestions testQuestions={testQuestions} testDetail={testDetail} arrChecked={arrChecked} setArrChecked={setArrChecked} isSuccessful/>
                </Col>
                <Col md="4">
                    <QuestionPalette testQuestions={testQuestions} answered={arrChecked} isResult/>
                </Col>
        </Row>
        </div>
    );
}

export default Explaination;