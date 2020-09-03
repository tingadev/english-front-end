import { gql } from '@apollo/client';
import { TEST_QUESTION_FRAGMENT } from './TestQuestion';


export const TEST_FRAGMENT = gql`
  fragment Test on Test {
    id
    testName
    description
    skillType
    certificateType
    audioPartSecs{
        partId
        autdioSecs
    }
    testQuestions{
        ...TestQuestion
    }
    testCategory{
        id
    }
    isPublished
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

export const GET_TEST = gql `
  query getTest($id: String!) {
    test(id: $id) {
      ...Test
    }
  }
  ${TEST_FRAGMENT}
`;

export const GET_TESTS = gql `
  query getTests($testCategoryId: String!) {
      tests(testCategoryId: $testCategoryId) {
        ...Test
      }
  }
  ${TEST_FRAGMENT}
`;

