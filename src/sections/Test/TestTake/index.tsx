/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import QuestionPalette from "../QuestionPalette";
import QuestionsItem from "../../../components/Questions/QuestionsItem";
import Score from "../../../components/Score";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { SkillsType, TestFragment, TestQuestionFragment } from "../../../schema/schema";
import config from "../../../config";
import { map } from "lodash";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testsData?: TestFragment[] | null;
}
const TestTaken: React.FC<TestTakenProps> = ({ testsData }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { testId } = useParams();
  const testDetail = testsData?.find(test => test.id === testId)
  console.log(useParams());
  const detailsTest = [
    {
      id: "1",
      skill: "reading",
      description:
        "In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.",
      audio: null,
      questions: [
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
          question:
            "Manufacturers like to know what features ______ find useful.",
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
      ],
    },
    {
      id: "2",
      skill: "listening",
      description:
        "In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.",
      audio: "abc",
      questions: [
        {
          part: "Part 1",
          timeAudioSecs: 0,
          imgs : ['/images/toiec/ETS 2020 TEST 1 - Pic 1.png', '/images/toiec/ETS 2020 TEST 1 - Pic 2.png', '/images/toiec/ETS 2020 TEST 1 - Pic 3.png', '/images/toiec/ETS 2020 TEST 1 - Pic 4.png' , '/images/toiec/ETS 2020 TEST 1 - Pic 5.png', '/images/toiec/ETS 2020 TEST 1 - Pic 6.png'],
          description: `<b>Directions</b>: For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time.`,
          questions: [
            {
              title: "Question 1",
              id: "1",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "A woman is painting ahouse.",
                },
                {
                  keyAnswer: "B",
                  answer: "A woman is watering a plant.",
                },
                {
                  keyAnswer: "C",
                  answer: "A woman is fixing a door.",
                },
                {
                  keyAnswer: "D",
                  answer: "A woman is sweeping a walkway.",
                },
              ],
              multiple: false,
              result: "B",
            },
            {
              title: "Question 2",
              id: "2",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "They're folding some papers.",
                },
                {
                  keyAnswer: "B",
                  answer: "They're putting a picture in a frame.",
                },
                {
                  keyAnswer: "C",
                  answer: "They're studying a drawing.",
                },
                {
                  keyAnswer: "D",
                  answer: "They're closing a window.",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 3",
              id: "3",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "The man is turning on a light.",
                },
                {
                  keyAnswer: "B",
                  answer: "The man is giving the woman a book.",
                },
                {
                  keyAnswer: "C",
                  answer: "The woman is posting signs on a wall.",
                },
                {
                  keyAnswer: "D",
                  answer: "The woman is typing on a keyboard.",
                },
              ],
              multiple: false,
              result: "D",
            },
            {
              title: "Question 4",
              id: "4",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Some clothing has been hung up.",
                },
                {
                  keyAnswer: "B",
                  answer: "Some boxes are stacked on a cart.",
                },
                {
                  keyAnswer: "C",
                  answer: "A bag has fallen on the floor.",
                },
                {
                  keyAnswer: "D",
                  answer: "A chair has been pushed under a desk.",
                },
              ],
              multiple: false,
              result: "A",
            },
            {
              title: "Question 5",
              id: "5",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Some customers are paying for their meals.",
                },
                {
                  keyAnswer: "B",
                  answer: "Some workers are washing dishes.",
                },
                {
                  keyAnswer: "C",
                  answer: "Some food is being placed in a refrigerator.",
                },
                {
                  keyAnswer: "D",
                  answer: "Some large cooking pots are on a counter.",
                },
              ],
              multiple: false,
              result: "D",
            },
            {
              title: "Question 6",
              id: "6",
              text: "",
              question: "",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Runners are lined up for the start of a race",
                },
                {
                  keyAnswer: "B",
                  answer: "Some people are cheering for a sports team.",
                },
                {
                  keyAnswer: "C",
                  answer: "An athletic field is located near some trees.",
                },
                {
                  keyAnswer: "D",
                  answer: "Lawn mowers are being used to cut the grass.",
                },
              ],
              multiple: false,
              result: "C",
            },
          ],
        },
        {
          part: "Part 2",
          timeAudioSecs: 60 * 4 + 20,
          description: `<b>Directions</b>: You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet. `,
          questions: [
            {
              title: "Question 7",
              id: "7",
              text: "",
              question: "Who wants to organize the patient files?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Min-Su would like to.",
                },
                {
                  keyAnswer: "B",
                  answer: "Our phone number has changed.",
                },
                {
                  keyAnswer: "C",
                  answer: "A well-run organization.",
                },
              ],
              multiple: false,
              result: "A",
            },
            {
              title: "Question 8",
              id: "8",
              text: "",
              question: "Why didn't Miranda shut down the computers yesterday?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Yes, my new laptop.",
                },
                {
                  keyAnswer: "B",
                  answer: "Outside of office 101.",
                },
                {
                  keyAnswer: "C",
                  answer: "Because she left early.",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 9",
              id: "9",
              text: "",
              question: "Would you like the pie or the pudding for dessert?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "About five dollars.",
                },
                {
                  keyAnswer: "B",
                  answer: "The pie sounds delicious.",
                },
                {
                  keyAnswer: "C",
                  answer: "1 just put it on.",
                },
              ],
              multiple: false,
              result: "B",
            },
            {
              title: "Question 10",
              id: "10",
              text: "",
              question: "Didn't you read Mr. Kim's memo?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "He used to live there.",
                },
                {
                  keyAnswer: "B",
                  answer: "A newspaper article.",
                },
                {
                  keyAnswer: "C",
                  answer: "(C)	Yes, 1 read it this morning.",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 11",
              id: "11",
              text: "",
              question: "We can put a seafood dish on the menu, can't we?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "They're in a stack over there.",
                },
                {
                  keyAnswer: "B",
                  answer: "A restaurant with a view of the ocean.",
                },
                {
                  keyAnswer: "C",
                  answer: "We can if you'd like.",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 12",
              id: "12",
              text: "",
              question: "Who managed the flower store last year?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "No, a monthly order.",
                },
                {
                  keyAnswer: "B",
                  answer: "Some yellow roses, please.",
                },
                {
                  keyAnswer: "C",
                  answer: "Marta did it.",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 13",
              id: "13",
              text: "",
              question:
                "Do you mind filling out our customer satisfaction survey?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "I filled the tank in the car yesterday.",
                },
                {
                  keyAnswer: "B",
                  answer: "Sure, I can do that.",
                },
                {
                  keyAnswer: "C",
                  answer: "(C)	The stairs are around the comer.",
                },
              ],
              multiple: false,
              result: "C",
            },
          ],
        },
        {
          part: "Part 3",
          timeAudioSecs: 60 * 13 + 20,
          description: `<b>Directions</b>: You will hear some conversations between two or more people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The conversations will not be printed in your test book and will be spoken only one time.`,
          questions: [
            {
              title: "Question 14",
              id: "14",
              text: "",
              question: "Where is the conversation most likely taking place?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "At a hardware store",
                },
                {
                  keyAnswer: "B",
                  answer: "At a clothing shop",
                },
                {
                  keyAnswer: "C",
                  answer: "At a bakery",
                },
                {
                  keyAnswer: "D",
                  answer: "At a pharmacy",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 15",
              id: "15",
              text: "",
              question: "How do the speakers hope to increase sales?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "By advertising online",
                },
                {
                  keyAnswer: "B",
                  answer: "By offering a new product",
                },
                {
                  keyAnswer: "C",
                  answer: "By providing free delivery",
                },
                {
                  keyAnswer: "D",
                  answer: "By discounting some items",
                },
              ],
              multiple: false,
              result: "B",
            },
            {
              title: "Question 16",
              id: "16",
              text: "",
              question: "Look at the graphic. Which step in the procedure does the woman mention?",
              img: "/images/toiec/Picture66.png",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Step 1",
                },
                {
                  keyAnswer: "B",
                  answer: "Step 2",
                },
                {
                  keyAnswer: "C",
                  answer: "Step 3",
                },
                {
                  keyAnswer: "D",
                  answer: "Step 4",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 17",
              id: "17",
              text: "",
              img: "/images/toiec/Picture69.png",
              question: "Look at the graphic. Which month’s sales figures does the woman ask about?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "January",
                },
                {
                  keyAnswer: "B",
                  answer: "February",
                },
                {
                  keyAnswer: "C",
                  answer: "March",
                },
                {
                  keyAnswer: "D",
                  answer: "April",
                },
              ],
              multiple: false,
              result: "B",
            },
          ],
        },
        {
          part: "Part 4",
          timeAudioSecs: 60 * 31 + 21,
          description: `<b>Directions</b>: You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The talks will not be printed in your test book and will be spoken only one time. `,
          questions: [
            {
              title: "Question 18",
              id: "18",
              text: "",
              question: "Where is the conversation most likely taking place?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "A retirement party",
                },
                {
                  keyAnswer: "B",
                  answer: "A holiday parade",
                },
                {
                  keyAnswer: "C",
                  answer: "A business workshop",
                },
                {
                  keyAnswer: "D",
                  answer: "A company picnic",
                },
              ],
              multiple: false,
              result: "B",
            },
            {
              title: "Question 19",
              id: "19",
              text: "",
              question: "Where do the listeners work?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "At a bank",
                },
                {
                  keyAnswer: "B",
                  answer: "At an amusement park",
                },
                {
                  keyAnswer: "C",
                  answer: "At a restaurant",
                },
                {
                  keyAnswer: "D",
                  answer: "At a police station",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 20",
              id: "20",
              text: "",
              question: "Look at the graphic. On which date is the talk being given?",
              img: "/images/toiec/Picture95.png",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "June 3",
                },
                {
                  keyAnswer: "B",
                  answer: "June 10",
                },
                {
                  keyAnswer: "C",
                  answer: "June 17",
                },
                {
                  keyAnswer: "D",
                  answer: "June 24",
                },
              ],
              multiple: false,
              result: "C",
            },
            {
              title: "Question 21",
              id: "21",
              text: "",
              img: "/images/toiec/Picture99.png",
              question: "Look at the graphic. Where will herbs be planted?",
              answers: [
                {
                  keyAnswer: "A",
                  answer: "Plot 1",
                },
                {
                  keyAnswer: "B",
                  answer: "Plot 2",
                },
                {
                  keyAnswer: "C",
                  answer: "Plot 3",
                },
                {
                  keyAnswer: "D",
                  answer: "Plot 4",
                },
              ],
              multiple: false,
              result: "C",
            },
          ],
        },
      ],
    },
  ];
  const match = useRouteMatch();
  const parts = testDetail?.partAndAudioSecs;
  let toiecReadingTest: any;
  let toiecListeningTest: any;
  // switch (typeSkill) {
  //   case "reading":
  //     toiecReadingTest = detailsTest.find((ele) => ele.skill === typeSkill);
  //     questions = toiecReadingTest.questions;
  //     break;
  //   case "listening":
  //     toiecListeningTest = detailsTest.find((ele) => ele.skill === typeSkill);
  //     toiecListeningTest.questions.forEach((e: any) => {
  //       questions = questions.concat(e.questions);
  //     });
  //     break;
  // }

  const questions = testDetail?.testQuestions;

  return (
    <>
      <Row>
        <Switch>
          <Route path={`${match.path}/result`}>
            <Score
              questions={questions}
              arrChecked={arrChecked}
              testDetail={testDetail}
            />
          </Route>
          <Route path={`${match.path}`}>
            <Col md="8">
              {testDetail?.skillType === SkillsType.Listening && testDetail.audioUrl && (
                <ReactAudioPlayer
                  src={config.PATH_IMAGE + testDetail.audioUrl}
                  className="mb-4"
                  controls
                  controlsList={"nodownload"}
                  id='audio1listening'
                />
              )}
              {/* {typeSkill === "listening" && (
                <div className="mb-4">
                  <i className="font-12 ">{questionsListening?.description}</i>
                </div>
              )} */}
              {parts && parts.map((part, index_part) => {
                const partDetail = questions?.find(qp => qp.part.id === part.partId)
                return (
                  <div key={index_part}>
                    <h3>{partDetail?.part.partName}</h3>
                    <p dangerouslySetInnerHTML={{__html: partDetail?.part.description || ''}}/>
                  {questions &&
                  questions.map(
                    (question: TestQuestionFragment, index: number) => {
                      if(question.part.id === part.partId)
                      return (
                        <QuestionsItem
                        testQuestion={question}
                          arrChecked={arrChecked}
                          setArrChecked={setArrChecked}
                          key={index}
                        />
                      );
                    }
                  )}
                  </div>
                )
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
