import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";


//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";
import Button from "../Button/Button";

const Category = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground1,
      name: "Concerts",
    },
    {
      images: images.creatorbackground2,
      name: "Sports",
    },
    {
      images: images.creatorbackground3,
      name: "Drama",
    },
    {
      images: images.creatorbackground4,
      name: "Fashion",
    },
    {
      images: images.creatorbackground6,
      name: "Music",
    },
    {
      images: images.creatorbackground7,
      name: "Arts",
    },
    {
      images: images.creatorbackground8,
      name: "Theaters",
    },
    {
      images: images.creatorbackground8,
      name: "Gaming",
    },
    {
      images: images.creatorbackground8,
      name: "Exhibition",
    },
    {
      images: images.creatorbackground8,
      name: "Corporate",
    },
    {
      images: images.creatorbackground8,
      name: "Charity",
    },
    {
      images: images.creatorbackground8,
      name: "Seminars",
    }
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                {/* <BsCircleFill /> */}
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    <Button btnName="Explore" handleClick={() => {}}/>
    </div>
  );
};

export default Category;
