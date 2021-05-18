/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  CardHeader,
  Card,
  CardBody,
  Form,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorMessage from "../../../components/Error";
import {
  EnglishCertificateType,
  MediaType,
  NewBlogInput,
  useCreateBlogMutation,
  useGetBlogLazyQuery,
  useGetTestGroupsInfoQuery,
  useUniqueLinkBlogMutation,
  useUpdateBlogMutation,
} from "../../../../../schema/schema";
import { useMe } from "../../../../../hooks/useMe";
import PanelHeader from "../../../components/PanelHeader";
import { ImageUpload } from "../../../components/ImageUploader";
import config from "../../../../../config";
import TinyMCETextarea from "../../../components/TinyMCETextarea";
import { notificationAdd } from "../../../utils/Notification";
import { store } from "react-notifications-component";
import { generateLink } from "../../../utils/GenerateLink";
import Loading from "../../../../../components/Loading";
import { SelectCustom } from "../../../components/SelectCustom";
const penEdit = require("../../../../../assets/img/pen.svg");
interface BlogProps {}
const TestGroupDefaultOptions: { value: string; label: string }[] = [];

const CreateAndEditBlog: React.FC<BlogProps> = () => {
  const { id } = useParams() as any;
  const [getBlogQuery, getBlogResponse] = useGetBlogLazyQuery();
  const [uniqueLinkBlogMutation] = useUniqueLinkBlogMutation();
  const [createBlogMutation] = useCreateBlogMutation();
  const [updateBlogMutation] = useUpdateBlogMutation();
  const [path, setPath] = React.useState<string | null>(null);
  const [isDisableEditLink, setIsDisableEditLink] = React.useState(true);
  const [TestGroupOptions, setTestGroupOptions] = React.useState(
    TestGroupDefaultOptions
  );
  const [testGroupSelected, setTestGroupSelected] = React.useState(
    TestGroupOptions[0]
  );
  React.useEffect(() => {
    formik.setFieldValue("image", path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  React.useMemo(() => {
    if (!id) return;
    getBlogQuery({
      variables: { id },
    });
  }, [getBlogQuery, id]);
  const testGroupQuery = useGetTestGroupsInfoQuery({
    variables: {
      data: {
        certificateType: EnglishCertificateType.Toeic,
        shouldGetChild: true,
      },
    },
  });
  const testGroupsData = testGroupQuery.data?.getTestGroups.testGroups;
  React.useMemo(() => {
    if (testGroupsData) {
      setTestGroupOptions([
        ...TestGroupDefaultOptions,
        ...testGroupsData.map((t) => {
          return {
            value: t.id,
            label: t.testGroupName,
          };
        }),
      ]);
    }
  }, [testGroupsData]);
  const blog = getBlogResponse.data?.getBlog;
  React.useMemo(() => {
    blog &&
      setTestGroupSelected({
        value: blog.testGroup.id,
        label: blog.testGroup.testGroupName,
      });
  }, [blog]);

  const urlDefault = config.PATH_IMAGE + blog?.image;
  const me = useMe();
  const initialValues: NewBlogInput = {
    blogName: blog?.blogName || "",
    content: blog?.content || "",
    image: blog?.image || "",
    testGroupId: blog?.testGroup.id || "",
    authorId: me.id,
    link: blog?.link || "",
    metaTags: blog?.metaTags,
  };
  const [shouldValidate, setShouldValidate] = React.useState(false);
  const shouldShowPreview = path || blog?.image;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    validationSchema: yup.object().shape({
      blogName: yup.string().required("Blog name is a required field"),
      testGroupId: yup.string().required("Test group is a required field"),
    }),
    onSubmit: async (values) => {
      const { link, ...remainingData } = values;
      const linkTrim = link.trim();
      const res = await uniqueLinkBlogMutation({
        variables: {
          link: linkTrim,
          id,
        },
      });
      if (res.data?.uniqueLinkBlog) {
        formik.setErrors({
          link: "This link already exists, please try again !",
        });
        return;
      }
      if (id) {
        const result = await updateBlogMutation({
          variables: {
            data: { id, link: linkTrim, ...remainingData },
          },
        });
        const notification = notificationAdd("Blog", "Updated");
        if (result.data?.updateBlog) {
          store.addNotification(notification);
        }
        return;
      } else {
        const result = await createBlogMutation({
          variables: {
            data: { link: linkTrim, ...remainingData },
          },
        });
        const notification = notificationAdd("Blog", "Created");
        if (result.data?.createBlog) {
          store.addNotification(notification);
          formik.resetForm();
        }
      }
    },
  });
  // create and mark it draft
  if (getBlogResponse.loading) {
    return <Loading />;
  }

  return (
    <Form key={formik.submitCount} onSubmit={formik.handleSubmit}>
      <input name="authorId" value={formik.values.authorId} type="hidden" />
      <PanelHeader
        height="500"
        className="d-flex align-items-center justify-content-center"
        css={css`
          ${shouldShowPreview
            ? `background: url(${
                config.PATH_IMAGE + shouldShowPreview
              }) no-repeat;     background-position: center;
        background-size: cover;`
            : ""}
          .fileContainer {
            background: transparent !important;
            color: white !important;
            box-shadow: none !important;
            p {
              ${shouldShowPreview ? "display: none;" : ""}
            }
          }
          .chooseFileButton {
            border: 1px solid white;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(6px);
          }
        `}
      >
        <div className="w-50">
          <Input placeholder="Chose file" name="image" type="hidden" />
          <ImageUpload
            type={MediaType.Image}
            setPath={setPath}
            url={urlDefault}
            singleImage
            isShowPreview={false}
            path={path}
          />
          <ErrorMessage message={formik.errors.image} />
        </div>
      </PanelHeader>
      <div className="content">
        <Card>
          <CardHeader className="d-flex justify-content-between align-items-center">
            <h5 className="title">Create Blog</h5>
            <div>
              <Button
                type="submit"
                className="bg-info font-weight-bold font-10"
                onClick={() => {
                  setShouldValidate(true);
                }}
              >
                Submit
              </Button>
              <Link
                to={`/admin/blog`}
                className="bg-danger btn font-weight-bold font-10"
              >
                Cancel
              </Link>
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={6}>
                <div className="d-flex justify-content-between align-items-end">
                  <FormGroup className="w-100">
                    <label>Blog name</label>
                    <Input
                      placeholder="Blog name"
                      name="blogName"
                      type="text"
                      onChange={(e) => {
                        formik.handleChange(e);
                        const generatedLink = generateLink(e.target.value);
                        isDisableEditLink &&
                          formik.setFieldValue("link", generatedLink);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.blogName}
                      className={formik.errors.blogName && "input-error"}
                    />
                    <ErrorMessage message={formik.errors.blogName} />
                  </FormGroup>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-between align-items-end">
                  <FormGroup className="w-100">
                    <label>Test Group</label>
                    <SelectCustom
                      onChange={(opt: any) => {
                        setTestGroupSelected(opt);
                        formik.setFieldValue("testGroupId", opt.value);
                      }}
                      classNamePrefix="react-select"
                      placeholder="Chose test group"
                      value={testGroupSelected}
                      name="testGroupId"
                      options={TestGroupOptions}
                      isLoading={testGroupQuery.loading}
                      isDisabled={testGroupQuery.loading}
                    />
                    <ErrorMessage message={formik.errors.blogName} />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="d-flex justify-content-between align-items-end">
                  <FormGroup className="w-100">
                    <div className="d-flex align-items-center">
                      <Input
                        placeholder="Link"
                        name="link"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.link || ""}
                        className={formik.errors.link && "input-error"}
                        disabled={isDisableEditLink}
                      />
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => setIsDisableEditLink(false)}
                      >
                        <img alt="penEdit" src={penEdit} />
                      </span>
                    </div>
                    <ErrorMessage message={formik.errors.link} />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="" md="12">
                <FormGroup>
                  <label>Content</label>
                  <TinyMCETextarea
                    textareaName="content"
                    onEditorChange={(e: any) => {
                      formik.setFieldValue("content", e);
                    }}
                    value={formik.values.content}
                  />
                </FormGroup>
                <ErrorMessage message={formik.errors.content} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Form>
  );
};

export default CreateAndEditBlog;
