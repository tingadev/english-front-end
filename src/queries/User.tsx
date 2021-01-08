import { gql } from '@apollo/client';


export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    firstName
    lastName
    email
    role
    address
    profileMediaUrl
  }
`;

export const CREATE_USER = gql`
  mutation createUser($data: NewUserInput!) {
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

export const ME_FRAGMENT = gql`
  fragment Me on Me {
    id
    firstName
    lastName
    email
    role
    address
    profileMediaUrl
    name
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!,) {
    login(email: $email, password: $password) {
      ...Me
    }
  }
  ${ME_FRAGMENT}
`;


export const ME = gql`
  query me {
    me {
      ...Me
    }
  }
  ${ME_FRAGMENT}
`;

export const UPDATE_ME = gql`
  mutation updateMe($data: UpdateMeInput!) {
    updateMe(data: $data) {
      ...Me
    }
  }
  ${ME_FRAGMENT}
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;