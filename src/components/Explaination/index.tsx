import React from "react";
import { Col, Row } from "reactstrap";
import { TestFragment, TestQuestionFragment } from "../../schema/schema";
import ListQuestions from "../Questions/ListQuestions";

interface ExplainationProps {
    questions: TestQuestionFragment[]; 
    testDetail: TestFragment;
    arrChecked: any;
    setArrChecked: any;
}

const Explaination : React.FC<ExplainationProps> = ({questions, testDetail, arrChecked, setArrChecked}) => {

    return (
        <div className="p-4">
            <h2>Review & Explanations</h2>
        <Row>
                <Col md="6">
                    {/* //List of questions */}
                    <ListQuestions questions={questions} testDetail={testDetail} arrChecked={arrChecked} setArrChecked={setArrChecked} isSuccessful/>
                </Col>
                <Col md="6">
                    {/* //Explaination */}
                  
                </Col>
        </Row>
        </div>
    );
}

export default Explaination;