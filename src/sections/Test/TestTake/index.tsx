/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import QuestionPalette from "../QuestionPalette";
import QuestionItem from "../../../components/QuestionItem";
import Score from "../../../components/Score";
import { Switch, Route, useRouteMatch } from "react-router-dom";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testDetail: any;
}
const TestTaken: React.FC<TestTakenProps> = ({ testDetail }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  console.log(isSubmit)
  const questions = [
    {
      title: "Question 1",
      id: "1",
      text: "",
      question:
        "Marketing specialists have conducted extensive studies of what	______ customers to a particular product.",
      answers: [
        {
          keyAnswer: "A",
          answer: "attractive",
        },
        {
          keyAnswer: "B",
          answer: "attraction",
        },
        {
          keyAnswer: "C",
          answer: "attracts",
        },
        {
          keyAnswer: "D",
          answer: "attracting",
        },
      ],
      multiple: false,
      result: "D",
    },
    {
      title: "Question 2",
      id: "2",
      text: "",
      question:
        "Smart shoppers will _____ similar brands of an item before making a decision",
      answers: [
        {
          keyAnswer: "A",
          answer: "compare",
        },
        {
          keyAnswer: "B",
          answer: "comparison",
        },
        {
          keyAnswer: "C",
          answer: "comparative",
        },
        {
          keyAnswer: "D",
          answer: "comparable",
        },
      ],
      multiple: false,
      result: "B",
    },
    {
      title: "Question 3",
      id: "3",
      text: "",
      question:
        "If our work isn’t to your ______, please notify US within 60 days.",
      answers: [
        {
          keyAnswer: "A",
          answer: "satisfy",
        },
        {
          keyAnswer: "B",
          answer: "satisfactory",
        },
        {
          keyAnswer: "C",
          answer: "satisfaction",
        },
        {
          keyAnswer: "D",
          answer: "satisfied",
        },
      ],
      multiple: false,
      result: "D",
    },
    {
      title: "Question 4",
      id: "4",
      text: "",
      question: "Manufacturers like to know what features ______ find useful.",
      answers: [
        {
          keyAnswer: "A",
          answer: "consumers",
        },
        {
          keyAnswer: "B",
          answer: "consume",
        },
        {
          keyAnswer: "C",
          answer: "consumption",
        },
        {
          keyAnswer: "D",
          answer: "consumable",
        },
      ],
      multiple: false,
      result: "C",
    },
    {
      title: "Question 5",
      id: "5",
      text: "",
      question: "Without good ______ , good products can go unsold.",
      answers: [
        {
          keyAnswer: "A",
          answer: "market",
        },
        {
          keyAnswer: "B",
          answer: "marketable",
        },
        {
          keyAnswer: "C",
          answer: "marketed",
        },
        {
          keyAnswer: "D",
          answer: "marketing",
        },
      ],
      multiple: false,
      result: "A",
    },
    {
      title: "Question 6",
      id: "6",
      text: "",
      question:
        "A careful analysis of the _______ products on the market indicated that our product lacked innovation and optional features",
      answers: [
        {
          keyAnswer: "A",
          answer: "compete",
        },
        {
          keyAnswer: "B",
          answer: "competing",
        },
        {
          keyAnswer: "C",
          answer: "competed",
        },
        {
          keyAnswer: "D",
          answer: "competition",
        },
      ],
      multiple: false,
      result: "D",
    },
    {
      title: "Questions 7 - 9",
      id: "7",
      text: `<p>Dear Valued Customer,<br/>
        Smart consumers like yourself are concerned about your family’s nutrition. Health is a top priority, and so is value. You want high-quality food products at competitive prices. That’s why we are introducing Farm Fresh, our new line of 100% natural and organic frozen dinners. We know you’ll love the great natural taste of Farm Fresh dinners such as Turkey and Wild Rice, Wild Salmon with Spring Greens, and Country Chicken with Vegetables. Farm Fresh dinners are
        (7) _______ packaged with 100% recyclable materials. But we don’t have to use a lot of fancy words to convince you to enjoy Farm Fresh frozen dinners. We will let their great taste (0) _______ you to keep coming back for more. Please use the enclosed coupons to buy up to six Farm Fresh dinners of your choice at 25% off the usual retail price. We know you (9) ________ by the great taste and the great price.<br/>
        Sincerely,<br/>
        Rosa Martello<br/>
        National Frozen Foods, Inc.</p>
        `,
      question: "",
      description:
        "Choose the word or phrase that best completes the sentence.",
      answers: [
        {
          keyAnswer: "A",
          answer: "attract",
        },
        {
          keyAnswer: "B",
          answer: "attractive",
        },
        {
          keyAnswer: "C",
          answer: "attractively",
        },
        {
          keyAnswer: "D",
          answer: "attraction",
        },
      ],
      multiple: true,
      result: "A",
    },
    {
      title: "",
      id: "8",
      text: ``,
      question: "",
      answers: [
        {
          keyAnswer: "A",
          answer: "persuade",
        },
        {
          keyAnswer: "B",
          answer: "persuades",
        },
        {
          keyAnswer: "C",
          answer: "to persuade",
        },
        {
          keyAnswer: "D",
          answer: "will persuade",
        },
      ],
      multiple: true,
      child: true,
      result: "B",
    },
    {
      title: "",
      id: "9",
      text: ``,
      question: "",
      answers: [
        {
          keyAnswer: "A",
          answer: "satisfy",
        },
        {
          keyAnswer: "B",
          answer: "satisfied",
        },
        {
          keyAnswer: "C",
          answer: "will satisfy",
        },
        {
          keyAnswer: "D",
          answer: "will be satisfied",
        },
      ],
      multiple: true,
      child: true,
      result: "C",
    },
    {
      title: "Questions 10 - 14",
      id: "10",
      text: `<p style="text-align: center;"><b>Catherine Cosmetics Company</b><br/>
        Sales Department Meeting Report<br/>
        March 29, 20—</p>        
        <p style="text-align: justify;">We reviewed the sales figures for the past quarter. We are currently experiencing a signif¬icant drop in sales in our hair care products. This has been going on since the beginning of the year when we introduced the improved version of our top-selling hair care line, Catherines Cuiis. Our advertising has not been successful in convincing more consumers to buy these products. We know there is a market for products such as these manufactured with 100% natural ingredients and no testing on animals. In fact, our competitors are doing quite well in this area and have been for a number of years. We know from our research that the popularity of all-natural cosmetic products is more than just a passing fad, and this is why we decided to branch out into this area. We have carefully compared our products to those of our three largest competitors. We have looked at product ingredients, packag¬ing, target consumers, pricing, and sales strategies. Our product is similar, or even better, in all ways but one. Our packaging is significantly less eye-catching than that of our com¬petitors, and it does not convey the important aspects of the products to the consumer, that is, that these products are entirely made with natural ingredients. Therefore, in order to attract more customers, we recommend employing a new designer to create better pack¬aging for the Catherine’s Curls line of products.</p>`,
      question: "When did the sales department have a meeting?",
      description: "Questions 10 - 14 refer to the following report",
      answers: [
        {
          keyAnswer: "A",
          answer: "At the beginning of the year",
        },
        {
          keyAnswer: "B",
          answer: "In March",
        },
        {
          keyAnswer: "C",
          answer: "A quarter of a year ago",
        },
        {
          keyAnswer: "D",
          answer: "At the end of last year",
        },
      ],
      multiple: true,
      child: true,
      result: "A",
    },
    {
      title: "",
      id: "11",
      text: ``,
      question:
        "Which of the following might be part of the Catherine’s Curls line of products?",
      answers: [
        {
          keyAnswer: "A",
          answer: "Shampoo.",
        },
        {
          keyAnswer: "B",
          answer: "Hand lotion.",
        },
        {
          keyAnswer: "C",
          answer: "Nail polish.",
        },
        {
          keyAnswer: "D",
          answer: "Lipstick",
        },
      ],
      multiple: true,
      child: true,
      result: "D",
    },
    {
      title: "",
      id: "12",
      text: ``,
      question:
        "According to the report, why are fewer people buying Catherine’s Curls products?",
      answers: [
        {
          keyAnswer: "A",
          answer: "The prices are too high.",
        },
        {
          keyAnswer: "B",
          answer: "The ingredients aren’t natural.",
        },
        {
          keyAnswer: "C",
          answer: "The packages aren’t attractive.",
        },
        {
          keyAnswer: "D",
          answer: "The type of product is not popular.",
        },
      ],
      multiple: true,
      child: true,
      result: "D",
    },
    {
      title: "",
      id: "13",
      text: ``,
      question: "The word market in line 5 is closest in meaning to",
      answers: [
        {
          keyAnswer: "A",
          answer: "product",
        },
        {
          keyAnswer: "B",
          answer: "factory",
        },
        {
          keyAnswer: "C",
          answer: "purchase",
        },
        {
          keyAnswer: "D",
          answer: "demand",
        },
      ],
      multiple: true,
      child: true,
      result: "B",
    },
    {
      title: "",
      id: "14",
      text: ``,
      question: "The word fad in line 8 is closest in meaning to",
      answers: [
        {
          keyAnswer: "A",
          answer: "need",
        },
        {
          keyAnswer: "B",
          answer: "fashion",
        },
        {
          keyAnswer: "C",
          answer: "event",
        },
        {
          keyAnswer: "D",
          answer: "wish",
        },
      ],
      multiple: true,
      child: true,
      result: "A",
    },
  ];
  let testResult : any
  const match = useRouteMatch();

  return (
    <>
      <Row>
        <Switch>
          <Route path={`${match.path}/result`}>
            <Score questions={questions} arrChecked={arrChecked} testDetail={testDetail} />
          </Route>
          <Route path={`${match.path}`}>
          <Col md="8">
            {questions.map((question, index) => {
              return (
                <QuestionItem
                  questionProps={question}
                  arrChecked={arrChecked}
                  setArrChecked={setArrChecked}
                  key={index}
                />
              );
            })}
          </Col>
          <Col md="4">
              <QuestionPalette
                setIsSubmit={setIsSubmit}
                questions={questions}
                answered={arrChecked}
              />
          </Col>
          </Route>
        </Switch>
      </Row>
    </>
  );
};

export default TestTaken;
