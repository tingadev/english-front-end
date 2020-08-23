/*eslint-disable*/
import React from "react";
import QuestionsItem from "./QuestionsItem";
import { Button } from "reactstrap";

interface QuestionsGroupProps {
    questionsGroup: any;
    arrChecked: any[];
    setArrChecked: (value: any) => void;
   
}
const QuestionsGroup: React.FC<QuestionsGroupProps> = ({
    questionsGroup,
    arrChecked,
    setArrChecked,
}) => {
    const seekAudio = (secs: number) => {
        const audio = document.getElementById('audio1listening') as HTMLAudioElement;
        audio!.currentTime = secs;
        audio!.play();
    }
  return (
    <div>
            
            <div className="mb-3 d-flex justify-content-between flex-wrap">
                <h3 className="font-weight-bold mb-2">{questionsGroup.part}</h3>
                <Button className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary" onClick={() => {
                    seekAudio(questionsGroup.timeAudioSecs)
                }}>Listen from here</Button>
                <i className="d-block w-100" dangerouslySetInnerHTML={{ __html: questionsGroup.description }}/>
                <div className="w-100 text-center">
                    {questionsGroup.imgs && questionsGroup.imgs.map((img : any, index: number) => {
                        // const src = '../../assets/img/toiec/ETS 2020 TEST 1 - Pic 1.png'
                        return (
                            <img key={index} src={process.env.PUBLIC_URL + img} />
                        )
                    })}
                </div>
            </div>
            {questionsGroup.questions.map((question: any, index: any) => {
                return (
                    <QuestionsItem
                    questionProps={question}
                    arrChecked={arrChecked}
                    setArrChecked={setArrChecked}
                    key={index}
                  />
                )
            })}
     
    </div>
  );
};

export default QuestionsGroup;
