import { gql } from '@apollo/client';
import { TEST_CATEGORY_FRAGMENT } from './TestCategory';


export const TEST_GROUP_FRAGMENT = gql`
  fragment TestGroup on TestGroup {
    id
    testGroupName
    parentId
    certificateType
    link
    testCategories{
        ...TestCategory
    }
    isPublished
    displayOrder
  }
  ${TEST_CATEGORY_FRAGMENT}
`;

export const CREATE_TEST_GROUP = gql`
  mutation createTestGroup($data: NewTestGroupInput!) {
    createTestGroup(data: $data) {
      ...TestGroup
    }
  }
  ${TEST_GROUP_FRAGMENT}
`;
export const UPDATE_TEST_GROUP = gql`
  mutation updateTestGroup($data: NewTestGroupInput!) {
    updateTestGroup(data: $data) {
      ...TestGroup
    }
  }
  ${TEST_GROUP_FRAGMENT}
`;

export const GET_TEST_GROUP = gql `
  query getTestGroup($id: String!) {
    getTestGroup(id: $id) {
      ...TestGroup
    }
  }
  ${TEST_GROUP_FRAGMENT}
`;

export const GET_TEST_GROUPS = gql `
  query getTestGroups($data: TestGroupFilterInput!) {
    getTestGroups(data: $data) {
      testGroups{
        ...TestGroup
      }
      total
      nextCursor
    }
  }
  ${TEST_GROUP_FRAGMENT}
`;
export const REMOVE_TEST_GROUP = gql `
  mutation removeTestGroup($id: String!){
    removeTestGroup(id: $id)
  }
`


