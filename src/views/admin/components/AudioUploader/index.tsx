import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Spinner } from "reactstrap";
import config from "../../../../config";
import { MediaType } from "../../../../schema/schema";
// import "./index.css";
interface ImageUploadProps {
  url?: string;
  type: MediaType;
  onChange: (val: string) => void;
  onClick: () => void;
}

const AudioUpload: React.FC<ImageUploadProps> = ({
  type,
  url,
  onChange,
  onClick
}) => {
  const [loading, setLoading] = React.useState(false);
  const [pathPreview, setPathPreview] = React.useState(url);

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    if(!file){
        return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("name", file?.name);
    data.append("type", file?.type);
    data.append("typeFolder", type.toLowerCase());
    setLoading(true);

    await fetch(config.UPLOAD_MEDIA + "media", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((response) =>
      response.json().then((res) => {
        if (res.success) {
          setLoading(false);
          setPathPreview(res.data.path);
          onChange(res.data.path);
        }
      })
    );
  };

  return (
      <>
    <div className="w-100 wrapper-input-image position-relative">
      <input
        className="w-100 ml-auto"
        type="file"
        onChange={handleChange}
        accept="audio/*"
      />
      <Button className="btn border-primary bg-transparent text-primary border">{pathPreview ? 'Replace Audio' : 'Upload Audio'}</Button>
      
    </div>
   
    {loading && <Spinner color="primary" />}
    {!loading && pathPreview && (
        <div className="position-relative">
        <ReactAudioPlayer
          src={config.PATH_IMAGE + (url ? url : pathPreview)}
          className="mb-4"
          controls
          controlsList={"nodownload"}
          id="audio1listening"
        />
        <a onClick={() => {
            setPathPreview('');
            onClick();
        }} className="bg-danger text-white d-block position-absolute font-weight-bold" style={{
            borderRadius: '100%',
            width: '28px',
            height: '28px',
            right: '-40px',
            top: '13px',
            textAlign: 'center',
            fontSize: '11px',
            paddingTop: '5px',
            cursor: 'pointer'
        }}>X</a>
        </div>
      )}
      </>
  );
};

export default AudioUpload;
