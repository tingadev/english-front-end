import { gql } from '@apollo/client';
import { TEST_CATEGORY_FRAGMENT } from './TestCategory';

export const TEST_GROUP_CHILD_FRAGMENT = gql`
  fragment TestGroupChildInfo on TestGroup {
    id
    testGroupName
    certificateType
    link
    parentId
    isPublished
    displayOrder
    groupType
  }
  ${TEST_CATEGORY_FRAGMENT}
`;

export const TEST_GROUP_INFO_FRAGMENT = gql`
  fragment TestGroupInfo on TestGroup {
    id
    testGroupName
    certificateType
    link
    groupType
    parentId
    testGroupsChild{
      ...TestGroupChildInfo
    }
    isPublished
    displayOrder
  }
  ${TEST_GROUP_CHILD_FRAGMENT}
  ${TEST_CATEGORY_FRAGMENT}
`;

export const TEST_GROUP_FRAGMENT = gql`
  fragment TestGroup on TestGroup {
    id
    testGroupName
    certificateType
    link
    groupType
    parentId
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
      ...TestGroupInfo
    }
  }
  ${TEST_GROUP_INFO_FRAGMENT}
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

export const GET_TEST_GROUPS_INFO = gql `
  query getTestGroupsInfo($data: TestGroupFilterInput!) {
    getTestGroups(data: $data) {
      testGroups{
        ...TestGroupInfo
      }
      total
      nextCursor
    }
  }
  ${TEST_GROUP_INFO_FRAGMENT}
`;

export const GET_TEST_GROUP_INFO = gql `
  query getTestGroupInfo($id: String!) {
    getTestGroup(id: $id) {
      ...TestGroupInfo
    }
  }
  ${TEST_GROUP_INFO_FRAGMENT}
`;
export const REMOVE_TEST_GROUP = gql `
  mutation removeTestGroup($id: String!){
    removeTestGroup(id: $id)
  }
`
export const UNIQUE_LINK_TEST_GROUP = gql `
  mutation uniqueLinkTestGroup($link: String!, $id: String){
    uniqueLinkTestGroup(link: $link, id: $id)
  }
`