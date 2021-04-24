import React from "react";
import { CardBody, Table, Button, Card } from "reactstrap";
import { Link, useRouteMatch } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
} from "../../../../../schema/schema";
import ModalDelete from "../../../components/Modal/Delete";
import Loading from "../../../../../components/Loading";
interface ListTestProps {}

const ListBlog: React.FC<ListTestProps> = () => {
  const match = useRouteMatch();
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const [idRemove, setIdRemove] = React.useState("");
  const { data, loading, refetch } = useGetBlogsQuery({
    variables: {
      data: {},
    },
  });
  const deleteBlog = async () => {
    await deleteBlogMutation({
      variables: {
        id: idRemove,
      },
    });
  };
  const [
    deleteBlogMutation,
    deleteBlogMutationResult,
  ] = useDeleteBlogMutation();

  React.useMemo(() => {
    deleteBlogMutationResult.data?.deleteBlog && refetch();
  }, [deleteBlogMutationResult.data, refetch]);

  if (loading) {
    return <Loading />;
  }
  const blogs = data?.getBlogs.blogs;
  return (
    <Card>
      <CardBody>
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
              <th className="text-right" style={{ width: "5%" }}></th>
              <th className="text-center font-weight-semi">Blog Name</th>
              <th className="text-center font-weight-semi">Test Group</th>
              <th className="text-center font-weight-semi">Author</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((blog, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-left font-weight-semi">
                      {blog.blogName}
                    </td>
                    <td className="text-center">
                      {blog.testGroup.testGroupName}
                    </td>
                    <td className="text-center">
                      {blog.author.firstName + " " + blog.author.lastName}
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="info"
                        size="sm"
                        type="button"
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </Button>
                      <Link
                        className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                        to={`${match.url}/${blog.id}/edit`}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </Link>
                      <Button
                        className="btn-icon btn-round"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={() => {
                          setIsOpenModalDelete(true);
                          setIdRemove(blog.id);
                        }}
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </CardBody>
      <ModalDelete
        isOpen={isOpenModalDelete}
        loading={deleteBlogMutationResult.loading}
        callback={deleteBlog}
        onClose={setIsOpenModalDelete}
      />
    </Card>
  );
};

export default ListBlog;
