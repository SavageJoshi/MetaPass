import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import images from "../../img";
import Style from "./DropZone.module.css";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage,
}) => {
  const [fileUrls, setFileUrls] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const urls = await Promise.all(
      acceptedFiles.map(async (file) => {
        const url = await uploadToIPFS(file);
        return url;
      })
    );

    setFileUrls(urls);
    setImage(urls); // Assuming setImage expects an array of URLs
    console.log(urls);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrls.length > 0 && (
        <aside className={Style.DropZone_box_aside}>
          {fileUrls.map((url, index) => (
            <div key={index} className={Style.DropZone_box_aside_box}>
              <Image src={url} alt="nft image" width={200} height={200} />

              <div className={Style.DropZone_box_aside_box_preview}>
                <div className={Style.DropZone_box_aside_box_preview_one}>
                  <p>
                    <samp>NFT Name:</samp>
                    {name || ""}
                  </p>
                  <p>
                    <samp>Website:</samp>
                    {website || ""}
                  </p>
                </div>

                <div className={Style.DropZone_box_aside_box_preview_two}>
                  <p>
                    <span>Description</span>
                    {description || ""}
                  </p>
                </div>

                <div className={Style.DropZone_box_aside_box_preview_three}>
                  <p>
                    <span>Royalties</span>
                    {royalties || ""}
                  </p>
                  <p>
                    <span>FileSize</span>
                    {fileSize || ""}
                  </p>
                  <p>
                    <span>Properties</span>
                    {properties || ""}
                  </p>
                  <p>
                    <span>Category</span>
                    {category || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </aside>
      )}
    </div>
  );
};

export default DropZone;
