import React from "react";
import ImageUploader from "react-images-upload";
import { Spinner } from "reactstrap";
import config from "../../../../config";
import { MediaType, useUploadMediaMutation } from "../../../../schema/schema";
import "./index.css";
interface ImageUploadProps {
  url?: string;
  singleImage?: boolean;
  setPath?: (val: string) => void;
  type: MediaType;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  type,
  url,
  singleImage,
  setPath,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [pathPreview, setPathPreview] = React.useState("");
  React.useEffect(() => {
    url && setPathPreview(url);
  }, [url]);
  console.log(pathPreview);
  const [createUploadUrlMutation] = useUploadMediaMutation();
  const handleImageChange = async (e: any, p: any) => {
    console.log(p, e)
    const response = await createUploadUrlMutation({
      variables: {
        data: {
          name: e[0].name,
          type: e[0].type,
          typeFolder: type,
        },
      },
    });

    setLoading(true);
    const { url, path } = response.data!.uploadMedia!;
    const res = await fetch(url!, {
      method: "PUT",
      body: e[0],
      headers: {
        "Content-Type": e[0].type,
        "x-amz-acl": "public-read",
      },
    });

    if (res.ok) {
      setLoading(false);
      setPath && setPath(path);
      setPathPreview(config.PATH_IMAGE + path);
    }
  };

  return (
    <div className="w-100 text-center wrapper-input-image">
      <ImageUploader
        className="w-100 ml-auto"
        withIcon={false}
        buttonText="Choose images"
        onChange={(e, p) => {
          handleImageChange(e, p);
        }}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        singleImage={singleImage}
      />
      {loading && <Spinner color="primary" />}
      {!loading && pathPreview && (
        <div className="position-relative wrapper-img">
          <img className="img" src={pathPreview} alt="" />
          <span
            className="position-absolute"
            onClick={() => {
              setPathPreview("");
              setPath && setPath('');
            }}
          >
            X
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
