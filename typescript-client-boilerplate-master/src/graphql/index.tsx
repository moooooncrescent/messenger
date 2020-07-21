import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  files?: Maybe<Array<Maybe<File>>>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  input?: Maybe<UserInput>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sessions?: Maybe<Array<Maybe<UserSession>>>;
};

export type UserSession = {
  __typename?: 'UserSession';
  id?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  activeTime?: Maybe<Scalars['Date']>;
  isActive?: Maybe<Scalars['Boolean']>;
  liveTime?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type UserInput = {
  id?: Maybe<Scalars['ID']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  file?: Maybe<File>;
  user?: Maybe<User>;
};


export type MutationFileArgs = {
  file: Scalars['Upload'];
};


export type MutationUserArgs = {
  input?: Maybe<UserInput>;
};


export type RegisterMutationVariables = Exact<{
  input?: Maybe<UserInput>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'login' | 'password' | 'email' | 'isDeleted' | 'createdAt' | 'updatedAt'>
  )> }
);

export type FileListQueryVariables = Exact<{ [key: string]: never; }>;


export type FileListQuery = (
  { __typename?: 'Query' }
  & { files?: Maybe<Array<Maybe<(
    { __typename?: 'File' }
    & Pick<File, 'id' | 'filename' | 'mimetype' | 'encoding' | 'isDeleted' | 'createdAt' | 'updatedAt'>
  )>>> }
);

export type UserQueryVariables = Exact<{
  input?: Maybe<UserInput>;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const RegisterDocument = gql`
    mutation Register($input: UserInput) {
  user(input: $input) {
    id
    login
    password
    email
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FileListDocument = gql`
    query FileList {
  files {
    id
    filename
    mimetype
    encoding
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export type FileListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FileListQuery, FileListQueryVariables>, 'query'>;

    export const FileListComponent = (props: FileListComponentProps) => (
      <ApolloReactComponents.Query<FileListQuery, FileListQueryVariables> query={FileListDocument} {...props} />
    );
    
export type FileListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FileListQuery, FileListQueryVariables>
    } & TChildProps;
export function withFileList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FileListQuery,
  FileListQueryVariables,
  FileListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FileListQuery, FileListQueryVariables, FileListProps<TChildProps, TDataName>>(FileListDocument, {
      alias: 'fileList',
      ...operationOptions
    });
};

/**
 * __useFileListQuery__
 *
 * To run a query within a React component, call `useFileListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFileListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FileListQuery, FileListQueryVariables>) {
        return ApolloReactHooks.useQuery<FileListQuery, FileListQueryVariables>(FileListDocument, baseOptions);
      }
export function useFileListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FileListQuery, FileListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FileListQuery, FileListQueryVariables>(FileListDocument, baseOptions);
        }
export type FileListQueryHookResult = ReturnType<typeof useFileListQuery>;
export type FileListLazyQueryHookResult = ReturnType<typeof useFileListLazyQuery>;
export type FileListQueryResult = ApolloReactCommon.QueryResult<FileListQuery, FileListQueryVariables>;
export const UserDocument = gql`
    query User($input: UserInput) {
  user(input: $input) {
    id
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'>;

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;