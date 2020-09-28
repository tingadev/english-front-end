import { gql } from '@apollo/client';


export const PART_FRAGMENT = gql`
  fragment Part on Part {
    id
    partName
    description
    skillType
    certificateType
    displayOrder
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
  query getParts($data: PartFilterInput!) {
      getParts(data: $data) {
        parts{
          ...Part
        }
        total
        nextCursor
      }
  }
  ${PART_FRAGMENT}
`;

export const GET_PARTS_FROM_IDS = gql `
  query getPartsFromIds($data: PartIdsInput!) {
    getPartsFromIds(data: $data) {
        ...Part
      }
  }
  ${PART_FRAGMENT}
`;

export const UPDATE_PART = gql `
  mutation updatePart($data: NewPartInput!) {
    updatePart(data: $data) {
        ...Part
      }
  }
  ${PART_FRAGMENT}
`;

export const REMOVE_PART = gql `
  mutation removePart($id: String!){
    removePart(id: $id)
  }
`
