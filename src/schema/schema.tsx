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
  questions: Array<Question>;
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
  testQuestion?: Maybe<Test>;
  test?: Maybe<TestQuestion>;
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

export type Test = {
  __typename?: 'Test';
  id: Scalars['String'];
  testName: Scalars['String'];
  skillType: SkillsType;
  autdioPartSecs?: Maybe<Array<AudioSeconds>>;
  testQuestions?: Maybe<Array<TestQuestion>>;
  part?: Maybe<Part>;
  isPublished: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type AudioSeconds = {
  __typename?: 'AudioSeconds';
  partId?: Maybe<Scalars['String']>;
  autdioSecs?: Maybe<Scalars['Float']>;
};

export type TestQuestion = {
  __typename?: 'TestQuestion';
  id: Scalars['String'];
  test: Test;
  question: Question;
  part: Part;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  questionName: Scalars['String'];
  audioSec: Scalars['Float'];
  questionType: QuestionType;
  description: Scalars['String'];
  content: Scalars['String'];
  explaination: Scalars['String'];
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

export type QuestionFilterTypeInput = {
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPart: Part;
  updatePart: Part;
  createQuestion: Question;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationCreatePartArgs = {
  data: NewPartInput;
};


export type MutationUpdatePartArgs = {
  data: NewPartInput;
  id: Scalars['String'];
};


export type MutationCreateQuestionArgs = {
  data: NewQuestionInput;
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
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  answers: Array<AnswersInput>;
  result: Scalars['String'];
};

export type AnswersInput = {
  keyAnswer?: Maybe<Scalars['String']>;
  answerContent?: Maybe<Scalars['String']>;
};

export const PartFragmentDoc = gql`
    fragment Part on Part {
  id
  partName
  description
  skillType
  certificateType
}
    `;
export const QuestionFragmentDoc = gql`
    fragment Question on Question {
  id
  questionName
  audioSec
  questionType
  answers {
    keyAnswer
    answerContent
  }
  content
  description
  skillType
  certificateType
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  firstName
  lastName
  email
}
    `;
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
    mutation updatePart($id: String!, $data: NewPartInput!) {
  updatePart(id: $id, data: $data) {
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
 *      id: // value for 'id'
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
    query getQuestions($questionFilterType: QuestionFilterTypeInput!) {
  questions(questionFilterType: $questionFilterType) {
    ...Question
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
 *      questionFilterType: // value for 'questionFilterType'
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
export type PartFragment = { __typename?: 'Part', id: string, partName: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType };

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
  id: Scalars['String'];
  data: NewPartInput;
}>;


export type UpdatePartMutation = { __typename?: 'Mutation', updatePart: (
    { __typename?: 'Part' }
    & PartFragment
  ) };

export type QuestionFragment = { __typename?: 'Question', id: string, questionName: string, audioSec: number, questionType: QuestionType, content: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType, answers: Array<{ __typename?: 'Answers', keyAnswer?: Maybe<string>, answerContent?: Maybe<string> }> };

export type CreateQuestionMutationVariables = Exact<{
  data: NewQuestionInput;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', createQuestion: (
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
  questionFilterType: QuestionFilterTypeInput;
}>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: Array<(
    { __typename?: 'Question' }
    & QuestionFragment
  )> };

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
