import React from "react";
import ImageUploader from 'react-images-upload';
interface ImageUploadProps {
    url?: string,
    singleImage?: boolean,
    onChange?: any
}

const ImageUpload: React.FC<ImageUploadProps> = ({ url, singleImage , onChange}) => {
  const [pictures, setPictures] = React.useState<string[]>([])
  const fileInput = React.useRef<HTMLInputElement>(null);
  const handleImageChange = async (e: any, p: any) => {
   

    const ps : string[] = [];
      e.map((p: any) => {
        ps.push(p.name)
        
      })
      setPictures(ps)
  };
  React.useEffect(() => {
    console.log(pictures)
  },[pictures])

  // const handleSubmit = e => {
  // e.preventDefault();
  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself
  // };
  const handleClick = () => {
    fileInput.current && fileInput.current.click();
  };

  return (
    <div className="w-100 text-center">
      <ImageUploader
                className="w-100 ml-auto"
                withIcon={false}
                buttonText='Choose images'
                onChange={(e, p) => {
                    handleImageChange(e, p)
                    onChange && onChange();
                }}
                withPreview={true}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                defaultImage={url}
                singleImage={singleImage}
            />
     
    </div>
  );
}


export default ImageUpload;
