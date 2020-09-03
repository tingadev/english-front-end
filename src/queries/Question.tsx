import { gql } from '@apollo/client';


export const QUESTION_FRAGMENT = gql`
  fragment Question on Question {
    id
    questionName
    audioSec
    questionType
    answers{
        keyAnswer
        answerContent
    }
    content
    description
    skillType
    certificateType
  }
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion($data: NewQuestionInput!) {
    createQuestion(data: $data) {
      ...Question
    }
  }
  ${QUESTION_FRAGMENT}
`;

export const GET_QUESTION = gql `
  query getQuestion($id: String!) {
    question(id: $id) {
      ...Question
    }
  }
  ${QUESTION_FRAGMENT}
`;

export const GET_QUESTIONS = gql `
  query getQuestions($questionFilterType: QuestionFilterTypeInput!) {
      questions(questionFilterType: $questionFilterType) {
        ...Question
      }
  }
  ${QUESTION_FRAGMENT}
`;
