import { gql } from '@apollo/client';
import { TEST_GROUP_FRAGMENT } from './TestGroup';
import { USER_FRAGMENT } from './User';


export const BLOG_FRAGMENT = gql`
  fragment Blog on Blog {
    id
    blogName
    link
    metaTags {
      imageUrl
      description
    }
    content
    author {
        id
        firstName
        lastName
        email
        role
        address
        profileMediaUrl
    }
    testGroup {
        id
        testGroupName
        certificateType
    }
    image
    displayOrder
    createdAt
    updatedAt
  }
  ${USER_FRAGMENT}
  ${TEST_GROUP_FRAGMENT}
`;

export const CREATE_BLOG = gql`
  mutation createBlog($data: NewBlogInput!) {
    createBlog(data: $data) {
      ...Blog
    }
  }
  ${BLOG_FRAGMENT}
`;

export const UPDATE_BLOG = gql`
  mutation updateBlog($data: NewBlogInput!) {
    updateBlog(data: $data) {
      ...Blog
    }
  }
  ${BLOG_FRAGMENT}
`;

export const UPDATE_BLOG_ORDER = gql`
  mutation updateBlogOrder($data: UpdateBlogOrderInput!) {
    updateBlogOrder(data: $data) {
      ...Blog
    }
  }
  ${BLOG_FRAGMENT}
`;

export const GET_BLOG = gql `
  query getBlog($id: String!) {
    getBlog(id: $id) {
      ...Blog
    }
  }
  ${BLOG_FRAGMENT}
`;

export const GET_BLOGS = gql `
  query getBlogs($data: BlogsSearchInput!) {
    getBlogs(data: $data) {
        blogs{
          ...Blog
        }
        total
        nextCursor
      }
  }
  ${BLOG_FRAGMENT}
`;


export const DELETE_BLOG = gql `
  mutation deleteBlog($id: String!){
    deleteBlog(id: $id)
  }
`

export const UNIQUE_LINK_BLOG = gql `
  mutation uniqueLinkBlog($link: String!){
    uniqueLinkBlog(link: $link)
  }
`
