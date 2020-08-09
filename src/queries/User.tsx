import { gql } from '@apollo/client';


export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    firstName
    lastName
    email
  }
`;

export const CREATE_USER = gql`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USER = gql `
  query getUser($id: String!) {
    user(id: $id) {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USERS = gql `
  query getUsers {
      users {
        ...User
      }
  }
  ${USER_FRAGMENT}
`;
