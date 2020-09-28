import { gql } from '@apollo/client';
import { TEST_QUESTION_FRAGMENT } from './TestQuestion';


export const TEST_FRAGMENT = gql`
  fragment Test on Test {
    id
    testName
    description
    skillType
    certificateType
    explaination
    audioUrl
    partAndAudioSecs{
        partId
        autdioSecs
        displayOrder
    }
    testQuestions{
        ...TestQuestion
    }
    isPublished
    displayOrder
    displayOrderCategory
  }
  ${TEST_QUESTION_FRAGMENT}
`;

export const CREATE_TEST = gql`
  mutation createTest($data: NewTestInput!) {
    createTest(data: $data) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;
export const UPDATE_TEST = gql`
  mutation updateTest($data: NewTestInput!) {
    updateTest(data: $data) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;

export const UPDATE_TESTS = gql`
  mutation updateTests($data: TestsUpdateInput!) {
    updateTests(data: $data) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;

export const REMOVE_TEST_FROM_CAT = gql`
  mutation removeFromCat($id: String!) {
    removeFromCat(id: $id) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;

export const GET_TEST = gql `
  query getTest($id: String!) {
    test(id: $id) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;

export const REMOVE_TEST = gql `
  mutation removeTest($id: String!){
    removeTest(id: $id)
  }
`

export const GET_TESTS = gql `
  query getTests($data: TestFilterInput!) {
    getTests(data: $data) {
      tests{
        ...Test
      }
      total,
      nextCursor
    }
  }
  ${TEST_FRAGMENT}
`;


