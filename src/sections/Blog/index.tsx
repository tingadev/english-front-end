import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Loading from "../../components/Loading";
import {
  useGetBlogsQuery,
  useGetTestGroupInfoQuery,
} from "../../schema/schema";
import BlogDetail from "./BlogDetail";
import ListBlog from "./ListBlog";

const Blog: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { link } = useParams() as { link?: string };
  const linkArr = link?.split("-");
  let testGroupId = "";
  if (!link) {
    history.push("/home");
  }
  if (linkArr?.length && linkArr?.length > 0) {
    testGroupId = linkArr![linkArr?.length - 1];
  }
  if (!testGroupId) {
    history.push("/home");
  }
  const testGroupQuery = useGetTestGroupInfoQuery({
    variables: {
      id: testGroupId,
    },
  });
  const testGroupData = testGroupQuery.data?.getTestGroup;
  const { data: blogsQuery, loading } = useGetBlogsQuery({
    variables: {
      data: {
        testGroupId,
      },
    },
  });
  const blogsData = blogsQuery?.getBlogs.blogs;

  if (loading || testGroupQuery.loading) {
    return <Loading />;
  }
  return (
    <>
      <Switch>
        <Route path={`${match.url}/:blogId`}>
          <BlogDetail blogsData={blogsData} />
        </Route>
        <Route path={match.url}>
          <ListBlog blogsData={blogsData} testGroupData={testGroupData} />
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
