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
  isEmailAlreadyExist: Scalars['Boolean'];
  part: Part;
  getParts: Parts;
  getPartsFromIds: Array<Part>;
  question: Question;
  questions: Questions;
  test: Test;
  getTests: Tests;
  getTestCategory: TestCategory;
  getTestCategories: TestCategories;
  getTestQuestions: Array<TestQuestion>;
  getTestGroup: TestGroup;
  getTestGroups: TestGroups;
  me?: Maybe<Me>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryIsEmailAlreadyExistArgs = {
  email: Scalars['String'];
};


export type QueryPartArgs = {
  id: Scalars['String'];
};


export type QueryGetPartsArgs = {
  data: PartFilterInput;
};


export type QueryGetPartsFromIdsArgs = {
  data: PartIdsInput;
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


export type QueryGetTestsArgs = {
  data: TestFilterInput;
};


export type QueryGetTestCategoryArgs = {
  id: Scalars['String'];
};


export type QueryGetTestCategoriesArgs = {
  data: TestCategoryFilterInput;
};


export type QueryGetTestQuestionsArgs = {
  testId: Scalars['String'];
};


export type QueryGetTestGroupArgs = {
  id: Scalars['String'];
};


export type QueryGetTestGroupsArgs = {
  data: TestGroupFilterInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profileMediaUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  /** First + Last name */
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLink>;
  password?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  version: Scalars['Float'];
};


export type SocialLink = {
  __typename?: 'SocialLink';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type Part = {
  __typename?: 'Part';
  id: Scalars['String'];
  partName: Scalars['String'];
  description: Scalars['String'];
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  testQuestion?: Maybe<TestQuestion>;
  test?: Maybe<Test>;
  displayOrder: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export enum SkillsType {
  Reading = 'Reading',
  Listening = 'Listening'
}

export enum EnglishCertificateType {
  Toeic = 'Toeic',
  Ielts = 'IELTS',
  Custom = 'Custom',
  Blog = 'Blog'
}

export type TestQuestion = {
  __typename?: 'TestQuestion';
  id: Scalars['String'];
  test: Test;
  question: Question;
  part: Part;
  displayOrder: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['String'];
  testName: Scalars['String'];
  description: Scalars['String'];
  audioUrl: Scalars['String'];
  explaination: Scalars['String'];
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  partAndAudioSecs?: Maybe<Array<PartAndAudioSeconds>>;
  testQuestions?: Maybe<Array<TestQuestion>>;
  part?: Maybe<Part>;
  testCategory?: Maybe<TestCategory>;
  isPublished: Scalars['Boolean'];
  displayOrder: Scalars['Float'];
  displayOrderCategory: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type PartAndAudioSeconds = {
  __typename?: 'PartAndAudioSeconds';
  partId?: Maybe<Scalars['String']>;
  autdioSecs?: Maybe<Scalars['Float']>;
  displayOrder?: Maybe<Scalars['Float']>;
};

export type TestCategory = {
  __typename?: 'TestCategory';
  id: Scalars['String'];
  testCategoryName: Scalars['String'];
  certificateType: EnglishCertificateType;
  tests?: Maybe<Array<Test>>;
  testGroup?: Maybe<TestGroup>;
  isPublished: Scalars['Boolean'];
  displayOrder: Scalars['Float'];
  displayOrderGroup: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type TestGroup = {
  __typename?: 'TestGroup';
  id: Scalars['String'];
  testGroupName: Scalars['String'];
  link: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  certificateType: EnglishCertificateType;
  testCategories?: Maybe<Array<TestCategory>>;
  isPublished: Scalars['Boolean'];
  displayOrder: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deleteAt?: Maybe<Scalars['DateTime']>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  questionName: Scalars['String'];
  audioSec: Scalars['Float'];
  audioSecVN: Scalars['Float'];
  questionType: QuestionType;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  quickExplaination?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  answers: Array<Answers>;
  testQuestion?: Maybe<TestQuestion>;
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  result: Scalars['String'];
  isGroup: Scalars['Boolean'];
  questionGroupOrder: Scalars['Float'];
  questionGroup: Question;
  questionGroups: Array<Question>;
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

export type Parts = {
  __typename?: 'Parts';
  parts: Array<Part>;
  total: Scalars['Float'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type PartFilterInput = {
  skillType?: Maybe<SkillsType>;
  certificateType?: Maybe<EnglishCertificateType>;
  orderDirection?: Maybe<OrderDirection>;
  cursor?: Maybe<Scalars['String']>;
  partIds?: Maybe<PartIdsInput>;
};

/** Query Order Direction */
export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type PartIdsInput = {
  ids: Array<Scalars['String']>;
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
  title?: Maybe<Scalars['String']>;
};

export type Tests = {
  __typename?: 'Tests';
  tests: Array<Test>;
  total: Scalars['Float'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type TestFilterInput = {
  skillType?: Maybe<SkillsType>;
  certificateType?: Maybe<EnglishCertificateType>;
  orderDirection?: Maybe<OrderDirection>;
  cursor?: Maybe<Scalars['String']>;
  testIds?: Maybe<TestIdsInput>;
};

export type TestIdsInput = {
  ids: Array<Scalars['String']>;
};

export type TestCategories = {
  __typename?: 'TestCategories';
  testCategories: Array<TestCategory>;
  total: Scalars['Float'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type TestCategoryFilterInput = {
  certificateType?: Maybe<EnglishCertificateType>;
  orderDirection?: Maybe<OrderDirection>;
  cursor?: Maybe<Scalars['String']>;
  testCategoryIds?: Maybe<TestCategoryIdsInput>;
};

export type TestCategoryIdsInput = {
  ids: Array<Scalars['String']>;
};

export type TestGroups = {
  __typename?: 'TestGroups';
  testGroups: Array<TestGroup>;
  total: Scalars['Float'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type TestGroupFilterInput = {
  orderDirection?: Maybe<OrderDirection>;
  certificateType?: Maybe<EnglishCertificateType>;
  cursor?: Maybe<Scalars['String']>;
  testGroupIds?: Maybe<TestGroupIdsInput>;
};

export type TestGroupIdsInput = {
  ids: Array<Scalars['String']>;
};

export type Me = {
  __typename?: 'Me';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profileMediaUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  /** First + Last name */
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLink>;
  password?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  version: Scalars['Float'];
  impersonatingUser?: Maybe<ImpersonatingUser>;
};

export type ImpersonatingUser = {
  __typename?: 'ImpersonatingUser';
  userId: Scalars['String'];
  tokens: AccessTokens;
};

export type AccessTokens = {
  __typename?: 'AccessTokens';
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPart: Part;
  updatePart: Part;
  removePart: Scalars['String'];
  createQuestion: Question;
  updateQuestion: Question;
  removeQuestion: Scalars['String'];
  createTest: Test;
  updateTest: Test;
  updateTests: Array<Test>;
  removeFromCat: Test;
  removeTest: Scalars['String'];
  createTestCategory: TestCategory;
  updateTestCategory: TestCategory;
  removeTestCategory: Scalars['String'];
  uploadMedia: Asset;
  createTestQuestion: TestQuestion;
  createListTestQuestions: Array<TestQuestion>;
  removeTestQuestion: Scalars['String'];
  updateTestQuestion: TestQuestion;
  createTestGroup: TestGroup;
  updateTestGroup: TestGroup;
  removeTestGroup: Scalars['String'];
  login: Me;
  logout: Scalars['Boolean'];
  changePassword: Me;
  updateMe: Me;
};


export type MutationCreateUserArgs = {
  data: NewUserInput;
};


export type MutationCreatePartArgs = {
  data: NewPartInput;
};


export type MutationUpdatePartArgs = {
  data: NewPartInput;
};


export type MutationRemovePartArgs = {
  id: Scalars['String'];
};


export type MutationCreateQuestionArgs = {
  data: NewQuestionInput;
};


export type MutationUpdateQuestionArgs = {
  data: NewQuestionInput;
};


export type MutationRemoveQuestionArgs = {
  id: Scalars['String'];
};


export type MutationCreateTestArgs = {
  data: NewTestInput;
};


export type MutationUpdateTestArgs = {
  data: NewTestInput;
};


export type MutationUpdateTestsArgs = {
  data: TestsUpdateInput;
};


export type MutationRemoveFromCatArgs = {
  id: Scalars['String'];
};


export type MutationRemoveTestArgs = {
  id: Scalars['String'];
};


export type MutationCreateTestCategoryArgs = {
  data: NewTestCategoryInput;
};


export type MutationUpdateTestCategoryArgs = {
  data: NewTestCategoryInput;
};


export type MutationRemoveTestCategoryArgs = {
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


export type MutationUpdateTestQuestionArgs = {
  data: TestQuestionInputId;
};


export type MutationCreateTestGroupArgs = {
  data: NewTestGroupInput;
};


export type MutationUpdateTestGroupArgs = {
  data: NewTestGroupInput;
};


export type MutationRemoveTestGroupArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUpdateMeArgs = {
  data: UpdateMeInput;
};

export type NewUserInput = {
  profileMediaUrl?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLinkInput>;
  address?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role: UserRole;
};

export type SocialLinkInput = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
};

/** User Authorization Roles */
export enum UserRole {
  Member = 'Member',
  Ops = 'Ops',
  Admin = 'Admin'
}

export type NewPartInput = {
  id?: Maybe<Scalars['String']>;
  partName: Scalars['String'];
  skillType: SkillsType;
  description: Scalars['String'];
  certificateType: EnglishCertificateType;
  displayOrder?: Maybe<Scalars['Float']>;
};

export type NewQuestionInput = {
  id?: Maybe<Scalars['String']>;
  questionName: Scalars['String'];
  audioSec: Scalars['Float'];
  audioSecVN: Scalars['Float'];
  questionType: QuestionType;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  quickExplaination?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  skillType: SkillsType;
  certificateType: EnglishCertificateType;
  answers: Array<AnswersInput>;
  result: Scalars['String'];
  partId?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['String']>;
  answersGroup?: Maybe<Array<AnswersGroupInput>>;
};

export type AnswersInput = {
  keyAnswer?: Maybe<Scalars['String']>;
  answerContent?: Maybe<Scalars['String']>;
};

export type AnswersGroupInput = {
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<AnswersInput>>;
  questionName?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
};

export type NewTestInput = {
  id?: Maybe<Scalars['String']>;
  testCategoryId?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  skillType?: Maybe<SkillsType>;
  description?: Maybe<Scalars['String']>;
  explaination?: Maybe<Scalars['String']>;
  certificateType?: Maybe<EnglishCertificateType>;
  isPublished?: Maybe<Scalars['Boolean']>;
  partAndAudioSecs?: Maybe<Array<AudioSecondsInput>>;
  testQuestionInputIds?: Maybe<TestQuestionInputIds>;
  audioUrl?: Maybe<Scalars['String']>;
  displayOrder?: Maybe<Scalars['Float']>;
  displayOrderCategory?: Maybe<Scalars['Float']>;
};

export type AudioSecondsInput = {
  partId?: Maybe<Scalars['String']>;
  autdioSecs?: Maybe<Scalars['Float']>;
  displayOrder?: Maybe<Scalars['Float']>;
};

export type TestQuestionInputIds = {
  testId?: Maybe<Scalars['String']>;
  partIdAndQuestionIdsInput: Array<PartIdAndQuestionIdsInput>;
};

export type PartIdAndQuestionIdsInput = {
  partId?: Maybe<Scalars['String']>;
  questionIds: Array<Scalars['String']>;
};

export type TestsUpdateInput = {
  testIds: TestIdsInput;
  testCategoryId: Scalars['String'];
};

export type NewTestCategoryInput = {
  id?: Maybe<Scalars['String']>;
  testGroupId?: Maybe<Scalars['String']>;
  testCategoryName: Scalars['String'];
  certificateType?: Maybe<EnglishCertificateType>;
  isPublished?: Maybe<Scalars['Boolean']>;
  displayOrder?: Maybe<Scalars['Float']>;
  displayOrderGroup?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['String']>;
  partId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  displayOrder?: Maybe<Scalars['Float']>;
};

export type NewTestGroupInput = {
  id?: Maybe<Scalars['String']>;
  testGroupName?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  displayOrder?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  certificateType?: Maybe<EnglishCertificateType>;
};

/** Change password */
export type ChangePasswordInput = {
  token: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Update me */
export type UpdateMeInput = {
  profileMediaUrl?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLinkInput>;
  address?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export const AssetFragmentDoc = gql`
    fragment Asset on Asset {
  url
  name
  type
  path
}
    `;
export const QuestionGroupFragmentDoc = gql`
    fragment QuestionGroup on Question {
  id
  questionName
  audioSec
  audioSecVN
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
  questionGroupOrder
  isGroup
}
    `;
export const QuestionFragmentDoc = gql`
    fragment Question on Question {
  id
  questionName
  audioSec
  audioSecVN
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
  questionGroupOrder
  isGroup
  questionGroups {
    ...QuestionGroup
  }
}
    ${QuestionGroupFragmentDoc}`;
export const PartFragmentDoc = gql`
    fragment Part on Part {
  id
  partName
  description
  skillType
  certificateType
  displayOrder
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
  displayOrder
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
  explaination
  audioUrl
  partAndAudioSecs {
    partId
    autdioSecs
    displayOrder
  }
  testQuestions {
    ...TestQuestion
  }
  isPublished
  displayOrder
  displayOrderCategory
}
    ${TestQuestionFragmentDoc}`;
export const TestCategoryFragmentDoc = gql`
    fragment TestCategory on TestCategory {
  id
  testCategoryName
  certificateType
  tests {
    ...Test
  }
  testGroup {
    id
  }
  isPublished
  displayOrder
  displayOrderGroup
}
    ${TestFragmentDoc}`;
export const TestGroupFragmentDoc = gql`
    fragment TestGroup on TestGroup {
  id
  testGroupName
  parentId
  certificateType
  link
  testCategories {
    ...TestCategory
  }
  isPublished
  displayOrder
}
    ${TestCategoryFragmentDoc}`;
export const UserFragmentDoc = gql`
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
export const MeFragmentDoc = gql`
    fragment Me on Me {
  id
  firstName
  lastName
  email
  role
  address
  profileMediaUrl
  name
  impersonatingUser {
    userId
    tokens {
      accessToken
      refreshToken
    }
  }
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
    query getParts($data: PartFilterInput!) {
  getParts(data: $data) {
    parts {
      ...Part
    }
    total
    nextCursor
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
 *      data: // value for 'data'
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
export const GetPartsFromIdsDocument = gql`
    query getPartsFromIds($data: PartIdsInput!) {
  getPartsFromIds(data: $data) {
    ...Part
  }
}
    ${PartFragmentDoc}`;
export type GetPartsFromIdsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>, 'query'> & ({ variables: GetPartsFromIdsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPartsFromIdsComponent = (props: GetPartsFromIdsComponentProps) => (
      <ApolloReactComponents.Query<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables> query={GetPartsFromIdsDocument} {...props} />
    );
    

/**
 * __useGetPartsFromIdsQuery__
 *
 * To run a query within a React component, call `useGetPartsFromIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPartsFromIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPartsFromIdsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetPartsFromIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>(GetPartsFromIdsDocument, baseOptions);
      }
export function useGetPartsFromIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>(GetPartsFromIdsDocument, baseOptions);
        }
export type GetPartsFromIdsQueryHookResult = ReturnType<typeof useGetPartsFromIdsQuery>;
export type GetPartsFromIdsLazyQueryHookResult = ReturnType<typeof useGetPartsFromIdsLazyQuery>;
export type GetPartsFromIdsQueryResult = ApolloReactCommon.QueryResult<GetPartsFromIdsQuery, GetPartsFromIdsQueryVariables>;
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
export const RemovePartDocument = gql`
    mutation removePart($id: String!) {
  removePart(id: $id)
}
    `;
export type RemovePartMutationFn = ApolloReactCommon.MutationFunction<RemovePartMutation, RemovePartMutationVariables>;
export type RemovePartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemovePartMutation, RemovePartMutationVariables>, 'mutation'>;

    export const RemovePartComponent = (props: RemovePartComponentProps) => (
      <ApolloReactComponents.Mutation<RemovePartMutation, RemovePartMutationVariables> mutation={RemovePartDocument} {...props} />
    );
    

/**
 * __useRemovePartMutation__
 *
 * To run a mutation, you first call `useRemovePartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePartMutation, { data, loading, error }] = useRemovePartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovePartMutation, RemovePartMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovePartMutation, RemovePartMutationVariables>(RemovePartDocument, baseOptions);
      }
export type RemovePartMutationHookResult = ReturnType<typeof useRemovePartMutation>;
export type RemovePartMutationResult = ApolloReactCommon.MutationResult<RemovePartMutation>;
export type RemovePartMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovePartMutation, RemovePartMutationVariables>;
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
export const RemoveQuestionDocument = gql`
    mutation removeQuestion($id: String!) {
  removeQuestion(id: $id)
}
    `;
export type RemoveQuestionMutationFn = ApolloReactCommon.MutationFunction<RemoveQuestionMutation, RemoveQuestionMutationVariables>;
export type RemoveQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveQuestionMutation, RemoveQuestionMutationVariables>, 'mutation'>;

    export const RemoveQuestionComponent = (props: RemoveQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveQuestionMutation, RemoveQuestionMutationVariables> mutation={RemoveQuestionDocument} {...props} />
    );
    

/**
 * __useRemoveQuestionMutation__
 *
 * To run a mutation, you first call `useRemoveQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeQuestionMutation, { data, loading, error }] = useRemoveQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveQuestionMutation, RemoveQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveQuestionMutation, RemoveQuestionMutationVariables>(RemoveQuestionDocument, baseOptions);
      }
export type RemoveQuestionMutationHookResult = ReturnType<typeof useRemoveQuestionMutation>;
export type RemoveQuestionMutationResult = ApolloReactCommon.MutationResult<RemoveQuestionMutation>;
export type RemoveQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveQuestionMutation, RemoveQuestionMutationVariables>;
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
export const UpdateTestDocument = gql`
    mutation updateTest($data: NewTestInput!) {
  updateTest(data: $data) {
    ...Test
  }
}
    ${TestFragmentDoc}`;
export type UpdateTestMutationFn = ApolloReactCommon.MutationFunction<UpdateTestMutation, UpdateTestMutationVariables>;
export type UpdateTestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTestMutation, UpdateTestMutationVariables>, 'mutation'>;

    export const UpdateTestComponent = (props: UpdateTestComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTestMutation, UpdateTestMutationVariables> mutation={UpdateTestDocument} {...props} />
    );
    

/**
 * __useUpdateTestMutation__
 *
 * To run a mutation, you first call `useUpdateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestMutation, { data, loading, error }] = useUpdateTestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTestMutation, UpdateTestMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTestMutation, UpdateTestMutationVariables>(UpdateTestDocument, baseOptions);
      }
export type UpdateTestMutationHookResult = ReturnType<typeof useUpdateTestMutation>;
export type UpdateTestMutationResult = ApolloReactCommon.MutationResult<UpdateTestMutation>;
export type UpdateTestMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTestMutation, UpdateTestMutationVariables>;
export const UpdateTestsDocument = gql`
    mutation updateTests($data: TestsUpdateInput!) {
  updateTests(data: $data) {
    ...Test
  }
}
    ${TestFragmentDoc}`;
export type UpdateTestsMutationFn = ApolloReactCommon.MutationFunction<UpdateTestsMutation, UpdateTestsMutationVariables>;
export type UpdateTestsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTestsMutation, UpdateTestsMutationVariables>, 'mutation'>;

    export const UpdateTestsComponent = (props: UpdateTestsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTestsMutation, UpdateTestsMutationVariables> mutation={UpdateTestsDocument} {...props} />
    );
    

/**
 * __useUpdateTestsMutation__
 *
 * To run a mutation, you first call `useUpdateTestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestsMutation, { data, loading, error }] = useUpdateTestsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTestsMutation, UpdateTestsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTestsMutation, UpdateTestsMutationVariables>(UpdateTestsDocument, baseOptions);
      }
export type UpdateTestsMutationHookResult = ReturnType<typeof useUpdateTestsMutation>;
export type UpdateTestsMutationResult = ApolloReactCommon.MutationResult<UpdateTestsMutation>;
export type UpdateTestsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTestsMutation, UpdateTestsMutationVariables>;
export const RemoveFromCatDocument = gql`
    mutation removeFromCat($id: String!) {
  removeFromCat(id: $id) {
    ...Test
  }
}
    ${TestFragmentDoc}`;
export type RemoveFromCatMutationFn = ApolloReactCommon.MutationFunction<RemoveFromCatMutation, RemoveFromCatMutationVariables>;
export type RemoveFromCatComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveFromCatMutation, RemoveFromCatMutationVariables>, 'mutation'>;

    export const RemoveFromCatComponent = (props: RemoveFromCatComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveFromCatMutation, RemoveFromCatMutationVariables> mutation={RemoveFromCatDocument} {...props} />
    );
    

/**
 * __useRemoveFromCatMutation__
 *
 * To run a mutation, you first call `useRemoveFromCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCatMutation, { data, loading, error }] = useRemoveFromCatMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFromCatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFromCatMutation, RemoveFromCatMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveFromCatMutation, RemoveFromCatMutationVariables>(RemoveFromCatDocument, baseOptions);
      }
export type RemoveFromCatMutationHookResult = ReturnType<typeof useRemoveFromCatMutation>;
export type RemoveFromCatMutationResult = ApolloReactCommon.MutationResult<RemoveFromCatMutation>;
export type RemoveFromCatMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveFromCatMutation, RemoveFromCatMutationVariables>;
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
export const RemoveTestDocument = gql`
    mutation removeTest($id: String!) {
  removeTest(id: $id)
}
    `;
export type RemoveTestMutationFn = ApolloReactCommon.MutationFunction<RemoveTestMutation, RemoveTestMutationVariables>;
export type RemoveTestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveTestMutation, RemoveTestMutationVariables>, 'mutation'>;

    export const RemoveTestComponent = (props: RemoveTestComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveTestMutation, RemoveTestMutationVariables> mutation={RemoveTestDocument} {...props} />
    );
    

/**
 * __useRemoveTestMutation__
 *
 * To run a mutation, you first call `useRemoveTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTestMutation, { data, loading, error }] = useRemoveTestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTestMutation, RemoveTestMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTestMutation, RemoveTestMutationVariables>(RemoveTestDocument, baseOptions);
      }
export type RemoveTestMutationHookResult = ReturnType<typeof useRemoveTestMutation>;
export type RemoveTestMutationResult = ApolloReactCommon.MutationResult<RemoveTestMutation>;
export type RemoveTestMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTestMutation, RemoveTestMutationVariables>;
export const GetTestsDocument = gql`
    query getTests($data: TestFilterInput!) {
  getTests(data: $data) {
    tests {
      ...Test
    }
    total
    nextCursor
  }
}
    ${TestFragmentDoc}`;
export type GetTestsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestsQuery, GetTestsQueryVariables>, 'query'> & ({ variables: GetTestsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestsComponent = (props: GetTestsComponentProps) => (
      <ApolloReactComponents.Query<GetTestsQuery, GetTestsQueryVariables> query={GetTestsDocument} {...props} />
    );
    

/**
 * __useGetTestsQuery__
 *
 * To run a query within a React component, call `useGetTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, baseOptions);
      }
export function useGetTestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, baseOptions);
        }
export type GetTestsQueryHookResult = ReturnType<typeof useGetTestsQuery>;
export type GetTestsLazyQueryHookResult = ReturnType<typeof useGetTestsLazyQuery>;
export type GetTestsQueryResult = ApolloReactCommon.QueryResult<GetTestsQuery, GetTestsQueryVariables>;
export const CreateTestCategoryDocument = gql`
    mutation createTestCategory($data: NewTestCategoryInput!) {
  createTestCategory(data: $data) {
    ...TestCategory
  }
}
    ${TestCategoryFragmentDoc}`;
export type CreateTestCategoryMutationFn = ApolloReactCommon.MutationFunction<CreateTestCategoryMutation, CreateTestCategoryMutationVariables>;
export type CreateTestCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTestCategoryMutation, CreateTestCategoryMutationVariables>, 'mutation'>;

    export const CreateTestCategoryComponent = (props: CreateTestCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTestCategoryMutation, CreateTestCategoryMutationVariables> mutation={CreateTestCategoryDocument} {...props} />
    );
    

/**
 * __useCreateTestCategoryMutation__
 *
 * To run a mutation, you first call `useCreateTestCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestCategoryMutation, { data, loading, error }] = useCreateTestCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTestCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTestCategoryMutation, CreateTestCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTestCategoryMutation, CreateTestCategoryMutationVariables>(CreateTestCategoryDocument, baseOptions);
      }
export type CreateTestCategoryMutationHookResult = ReturnType<typeof useCreateTestCategoryMutation>;
export type CreateTestCategoryMutationResult = ApolloReactCommon.MutationResult<CreateTestCategoryMutation>;
export type CreateTestCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTestCategoryMutation, CreateTestCategoryMutationVariables>;
export const UpdateTestCategoryDocument = gql`
    mutation updateTestCategory($data: NewTestCategoryInput!) {
  updateTestCategory(data: $data) {
    ...TestCategory
  }
}
    ${TestCategoryFragmentDoc}`;
export type UpdateTestCategoryMutationFn = ApolloReactCommon.MutationFunction<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables>;
export type UpdateTestCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables>, 'mutation'>;

    export const UpdateTestCategoryComponent = (props: UpdateTestCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables> mutation={UpdateTestCategoryDocument} {...props} />
    );
    

/**
 * __useUpdateTestCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateTestCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestCategoryMutation, { data, loading, error }] = useUpdateTestCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables>(UpdateTestCategoryDocument, baseOptions);
      }
export type UpdateTestCategoryMutationHookResult = ReturnType<typeof useUpdateTestCategoryMutation>;
export type UpdateTestCategoryMutationResult = ApolloReactCommon.MutationResult<UpdateTestCategoryMutation>;
export type UpdateTestCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTestCategoryMutation, UpdateTestCategoryMutationVariables>;
export const GetTestCategoryDocument = gql`
    query getTestCategory($id: String!) {
  getTestCategory(id: $id) {
    ...TestCategory
  }
}
    ${TestCategoryFragmentDoc}`;
export type GetTestCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestCategoryQuery, GetTestCategoryQueryVariables>, 'query'> & ({ variables: GetTestCategoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestCategoryComponent = (props: GetTestCategoryComponentProps) => (
      <ApolloReactComponents.Query<GetTestCategoryQuery, GetTestCategoryQueryVariables> query={GetTestCategoryDocument} {...props} />
    );
    

/**
 * __useGetTestCategoryQuery__
 *
 * To run a query within a React component, call `useGetTestCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTestCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestCategoryQuery, GetTestCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestCategoryQuery, GetTestCategoryQueryVariables>(GetTestCategoryDocument, baseOptions);
      }
export function useGetTestCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestCategoryQuery, GetTestCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestCategoryQuery, GetTestCategoryQueryVariables>(GetTestCategoryDocument, baseOptions);
        }
export type GetTestCategoryQueryHookResult = ReturnType<typeof useGetTestCategoryQuery>;
export type GetTestCategoryLazyQueryHookResult = ReturnType<typeof useGetTestCategoryLazyQuery>;
export type GetTestCategoryQueryResult = ApolloReactCommon.QueryResult<GetTestCategoryQuery, GetTestCategoryQueryVariables>;
export const RemoveTestCategoryDocument = gql`
    mutation removeTestCategory($id: String!) {
  removeTestCategory(id: $id)
}
    `;
export type RemoveTestCategoryMutationFn = ApolloReactCommon.MutationFunction<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables>;
export type RemoveTestCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables>, 'mutation'>;

    export const RemoveTestCategoryComponent = (props: RemoveTestCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables> mutation={RemoveTestCategoryDocument} {...props} />
    );
    

/**
 * __useRemoveTestCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveTestCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTestCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTestCategoryMutation, { data, loading, error }] = useRemoveTestCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTestCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables>(RemoveTestCategoryDocument, baseOptions);
      }
export type RemoveTestCategoryMutationHookResult = ReturnType<typeof useRemoveTestCategoryMutation>;
export type RemoveTestCategoryMutationResult = ApolloReactCommon.MutationResult<RemoveTestCategoryMutation>;
export type RemoveTestCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTestCategoryMutation, RemoveTestCategoryMutationVariables>;
export const GetTestCategoriesDocument = gql`
    query getTestCategories($data: TestCategoryFilterInput!) {
  getTestCategories(data: $data) {
    testCategories {
      ...TestCategory
    }
    total
    nextCursor
  }
}
    ${TestCategoryFragmentDoc}`;
export type GetTestCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>, 'query'> & ({ variables: GetTestCategoriesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestCategoriesComponent = (props: GetTestCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetTestCategoriesQuery, GetTestCategoriesQueryVariables> query={GetTestCategoriesDocument} {...props} />
    );
    

/**
 * __useGetTestCategoriesQuery__
 *
 * To run a query within a React component, call `useGetTestCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestCategoriesQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTestCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>(GetTestCategoriesDocument, baseOptions);
      }
export function useGetTestCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>(GetTestCategoriesDocument, baseOptions);
        }
export type GetTestCategoriesQueryHookResult = ReturnType<typeof useGetTestCategoriesQuery>;
export type GetTestCategoriesLazyQueryHookResult = ReturnType<typeof useGetTestCategoriesLazyQuery>;
export type GetTestCategoriesQueryResult = ApolloReactCommon.QueryResult<GetTestCategoriesQuery, GetTestCategoriesQueryVariables>;
export const CreateTestGroupDocument = gql`
    mutation createTestGroup($data: NewTestGroupInput!) {
  createTestGroup(data: $data) {
    ...TestGroup
  }
}
    ${TestGroupFragmentDoc}`;
export type CreateTestGroupMutationFn = ApolloReactCommon.MutationFunction<CreateTestGroupMutation, CreateTestGroupMutationVariables>;
export type CreateTestGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTestGroupMutation, CreateTestGroupMutationVariables>, 'mutation'>;

    export const CreateTestGroupComponent = (props: CreateTestGroupComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTestGroupMutation, CreateTestGroupMutationVariables> mutation={CreateTestGroupDocument} {...props} />
    );
    

/**
 * __useCreateTestGroupMutation__
 *
 * To run a mutation, you first call `useCreateTestGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestGroupMutation, { data, loading, error }] = useCreateTestGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTestGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTestGroupMutation, CreateTestGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTestGroupMutation, CreateTestGroupMutationVariables>(CreateTestGroupDocument, baseOptions);
      }
export type CreateTestGroupMutationHookResult = ReturnType<typeof useCreateTestGroupMutation>;
export type CreateTestGroupMutationResult = ApolloReactCommon.MutationResult<CreateTestGroupMutation>;
export type CreateTestGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTestGroupMutation, CreateTestGroupMutationVariables>;
export const UpdateTestGroupDocument = gql`
    mutation updateTestGroup($data: NewTestGroupInput!) {
  updateTestGroup(data: $data) {
    ...TestGroup
  }
}
    ${TestGroupFragmentDoc}`;
export type UpdateTestGroupMutationFn = ApolloReactCommon.MutationFunction<UpdateTestGroupMutation, UpdateTestGroupMutationVariables>;
export type UpdateTestGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTestGroupMutation, UpdateTestGroupMutationVariables>, 'mutation'>;

    export const UpdateTestGroupComponent = (props: UpdateTestGroupComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTestGroupMutation, UpdateTestGroupMutationVariables> mutation={UpdateTestGroupDocument} {...props} />
    );
    

/**
 * __useUpdateTestGroupMutation__
 *
 * To run a mutation, you first call `useUpdateTestGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestGroupMutation, { data, loading, error }] = useUpdateTestGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTestGroupMutation, UpdateTestGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTestGroupMutation, UpdateTestGroupMutationVariables>(UpdateTestGroupDocument, baseOptions);
      }
export type UpdateTestGroupMutationHookResult = ReturnType<typeof useUpdateTestGroupMutation>;
export type UpdateTestGroupMutationResult = ApolloReactCommon.MutationResult<UpdateTestGroupMutation>;
export type UpdateTestGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTestGroupMutation, UpdateTestGroupMutationVariables>;
export const GetTestGroupDocument = gql`
    query getTestGroup($id: String!) {
  getTestGroup(id: $id) {
    ...TestGroup
  }
}
    ${TestGroupFragmentDoc}`;
export type GetTestGroupComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestGroupQuery, GetTestGroupQueryVariables>, 'query'> & ({ variables: GetTestGroupQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestGroupComponent = (props: GetTestGroupComponentProps) => (
      <ApolloReactComponents.Query<GetTestGroupQuery, GetTestGroupQueryVariables> query={GetTestGroupDocument} {...props} />
    );
    

/**
 * __useGetTestGroupQuery__
 *
 * To run a query within a React component, call `useGetTestGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTestGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestGroupQuery, GetTestGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestGroupQuery, GetTestGroupQueryVariables>(GetTestGroupDocument, baseOptions);
      }
export function useGetTestGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestGroupQuery, GetTestGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestGroupQuery, GetTestGroupQueryVariables>(GetTestGroupDocument, baseOptions);
        }
export type GetTestGroupQueryHookResult = ReturnType<typeof useGetTestGroupQuery>;
export type GetTestGroupLazyQueryHookResult = ReturnType<typeof useGetTestGroupLazyQuery>;
export type GetTestGroupQueryResult = ApolloReactCommon.QueryResult<GetTestGroupQuery, GetTestGroupQueryVariables>;
export const GetTestGroupsDocument = gql`
    query getTestGroups($data: TestGroupFilterInput!) {
  getTestGroups(data: $data) {
    testGroups {
      ...TestGroup
    }
    total
    nextCursor
  }
}
    ${TestGroupFragmentDoc}`;
export type GetTestGroupsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTestGroupsQuery, GetTestGroupsQueryVariables>, 'query'> & ({ variables: GetTestGroupsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTestGroupsComponent = (props: GetTestGroupsComponentProps) => (
      <ApolloReactComponents.Query<GetTestGroupsQuery, GetTestGroupsQueryVariables> query={GetTestGroupsDocument} {...props} />
    );
    

/**
 * __useGetTestGroupsQuery__
 *
 * To run a query within a React component, call `useGetTestGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestGroupsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTestGroupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTestGroupsQuery, GetTestGroupsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTestGroupsQuery, GetTestGroupsQueryVariables>(GetTestGroupsDocument, baseOptions);
      }
export function useGetTestGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTestGroupsQuery, GetTestGroupsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTestGroupsQuery, GetTestGroupsQueryVariables>(GetTestGroupsDocument, baseOptions);
        }
export type GetTestGroupsQueryHookResult = ReturnType<typeof useGetTestGroupsQuery>;
export type GetTestGroupsLazyQueryHookResult = ReturnType<typeof useGetTestGroupsLazyQuery>;
export type GetTestGroupsQueryResult = ApolloReactCommon.QueryResult<GetTestGroupsQuery, GetTestGroupsQueryVariables>;
export const RemoveTestGroupDocument = gql`
    mutation removeTestGroup($id: String!) {
  removeTestGroup(id: $id)
}
    `;
export type RemoveTestGroupMutationFn = ApolloReactCommon.MutationFunction<RemoveTestGroupMutation, RemoveTestGroupMutationVariables>;
export type RemoveTestGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveTestGroupMutation, RemoveTestGroupMutationVariables>, 'mutation'>;

    export const RemoveTestGroupComponent = (props: RemoveTestGroupComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveTestGroupMutation, RemoveTestGroupMutationVariables> mutation={RemoveTestGroupDocument} {...props} />
    );
    

/**
 * __useRemoveTestGroupMutation__
 *
 * To run a mutation, you first call `useRemoveTestGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTestGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTestGroupMutation, { data, loading, error }] = useRemoveTestGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTestGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTestGroupMutation, RemoveTestGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTestGroupMutation, RemoveTestGroupMutationVariables>(RemoveTestGroupDocument, baseOptions);
      }
export type RemoveTestGroupMutationHookResult = ReturnType<typeof useRemoveTestGroupMutation>;
export type RemoveTestGroupMutationResult = ApolloReactCommon.MutationResult<RemoveTestGroupMutation>;
export type RemoveTestGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTestGroupMutation, RemoveTestGroupMutationVariables>;
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
export const UpdateTestQuestionDocument = gql`
    mutation updateTestQuestion($data: TestQuestionInputId!) {
  updateTestQuestion(data: $data) {
    ...TestQuestion
  }
}
    ${TestQuestionFragmentDoc}`;
export type UpdateTestQuestionMutationFn = ApolloReactCommon.MutationFunction<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables>;
export type UpdateTestQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables>, 'mutation'>;

    export const UpdateTestQuestionComponent = (props: UpdateTestQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables> mutation={UpdateTestQuestionDocument} {...props} />
    );
    

/**
 * __useUpdateTestQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateTestQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestQuestionMutation, { data, loading, error }] = useUpdateTestQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables>(UpdateTestQuestionDocument, baseOptions);
      }
export type UpdateTestQuestionMutationHookResult = ReturnType<typeof useUpdateTestQuestionMutation>;
export type UpdateTestQuestionMutationResult = ApolloReactCommon.MutationResult<UpdateTestQuestionMutation>;
export type UpdateTestQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTestQuestionMutation, UpdateTestQuestionMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: NewUserInput!) {
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
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const UpdateMeDocument = gql`
    mutation updateMe($data: UpdateMeInput!) {
  updateMe(data: $data) {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export type UpdateMeMutationFn = ApolloReactCommon.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;
export type UpdateMeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMeMutation, UpdateMeMutationVariables>, 'mutation'>;

    export const UpdateMeComponent = (props: UpdateMeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMeMutation, UpdateMeMutationVariables> mutation={UpdateMeDocument} {...props} />
    );
    

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, baseOptions);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = ApolloReactCommon.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export type AssetFragment = { __typename?: 'Asset', url: string, name: string, type: string, path: string };

export type UploadMediaMutationVariables = Exact<{
  data: AssetInput;
}>;


export type UploadMediaMutation = { __typename?: 'Mutation', uploadMedia: (
    { __typename?: 'Asset' }
    & AssetFragment
  ) };

export type PartFragment = { __typename?: 'Part', id: string, partName: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType, displayOrder: number };

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
  data: PartFilterInput;
}>;


export type GetPartsQuery = { __typename?: 'Query', getParts: { __typename?: 'Parts', total: number, nextCursor?: Maybe<string>, parts: Array<(
      { __typename?: 'Part' }
      & PartFragment
    )> } };

export type GetPartsFromIdsQueryVariables = Exact<{
  data: PartIdsInput;
}>;


export type GetPartsFromIdsQuery = { __typename?: 'Query', getPartsFromIds: Array<(
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

export type RemovePartMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemovePartMutation = { __typename?: 'Mutation', removePart: string };

export type QuestionGroupFragment = { __typename?: 'Question', id: string, questionName: string, audioSec: number, audioSecVN: number, questionType: QuestionType, image?: Maybe<string>, content?: Maybe<string>, description?: Maybe<string>, skillType: SkillsType, certificateType: EnglishCertificateType, explaination?: Maybe<string>, result: string, questionGroupOrder: number, isGroup: boolean, answers: Array<{ __typename?: 'Answers', keyAnswer?: Maybe<string>, answerContent?: Maybe<string> }> };

export type QuestionFragment = { __typename?: 'Question', id: string, questionName: string, audioSec: number, audioSecVN: number, questionType: QuestionType, image?: Maybe<string>, content?: Maybe<string>, description?: Maybe<string>, skillType: SkillsType, certificateType: EnglishCertificateType, explaination?: Maybe<string>, result: string, questionGroupOrder: number, isGroup: boolean, answers: Array<{ __typename?: 'Answers', keyAnswer?: Maybe<string>, answerContent?: Maybe<string> }>, questionGroups: Array<(
    { __typename?: 'Question' }
    & QuestionGroupFragment
  )> };

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

export type RemoveQuestionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveQuestionMutation = { __typename?: 'Mutation', removeQuestion: string };

export type TestFragment = { __typename?: 'Test', id: string, testName: string, description: string, skillType: SkillsType, certificateType: EnglishCertificateType, explaination: string, audioUrl: string, isPublished: boolean, displayOrder: number, displayOrderCategory: number, partAndAudioSecs?: Maybe<Array<{ __typename?: 'PartAndAudioSeconds', partId?: Maybe<string>, autdioSecs?: Maybe<number>, displayOrder?: Maybe<number> }>>, testQuestions?: Maybe<Array<(
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

export type UpdateTestMutationVariables = Exact<{
  data: NewTestInput;
}>;


export type UpdateTestMutation = { __typename?: 'Mutation', updateTest: (
    { __typename?: 'Test' }
    & TestFragment
  ) };

export type UpdateTestsMutationVariables = Exact<{
  data: TestsUpdateInput;
}>;


export type UpdateTestsMutation = { __typename?: 'Mutation', updateTests: Array<(
    { __typename?: 'Test' }
    & TestFragment
  )> };

export type RemoveFromCatMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveFromCatMutation = { __typename?: 'Mutation', removeFromCat: (
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

export type RemoveTestMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTestMutation = { __typename?: 'Mutation', removeTest: string };

export type GetTestsQueryVariables = Exact<{
  data: TestFilterInput;
}>;


export type GetTestsQuery = { __typename?: 'Query', getTests: { __typename?: 'Tests', total: number, nextCursor?: Maybe<string>, tests: Array<(
      { __typename?: 'Test' }
      & TestFragment
    )> } };

export type TestCategoryFragment = { __typename?: 'TestCategory', id: string, testCategoryName: string, certificateType: EnglishCertificateType, isPublished: boolean, displayOrder: number, displayOrderGroup: number, tests?: Maybe<Array<(
    { __typename?: 'Test' }
    & TestFragment
  )>>, testGroup?: Maybe<{ __typename?: 'TestGroup', id: string }> };

export type CreateTestCategoryMutationVariables = Exact<{
  data: NewTestCategoryInput;
}>;


export type CreateTestCategoryMutation = { __typename?: 'Mutation', createTestCategory: (
    { __typename?: 'TestCategory' }
    & TestCategoryFragment
  ) };

export type UpdateTestCategoryMutationVariables = Exact<{
  data: NewTestCategoryInput;
}>;


export type UpdateTestCategoryMutation = { __typename?: 'Mutation', updateTestCategory: (
    { __typename?: 'TestCategory' }
    & TestCategoryFragment
  ) };

export type GetTestCategoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTestCategoryQuery = { __typename?: 'Query', getTestCategory: (
    { __typename?: 'TestCategory' }
    & TestCategoryFragment
  ) };

export type RemoveTestCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTestCategoryMutation = { __typename?: 'Mutation', removeTestCategory: string };

export type GetTestCategoriesQueryVariables = Exact<{
  data: TestCategoryFilterInput;
}>;


export type GetTestCategoriesQuery = { __typename?: 'Query', getTestCategories: { __typename?: 'TestCategories', total: number, nextCursor?: Maybe<string>, testCategories: Array<(
      { __typename?: 'TestCategory' }
      & TestCategoryFragment
    )> } };

export type TestGroupFragment = { __typename?: 'TestGroup', id: string, testGroupName: string, parentId?: Maybe<string>, certificateType: EnglishCertificateType, link: string, isPublished: boolean, displayOrder: number, testCategories?: Maybe<Array<(
    { __typename?: 'TestCategory' }
    & TestCategoryFragment
  )>> };

export type CreateTestGroupMutationVariables = Exact<{
  data: NewTestGroupInput;
}>;


export type CreateTestGroupMutation = { __typename?: 'Mutation', createTestGroup: (
    { __typename?: 'TestGroup' }
    & TestGroupFragment
  ) };

export type UpdateTestGroupMutationVariables = Exact<{
  data: NewTestGroupInput;
}>;


export type UpdateTestGroupMutation = { __typename?: 'Mutation', updateTestGroup: (
    { __typename?: 'TestGroup' }
    & TestGroupFragment
  ) };

export type GetTestGroupQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTestGroupQuery = { __typename?: 'Query', getTestGroup: (
    { __typename?: 'TestGroup' }
    & TestGroupFragment
  ) };

export type GetTestGroupsQueryVariables = Exact<{
  data: TestGroupFilterInput;
}>;


export type GetTestGroupsQuery = { __typename?: 'Query', getTestGroups: { __typename?: 'TestGroups', total: number, nextCursor?: Maybe<string>, testGroups: Array<(
      { __typename?: 'TestGroup' }
      & TestGroupFragment
    )> } };

export type RemoveTestGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTestGroupMutation = { __typename?: 'Mutation', removeTestGroup: string };

export type TestQuestionFragment = { __typename?: 'TestQuestion', id: string, displayOrder: number, question: (
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

export type UpdateTestQuestionMutationVariables = Exact<{
  data: TestQuestionInputId;
}>;


export type UpdateTestQuestionMutation = { __typename?: 'Mutation', updateTestQuestion: (
    { __typename?: 'TestQuestion' }
    & TestQuestionFragment
  ) };

export type UserFragment = { __typename?: 'User', id: string, firstName: string, lastName?: Maybe<string>, email: string, role: string, address?: Maybe<string>, profileMediaUrl?: Maybe<string> };

export type CreateUserMutationVariables = Exact<{
  data: NewUserInput;
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

export type MeFragment = { __typename?: 'Me', id: string, firstName: string, lastName?: Maybe<string>, email: string, role: string, address?: Maybe<string>, profileMediaUrl?: Maybe<string>, name: string, impersonatingUser?: Maybe<{ __typename?: 'ImpersonatingUser', userId: string, tokens: { __typename?: 'AccessTokens', accessToken: string, refreshToken: string } }> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: (
    { __typename?: 'Me' }
    & MeFragment
  ) };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<(
    { __typename?: 'Me' }
    & MeFragment
  )> };

export type UpdateMeMutationVariables = Exact<{
  data: UpdateMeInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: (
    { __typename?: 'Me' }
    & MeFragment
  ) };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };
