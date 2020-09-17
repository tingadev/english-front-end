import { gql } from '@apollo/client';
import { QUESTION_FRAGMENT } from './Question';
import { PART_FRAGMENT } from './Part';


export const TEST_QUESTION_FRAGMENT = gql`
  fragment TestQuestion on TestQuestion {
    id
    question{
        ...Question
    }
    part{
        ...Part
    }
    order
  }
  ${QUESTION_FRAGMENT}
  ${PART_FRAGMENT}
`;

export const GET_TEST_QUESTIONS = gql `
  query getTestQuestions($testId: String!){
    getTestQuestions(testId: $testId){
      ...TestQuestion
    }
  }  
  ${TEST_QUESTION_FRAGMENT}
`

export const CREATE_TEST_QUESTION = gql `
  mutation createTestQuestion($data: TestQuestionInputId!){
    createTestQuestion(data: $data){
      ...TestQuestion
    }
  }
  ${TEST_QUESTION_FRAGMENT}
`

export const CREATE_LIST_TEST_QUESTIONS = gql `
  mutation createListTestQuestions($data: TestQuestionInputIds!){
    createListTestQuestions(data: $data){
      ...TestQuestion
    }
  }
  ${TEST_QUESTION_FRAGMENT}
`

export const REMOVE_TEST_QUESTION = gql `
  mutation removeTestQuestion($id: String!){
    removeTestQuestion(id: $id)
  }
`

