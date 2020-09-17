import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
  part: Part;
  parts: Array<Part>;
  question: Question;
  questions: Questions;
  test: Test;
  getTestQuestions: Array<TestQuestion>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryPartArgs = {
  id: Scalars['String'];
};


export type QueryPartsArgs = {
  certificateType: Scalars['String'];
};


export type QueryQuestionArgs = {
  id: Scalars['String'];
};


export type QueryQuestionsArgs = {
  questionFilterType: QuestionFilterTypeInput;
};


export type QueryTestArgs = {
  id: Scalars['String'];
};


export type QueryGetTestQuestionsArgs = {
  testId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profileMediaUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  displayEmail?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  /** First + Last name */
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLink>;
  password?: Maybe<Scalars['String']>;
  state: UserState;
  isVerified?: Maybe<Scalars['Boolean']>;
};


export type SocialLink = {
  __typename?: 'SocialLink';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
};

export enum UserState {
  New = 'New',
  HasCreated = 'HasCreated',
  HasPublished = 'HasPublished'
}

export type Part = {
  __typename?: 'Part';
  id: Scalars['String'];
  partName: Scalars['String'];
  description: Scalars['String'];
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  testQuestion?: Maybe<TestQuestion>;
  test?: Maybe<Test>;
  order: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export enum SkillsType {
  Reading = 'Reading',
  Listening = 'Listening'
}

export enum EnglishCertificateType {
  Toiec = 'Toiec',
  Ielts = 'IELTS'
}

export type TestQuestion = {
  __typename?: 'TestQuestion';
  id: Scalars['String'];
  test: Test;
  question: Question;
  part: Part;
  order: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['String'];
  testName: Scalars['String'];
  description: Scalars['String'];
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  partAndAudioSecs?: Maybe<Array<PartAndAudioSeconds>>;
  testQuestions?: Maybe<Array<TestQuestion>>;
  part?: Maybe<Part>;
  isPublished: Scalars['Boolean'];
  order: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type PartAndAudioSeconds = {
  __typename?: 'PartAndAudioSeconds';
  partId?: Maybe<Scalars['String']>;
  autdioSecs?: Maybe<Scalars['Float']>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  questionName: Scalars['String'];
  audioSec: Scalars['Float'];
  questionType: QuestionType;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  answers: Array<Answers>;
  testQuestion?: Maybe<TestQuestion>;
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  result: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultiChoice = 'MultiChoice',
  FillBlank = 'FillBlank'
}

export type Answers = {
  __typename?: 'Answers';
  keyAnswer?: Maybe<Scalars['String']>;
  answerContent?: Maybe<Scalars['String']>;
};

export type Questions = {
  __typename?: 'Questions';
  questions: Array<Question>;
  total: Scalars['Float'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type QuestionFilterTypeInput = {
  skillType?: Maybe<SkillsType>;
  certificateType: EnglishCertificateType;
  orderDirection?: Maybe<OrderDirection>;
  cursor?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['String']>;
};

/** Query Order Direction */
export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPart: Part;
  updatePart: Part;
  createQuestion: Question;
  updateQuestion: Question;
  createTest: Test;
  updateTest: Test;
  uploadMedia: Asset;
  createTestQuestion: TestQuestion;
  createListTestQuestions: Array<TestQuestion>;
  removeTestQuestion: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationCreatePartArgs = {
  data: NewPartInput;
};


export type MutationUpdatePartArgs = {
  data: NewPartInput;
};


export type MutationCreateQuestionArgs = {
  data: NewQuestionInput;
};


export type MutationUpdateQuestionArgs = {
  data: NewQuestionInput;
};


export type MutationCreateTestArgs = {
  data: NewTestInput;
};


export type MutationUpdateTestArgs = {
  data: NewTestInput;
  id: Scalars['String'];
};


export type MutationUploadMediaArgs = {
  data: AssetInput;
};


export type MutationCreateTestQuestionArgs = {
  data: TestQuestionInputId;
};


export type MutationCreateListTestQuestionsArgs = {
  data: TestQuestionInputIds;
};


export type MutationRemoveTestQuestionArgs = {
  id: Scalars['String'];
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  state: UserState;
};

export type NewPartInput = {
  id?: Maybe<Scalars['String']>;
  partName: Scalars['String'];
  skillType: SkillsType;
  description: Scalars['String'];
  certificateType: EnglishCertificateType;
};

export type NewQuestionInput = {
  id?: Maybe<Scalars['String']>;
  questionName: Scalars['String'];
  audioSec: Scalars['Float'];
  questionType: QuestionType;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  answers: Array<AnswersInput>;
  result: Scalars['String'];
  partId?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['String']>;
};

export type AnswersInput = {
  keyAnswer?: Maybe<Scalars['String']>;
  answerContent?: Maybe<Scalars['String']>;
};

export type NewTestInput = {
  id?: Maybe<Scalars['String']>;
  testName: Scalars['String'];
  skillType?: Maybe<SkillsType>;
  description?: Maybe<Scalars['String']>;
  certificateType?: Maybe<EnglishCertificateType>;
  isPublished?: Maybe<Scalars['Boolean']>;
  partAndAudioSecs?: Maybe<Array<AudioSecondsInput>>;
  testQuestionInputIds?: Maybe<TestQuestionInputIds>;
};

export type AudioSecondsInput = {
  partId?: Maybe<Scalars['String']>;
  autdioSecs?: Maybe<Scalars['Float']>;
};

export type TestQuestionInputIds = {
  testId?: Maybe<Scalars['String']>;
  partIdAndQuestionIdsInput: Array<PartIdAndQuestionIdsInput>;
};

export type PartIdAndQuestionIdsInput = {
  partId?: Maybe<Scalars['String']>;
  questionIds: Array<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  url: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  type: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type AssetInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  typeFolder: MediaType;
};

export enum MediaType {
  Image = 'Image',
  Audio = 'Audio',
  Video = 'Video'
}

export type TestQuestionInputId = {
  testId?: Maybe<Scalars['String']>;
  partId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
};

export const AssetFragmentDoc = gql`
    fragment Asset on Asset {
  url
  name
  type
  path
}
    `;
export const QuestionFragmentDoc = gql`
    fragment Question on Question {
  id
  questionName
  audioSec
  questionType
  image
  answers {
    keyAnswer
    answerContent
  }
  content
  description
  skillType
  certificateType
  explaination
  result
}
    `;
export const PartFragmentDoc = gql`
    fragment Part on Part {
  id
  partName
  description
  skillType
  certificateType
  order
}
    `;
export const TestQuestionFragmentDoc = gql`
    fragment TestQuestion on TestQuestion {
  id
  question {
    ...Question
  }
  part {
    ...Part
  }
  order
}
    ${QuestionFragmentDoc}
${PartFragmentDoc}`;
export const TestFragmentDoc = gql`
    fragment Test on Test {
  id
  testName
  description
  skillType
  certificateType
  partAndAudioSecs {
    partId
    autdioSecs
  }
  testQuestions {
    ...TestQuestion
  }
  isPublished
  order
}
    ${TestQuestionFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  firstName
  lastName
  email
}
    `;
export const UploadMediaDocument = gql`
    mutation uploadMedia($data: AssetInput!) {
  uploadMedia(data: $data) {
    ...Asset
  }
}
    ${AssetFragmentDoc}`;
export type UploadMediaMutationFn = ApolloReactCommon.MutationFunction<UploadMediaMutation, UploadMediaMutationVariables>;
export type UploadMediaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UploadMediaMutation, UploadMediaMutationVariables>, 'mutation'>;

    export const UploadMediaComponent = (props: UploadMediaComponentProps) => (
      <ApolloReactComponents.Mutation<UploadMediaMutation, UploadMediaMutationVariables> mutation={UploadMediaDocument} {...props} />
    );
    

/**
 * __useUploadMediaMutation__
 *
 * To run a mutation, you first call `useUploadMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMediaMutation, { data, loading, error }] = useUploadMediaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadMediaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadMediaMutation, UploadMediaMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadMediaMutation, UploadMediaMutationVariables>(UploadMediaDocument, baseOptions);
      }
export type UploadMediaMutationHookResult = ReturnType<typeof useUploadMediaMutation>;
export type UploadMediaMutationResult = ApolloReactCommon.MutationResult<UploadMediaMutation>;
export type UploadMediaMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadMediaMutation, UploadMediaMutationVariables>;
export const CreatePartDocument = gql`
    mutation createPart($data: NewPartInput!) {
  createPart(data: $data) {
    ...Part
  }
}
    ${PartFragmentDoc}`;
export type CreatePartMutationFn = ApolloReactCommon.MutationFunction<CreatePartMutation, CreatePartMutationVariables>;
export type CreatePartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePartMutation, CreatePartMutationVariables>, 'mutation'>;

    export const CreatePartComponent = (props: CreatePartComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePartMutation, CreatePartMutationVariables> mutation={CreatePartDocument} {...props} />
    );
    

/**
 * __useCreatePartMutation__
 *
 * To run a mutation, you first call `useCreatePartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPartMutation, { data, loading, error }] = useCreatePartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePartMutation, CreatePartMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePartMutation, CreatePartMutationVariables>(CreatePartDocument, baseOptions);
      }
export type CreatePartMutationHookResult = ReturnType<typeof useCreatePartMutation>;
export type CreatePartMutationResult = ApolloReactCommon.MutationResult<CreatePartMutation>;
export type CreatePartMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePartMutation, CreatePartMutationVariables>;
export const GetPartDocument = gql`
    query getPart($id: String!) {
  part(id: $id) {
    ...Part
  }
}
    ${PartFragmentDoc}`;
export type GetPartComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPartQuery, GetPartQueryVariables>, 'query'> & ({ variables: GetPartQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPartComponent = (props: GetPartComponentProps) => (
      <ApolloReactComponents.Query<GetPartQuery, GetPartQueryVariables> query={GetPartDocument} {...props} />
    );
    

/**
 * __useGetPartQuery__
 *
 * To run a query within a React component, call `useGetPartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPartQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPartQuery, GetPartQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPartQuery, GetPartQueryVariables>(GetPartDocument, baseOptions);
      }
export function useGetPartLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPartQuery, GetPartQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPartQuery, GetPartQueryVariables>(GetPartDocument, baseOptions);
        }
export type GetPartQueryHookResult = ReturnType<typeof useGetPartQuery>;
export type GetPartLazyQueryHookResult = ReturnType<typeof useGetPartLazyQuery>;
export type GetPartQueryResult = ApolloReactCommon.QueryResult<GetPartQuery, GetPartQueryVariables>;
export const GetPartsDocument = gql`
    query getParts($certificateType: String!) {
  parts(certificateType: $certificateType) {
    ...Part
  }
}
    ${PartFragmentDoc}`;
export type GetPartsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPartsQuery, GetPartsQueryVariables>, 'query'> & ({ variables: GetPartsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPartsComponent = (props: GetPartsComponentProps) => (
      <ApolloReactComponents.Query<GetPartsQuery, GetPartsQueryVariables> query={GetPartsDocument} {...props} />
    );
    

/**
 * __useGetPartsQuery__
 *
 * To run a query within a React component, call `useGetPartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPartsQuery({
 *   variables: {
 *      certificateType: // value for 'certificateType'
 *   },
 * });
 */
export function useGetPartsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPartsQuery, GetPartsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPartsQuery, GetPartsQueryVariables>(GetPartsDocument, baseOptions);
      }
export function useGetPartsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPartsQuery, GetPartsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPartsQuery, GetPartsQueryVariables>(GetPartsDocument, baseOptions);
        }
export type GetPartsQueryHookResult = ReturnType<typeof useGetPartsQuery>;
export type GetPartsLazyQueryHookResult = ReturnType<typeof useGetPartsLazyQuery>;
export type GetPartsQueryResult = ApolloReactCommon.QueryResult<GetPartsQuery, GetPartsQueryVariables>;
export const UpdatePartDocument = gql`
    mutation updatePart($data: NewPartInput!) {
  updatePart(data: $data) {
    ...Part
  }
}
    ${PartFragmentDoc}`;
export type UpdatePartMutationFn = ApolloReactCommon.MutationFunction<UpdatePartMutation, UpdatePartMutationVariables>;
export type UpdatePartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePartMutation, UpdatePartMutationVariables>, 'mutation'>;

    export const UpdatePartComponent = (props: UpdatePartComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePartMutation, UpdatePartMutationVariables> mutation={UpdatePartDocument} {...props} />
    );
    

/**
 * __useUpdatePartMutation__
 *
 * To run a mutation, you first call `useUpdatePartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePartMutation, { data, loading, error }] = useUpdatePartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePartMutation, UpdatePartMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePartMutation, UpdatePartMutationVariables>(UpdatePartDocument, baseOptions);
      }
export type UpdatePartMutationHookResult = ReturnType<typeof useUpdatePartMutation>;
export type UpdatePartMutationResult = ApolloReactCommon.MutationResult<UpdatePartMutation>;
export type UpdatePartMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePartMutation, UpdatePartMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation createQuestion($data: NewQuestionInput!) {
  createQuestion(data: $data) {
    ...Question
  }
}
    ${QuestionFragmentDoc}`;
export type CreateQuestionMutationFn = ApolloReactCommon.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;
export type CreateQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateQuestionMutation, CreateQuestionMutationVariables>, 'mutation'>;

    export const CreateQuestionComponent = (props: CreateQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateQuestionMutation, CreateQuestionMutationVariables> mutation={CreateQuestionDocument} {...props} />
    );
    

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, baseOptions);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = ApolloReactCommon.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation updateQuestion($data: NewQuestionInput!) {
  updateQuestion(data: $data) {
    ...Question
  }
}
    ${QuestionFragmentDoc}`;
export type UpdateQuestionMutationFn = ApolloReactCommon.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export type UpdateQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>, 'mutation'>;

    export const UpdateQuestionComponent = (props: UpdateQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateQuestionMutation, UpdateQuestionMutationVariables> mutation={UpdateQuestionDocument} {...props} />
    );
    

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, baseOptions);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = ApolloReactCommon.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const GetQuestionDocument = gql`
    query getQuestion($id: String!) {
  question(id: $id) {
    ...Question
  }
}
    ${QuestionFragmentDoc}`;
export type GetQuestionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetQuestionQuery, GetQuestionQueryVariables>, 'query'> & ({ variables: GetQuestionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetQuestionComponent = (props: GetQuestionComponentProps) => (
      <ApolloReactComponents.Query<GetQuestionQuery, GetQuestionQueryVariables> query={GetQuestionDocument} {...props} />
    );
    

/**
 * __useGetQuestionQuery__
 *
 * To run a query within a React component, call `useGetQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, baseOptions);
      }
export function useGetQuestionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, baseOptions);
        }
export type GetQuestionQueryHookResult = ReturnType<typeof useGetQuestionQuery>;
export type GetQuestionLazyQueryHookResult = ReturnType<typeof useGetQuestionLazyQuery>;
export type GetQuestionQueryResult = ApolloReactCommon.QueryResult<GetQuestionQuery, GetQuestionQueryVariables>;
export const GetQuestionsDocument = gql`
    query getQuestions($data: QuestionFilterTypeInput!) {
  questions(questionFilterType: $data) {
    questions {
      ...Question
    }
    total
    nextCursor
  }
}
    ${QuestionFragmentDoc}`;
export type GetQuestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetQuestionsQuery, GetQuestionsQueryVariables>, 'query'> & ({ variables: GetQuestionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetQuestionsComponent = (props: GetQuestionsComponentProps) => (
      <ApolloReactComponents.Query<GetQuestionsQuery, GetQuestionsQueryVariables> query={GetQuestionsDocument} {...props} />
    );
    

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, baseOptions);
      }
export function useGetQuestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, baseOptions);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = ApolloReactCommon.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const CreateTestDocument = gql`
    mutation createTest($data: NewTestInput!) {
  createTest(data: $data) {
    ...Test
  }
}
    ${TestFragmentDoc}`;
export type CreateTestMutationFn = ApolloReactCommon.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;
export type CreateTestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTestMutation, CreateTestMutationVariables>, 'mutation'>;

    export const CreateTestComponent = (props: CreateTestComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTestMutation, CreateTestMutationVariables> mutation={CreateTestDocument} {...props} />
    );
    

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, baseOptions);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = ApolloReactCommon.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const GetTestDocument = gql`
    query getTest($id: String!) {
  test(id: $id) {
    ...Test
  }
}
    ${TestFragmentDoc}`;
export type GetTestComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestQuery, GetTestQueryVariables>, 'query'> & ({ variables: GetTestQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestComponent = (props: GetTestComponentProps) => (
      <ApolloReactComponents.Query<GetTestQuery, GetTestQueryVariables> query={GetTestDocument} {...props} />
    );
    

/**
 * __useGetTestQuery__
 *
 * To run a query within a React component, call `useGetTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTestQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestQuery, GetTestQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestQuery, GetTestQueryVariables>(GetTestDocument, baseOptions);
      }
export function useGetTestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestQuery, GetTestQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestQuery, GetTestQueryVariables>(GetTestDocument, baseOptions);
        }
export type GetTestQueryHookResult = ReturnType<typeof useGetTestQuery>;
export type GetTestLazyQueryHookResult = ReturnType<typeof useGetTestLazyQuery>;
export type GetTestQueryResult = ApolloReactCommon.QueryResult<GetTestQuery, GetTestQueryVariables>;
export const GetTestQuestionsDocument = gql`
    query getTestQuestions($testId: String!) {
  getTestQuestions(testId: $testId) {
    ...TestQuestion
  }
}
    ${TestQuestionFragmentDoc}`;
export type GetTestQuestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>, 'query'> & ({ variables: GetTestQuestionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestQuestionsComponent = (props: GetTestQuestionsComponentProps) => (
      <ApolloReactComponents.Query<GetTestQuestionsQuery, GetTestQuestionsQueryVariables> query={GetTestQuestionsDocument} {...props} />
    );
    

/**
 * __useGetTestQuestionsQuery__
 *
 * To run a query within a React component, call `useGetTestQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestQuestionsQuery({
 *   variables: {
 *      testId: // value for 'testId'
 *   },
 * });
 */
export function useGetTestQuestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>(GetTestQuestionsDocument, baseOptions);
      }
export function useGetTestQuestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>(GetTestQuestionsDocument, baseOptions);
        }
