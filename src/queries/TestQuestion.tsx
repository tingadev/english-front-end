import { gql } from '@apollo/client';
import { QUESTION_FRAGMENT } from './Question';
import { PART_FRAGMENT } from './Part';


export const TEST_QUESTION_FRAGMENT = gql`
  fragment TestQuestion on TestQuestion {
    id
    question{
        ...Question
    }
    part{
        ...Part
    }
    
  }
  ${QUESTION_FRAGMENT}
  ${PART_FRAGMENT}
`;

