import { gql } from '@apollo/client';

export const QUESTION_FRAGMENT_GROUP = gql`
  fragment QuestionGroup on Question {
    id
    questionName
    questionGroupName
    audioSec
    audioSecVN
    questionType
    image
    answers{
        keyAnswer
        answerContent
    }
    content
    description
    skillType
    certificateType
    explaination
    result
    questionGroupOrder
    isGroup
  }
`;

export const QUESTION_FRAGMENT = gql`
  fragment Question on Question {
    id
    questionName
    questionGroupName
    audioSec
    audioSecVN
    questionType
    image
    answers{
        keyAnswer
        answerContent
    }
    content
    description
    skillType
    certificateType
    explaination
    result
    questionGroupOrder
    isGroup
    questionGroups{
      ...QuestionGroup
    }
  }
  ${QUESTION_FRAGMENT_GROUP}
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion($data: NewQuestionInput!) {
    createQuestion(data: $data) {
      ...Question
    }
  }
  ${QUESTION_FRAGMENT}
`;

export const UPDATE_QUESTION = gql`
  mutation updateQuestion($data: NewQuestionInput!) {
    updateQuestion(data: $data) {
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
  query getQuestions($data: QuestionFilterTypeInput!) {
      questions(questionFilterType: $data) {
        questions{
          ...Question
        }
        total
        nextCursor

      }
  }
  ${QUESTION_FRAGMENT}
`;

export const REMOVE_QUESTION = gql `
  mutation removeQuestion($id: String!) {
    removeQuestion(id: $id)
  }
`;
