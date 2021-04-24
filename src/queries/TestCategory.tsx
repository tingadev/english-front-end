import { gql } from '@apollo/client';
import { TEST_FRAGMENT } from './Test';


export const TEST_CATEGORY_FRAGMENT = gql`
  fragment TestCategory on TestCategory {
    id
    testCategoryName
    certificateType
    tests{
        ...Test
    }
    testGroup{
      id
    }
    isPublished
    displayOrder
    displayOrderGroup
  }
  ${TEST_FRAGMENT}
`;

export const TEST_CATEGORY_INFO_FRAGMENT = gql`
  fragment TestCategoryInfo on TestCategory {
    id
    testCategoryName
    certificateType
    testGroup{
      id
    }
    isPublished
    displayOrder
    displayOrderGroup
    createdAt
  }
`;

export const CREATE_TEST_CATEGORY = gql`
  mutation createTestCategory($data: NewTestCategoryInput!) {
    createTestCategory(data: $data) {
      ...TestCategory
    }
  }
  ${TEST_CATEGORY_FRAGMENT}
`;
export const UPDATE_TEST_CATEGORY = gql`
  mutation updateTestCategory($data: NewTestCategoryInput!) {
    updateTestCategory(data: $data) {
      ...TestCategory
    }
  }
  ${TEST_CATEGORY_FRAGMENT}
`;

export const GET_TEST_CATEGORY = gql `
  query getTestCategory($id: String!) {
    getTestCategory(id: $id) {
      ...TestCategory
    }
  }
  ${TEST_CATEGORY_FRAGMENT}
`;

export const REMOVE_TEST_CATEGORY = gql `
  mutation removeTestCategory($id: String!){
    removeTestCategory(id: $id)
  }
`

export const GET_TEST_CATEGORIES = gql `
  query getTestCategories($data: TestCategoryFilterInput!) {
    getTestCategories(data: $data) {
      testCategories{
        ...TestCategory
      }
      total
      nextCursor
    }
  }
  ${TEST_CATEGORY_FRAGMENT}
`;


export const GET_TEST_CATEGORIES_INFO = gql `
  query getTestCategoriesInfo($data: TestCategoryFilterInput!) {
    getTestCategories(data: $data) {
      testCategories{
        ...TestCategoryInfo
      }
      total
      nextCursor
    }
  }
  ${TEST_CATEGORY_INFO_FRAGMENT}
`;


