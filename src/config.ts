export const apiUrl = process.env.NODE_ENV === 'production' ? 'http://103.153.73.228' : 'http://localhost:4000';

const config = {
  GRAPHQL_SERVER_URL: `${apiUrl}/graphql`,
  PATH_IMAGE : `${apiUrl}/public/uploads/`,
  UPLOAD_MEDIA: `${apiUrl}/uploads/`,
}

export default config;
