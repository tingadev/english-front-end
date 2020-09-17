import { gql } from '@apollo/client';


export const ASSET_FRAGMENT = gql`
  fragment Asset on Asset {
    url
    name
    type
    path
  }
`;

export const UPLOAD_MEDIA = gql`
  mutation uploadMedia($data: AssetInput!) {
    uploadMedia(data: $data) {
      ...Asset
    }
  }
  ${ASSET_FRAGMENT}
`;
