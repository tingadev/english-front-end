import { gql } from '@apollo/client';


export const PART_FRAGMENT = gql`
  fragment Part on Part {
    id
    partName
    description
    skillType
    certificateType
  }
`;

export const CREATE_PART = gql`
  mutation createPart($data: NewPartInput!) {
    createPart(data: $data) {
      ...Part
    }
  }
  ${PART_FRAGMENT}
`;

export const GET_PART = gql `
  query getPart($id: String!) {
    part(id: $id) {
      ...Part
    }
  }
  ${PART_FRAGMENT}
`;

export const GET_PARTS = gql `
  query getParts($certificateType: String!) {
      parts(certificateType: $certificateType) {
        ...Part
      }
  }
  ${PART_FRAGMENT}
`;

export const UPDATE_PART = gql `
  mutation updatePart($id: String!, $data: NewPartInput!) {
    updatePart(id: $id, data: $data) {
        ...Part
      }
  }
  ${PART_FRAGMENT}
`;