export type GetTestQuestionsQueryHookResult = ReturnType<typeof useGetTestQuestionsQuery>;
export type GetTestQuestionsLazyQueryHookResult = ReturnType<typeof useGetTestQuestionsLazyQuery>;
export type GetTestQuestionsQueryResult = ApolloReactCommon.QueryResult<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>;
export const CreateTestQuestionDocument = gql`
    mutation createTestQuestion($data: TestQuestionInputId!) {
  createTestQuestion(data: $data) {
    ...TestQuestion
  }
}
    ${TestQuestionFragmentDoc}`;
export type CreateTestQuestionMutationFn = ApolloReactCommon.MutationFunction<CreateTestQuestionMutation, CreateTestQuestionMutationVariables>;
export type CreateTestQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTestQuestionMutation, CreateTestQuestionMutationVariables>, 'mutation'>;

    export const CreateTestQuestionComponent = (props: CreateTestQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTestQuestionMutation, CreateTestQuestionMutationVariables> mutation={CreateTestQuestionDocument} {...props} />
    );
    

/**
 * __useCreateTestQuestionMutation__
 *
 * To run a mutation, you first call `useCreateTestQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestQuestionMutation, { data, loading, error }] = useCreateTestQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTestQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTestQuestionMutation, CreateTestQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTestQuestionMutation, CreateTestQuestionMutationVariables>(CreateTestQuestionDocument, baseOptions);
      }
export type CreateTestQuestionMutationHookResult = ReturnType<typeof useCreateTestQuestionMutation>;
export type CreateTestQuestionMutationResult = ApolloReactCommon.MutationResult<CreateTestQuestionMutation>;
export type CreateTestQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTestQuestionMutation, CreateTestQuestionMutationVariables>;
export const CreateListTestQuestionsDocument = gql`
    mutation createListTestQuestions($data: TestQuestionInputIds!) {
  createListTestQuestions(data: $data) {
    ...TestQuestion
  }
}
    ${TestQuestionFragmentDoc}`;
export type CreateListTestQuestionsMutationFn = ApolloReactCommon.MutationFunction<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables>;
export type CreateListTestQuestionsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables>, 'mutation'>;

    export const CreateListTestQuestionsComponent = (props: CreateListTestQuestionsComponentProps) => (
      <ApolloReactComponents.Mutation<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables> mutation={CreateListTestQuestionsDocument} {...props} />
    );
    

/**
 * __useCreateListTestQuestionsMutation__
 *
 * To run a mutation, you first call `useCreateListTestQuestionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListTestQuestionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListTestQuestionsMutation, { data, loading, error }] = useCreateListTestQuestionsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateListTestQuestionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables>(CreateListTestQuestionsDocument, baseOptions);
      }
export type CreateListTestQuestionsMutationHookResult = ReturnType<typeof useCreateListTestQuestionsMutation>;
export type CreateListTestQuestionsMutationResult = ApolloReactCommon.MutationResult<CreateListTestQuestionsMutation>;
export type CreateListTestQuestionsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateListTestQuestionsMutation, CreateListTestQuestionsMutationVariables>;
export const RemoveTestQuestionDocument = gql`
    mutation removeTestQuestion($id: String!) {
  removeTestQuestion(id: $id)
}
    `;
export type RemoveTestQuestionMutationFn = ApolloReactCommon.MutationFunction<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>;
export type RemoveTestQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>, 'mutation'>;

    export const RemoveTestQuestionComponent = (props: RemoveTestQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables> mutation={RemoveTestQuestionDocument} {...props} />
    );
    

/**
 * __useRemoveTestQuestionMutation__
 *
 * To run a mutation, you first call `useRemoveTestQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTestQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTestQuestionMutation, { data, loading, error }] = useRemoveTestQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTestQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>(RemoveTestQuestionDocument, baseOptions);
      }
export type RemoveTestQuestionMutationHookResult = ReturnType<typeof useRemoveTestQuestionMutation>;
export type RemoveTestQuestionMutationResult = ApolloReactCommon.MutationResult<RemoveTestQuestionMutation>;
export type RemoveTestQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserInput!) {
  createUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = gql`
    query getUser($id: String!) {
  user(id: $id) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'>;

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export type AssetFragment = { __typename?: 'Asset', url: string, name: string, type: string, path: string };

export type UploadMediaMutationVariables = Exact<{
  data: AssetInput;
}>;


export type UploadMediaMutation = { __typename?: 'Mutation', uploadMedia: (
    { __typename?: 'Asset' }
    & AssetFragment
  ) };

export type PartFragment = { __typename?: 'Part', id: string, partName: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType, order: number };

export type CreatePartMutationVariables = Exact<{
  data: NewPartInput;
}>;


export type CreatePartMutation = { __typename?: 'Mutation', createPart: (
    { __typename?: 'Part' }
    & PartFragment
  ) };

export type GetPartQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPartQuery = { __typename?: 'Query', part: (
    { __typename?: 'Part' }
    & PartFragment
  ) };

export type GetPartsQueryVariables = Exact<{
  certificateType: Scalars['String'];
}>;


export type GetPartsQuery = { __typename?: 'Query', parts: Array<(
    { __typename?: 'Part' }
    & PartFragment
  )> };

export type UpdatePartMutationVariables = Exact<{
  data: NewPartInput;
}>;


export type UpdatePartMutation = { __typename?: 'Mutation', updatePart: (
    { __typename?: 'Part' }
    & PartFragment
  ) };

export type QuestionFragment = { __typename?: 'Question', id: string, questionName: string, audioSec: number, questionType: QuestionType, image: string, content?: Maybe<string>, description?: Maybe<string>, skillType: SkillsType, certificateType: EnglishCertificateType, explaination?: Maybe<string>, result: string, answers: Array<{ __typename?: 'Answers', keyAnswer?: Maybe<string>, answerContent?: Maybe<string> }> };

export type CreateQuestionMutationVariables = Exact<{
  data: NewQuestionInput;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', createQuestion: (
    { __typename?: 'Question' }
    & QuestionFragment
  ) };

export type UpdateQuestionMutationVariables = Exact<{
  data: NewQuestionInput;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', updateQuestion: (
    { __typename?: 'Question' }
    & QuestionFragment
  ) };

export type GetQuestionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetQuestionQuery = { __typename?: 'Query', question: (
    { __typename?: 'Question' }
    & QuestionFragment
  ) };

export type GetQuestionsQueryVariables = Exact<{
  data: QuestionFilterTypeInput;
}>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: { __typename?: 'Questions', total: number, nextCursor?: Maybe<string>, questions: Array<(
      { __typename?: 'Question' }
      & QuestionFragment
    )> } };

export type TestFragment = { __typename?: 'Test', id: string, testName: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType, isPublished: boolean, order: number, partAndAudioSecs?: Maybe<Array<{ __typename?: 'PartAndAudioSeconds', partId?: Maybe<string>, autdioSecs?: Maybe<number> }>>, testQuestions?: Maybe<Array<(
    { __typename?: 'TestQuestion' }
    & TestQuestionFragment
  )>> };

export type CreateTestMutationVariables = Exact<{
  data: NewTestInput;
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest: (
    { __typename?: 'Test' }
    & TestFragment
  ) };

export type GetTestQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTestQuery = { __typename?: 'Query', test: (
    { __typename?: 'Test' }
    & TestFragment
  ) };

export type TestQuestionFragment = { __typename?: 'TestQuestion', id: string, order: number, question: (
    { __typename?: 'Question' }
    & QuestionFragment
  ), part: (
    { __typename?: 'Part' }
    & PartFragment
  ) };

export type GetTestQuestionsQueryVariables = Exact<{
  testId: Scalars['String'];
}>;


export type GetTestQuestionsQuery = { __typename?: 'Query', getTestQuestions: Array<(
    { __typename?: 'TestQuestion' }
    & TestQuestionFragment
  )> };

export type CreateTestQuestionMutationVariables = Exact<{
  data: TestQuestionInputId;
}>;


export type CreateTestQuestionMutation = { __typename?: 'Mutation', createTestQuestion: (
    { __typename?: 'TestQuestion' }
    & TestQuestionFragment
  ) };

export type CreateListTestQuestionsMutationVariables = Exact<{
  data: TestQuestionInputIds;
}>;


export type CreateListTestQuestionsMutation = { __typename?: 'Mutation', createListTestQuestions: Array<(
    { __typename?: 'TestQuestion' }
    & TestQuestionFragment
  )> };

export type RemoveTestQuestionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTestQuestionMutation = { __typename?: 'Mutation', removeTestQuestion: string };

export type UserFragment = { __typename?: 'User', id: string, firstName: string, lastName?: Maybe<string>, email: string };

export type CreateUserMutationVariables = Exact<{
  data: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: (
    { __typename?: 'User' }
    & UserFragment
  ) };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: (
    { __typename?: 'User' }
    & UserFragment
  ) };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> };
