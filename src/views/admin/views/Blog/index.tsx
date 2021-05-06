import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import BlogHomePage from "./HomePage";
import CreateAndEditBlog from "./CreateAndEditBlog";

const BlogAdmin: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
      <Switch>
        <Route path={[`${match.path}/create-blog`, `${match.path}/:id/edit`]}>
          <CreateAndEditBlog />
        </Route>
        <Route path={`${match.path}`}>
          <BlogHomePage />
        </Route>
      </Switch>
  );
};

export default BlogAdmin;
