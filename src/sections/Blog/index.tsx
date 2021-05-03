import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Loading from "../../components/Loading";
import { NavbarContext } from "../../components/Navbars/NavbarContext";
import {
  useGetBlogsQuery,
  useGetTestGroupInfoQuery,
} from "../../schema/schema";
import BlogDetail from "./BlogDetail";
import ListBlog from "./ListBlog";

const Blog: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { testGroupsData } = React.useContext(NavbarContext)
  const { link } = useParams() as { link?: string };
  if (!link) {
    history.push("/home");
  }
  const testGroupData = testGroupsData?.find((e) => e.link === link);
  const { data: blogsQuery, loading } = useGetBlogsQuery({
    variables: {
      data: {
        testGroupId: testGroupData?.id,
      },
    },
  });
  const blogsData = blogsQuery?.getBlogs.blogs;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Switch>
        <Route path={`${match.url}/:blogId`}>
          <BlogDetail blogsData={blogsData} />
        </Route>
        <Route path={match.url}>
          <ListBlog blogsData={blogsData} />
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
