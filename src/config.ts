export const apiUrl = process.env.NODE_ENV === 'production' ? 'https://54.255.167.21:4000' : 'http://localhost:3000';

const config = {
  GRAPHQL_SERVER_URL: process.env.NODE_ENV === 'production' ? 'https://54.255.167.21:4000/graphql' : `${apiUrl}/graphql`,
  PATH_IMAGE : 'http://tingadev.s3.amazonaws.com/',
}

export default config;
