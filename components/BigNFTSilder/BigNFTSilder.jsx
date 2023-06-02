import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";


const BigNFTSilder = () => {

  const router = useRouter();
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "What is NFT?",
      id: 1,
      nftImage: images.nft_image_1,
      text: "NFT, or Non-Fungible Token, is a special type of digital asset that is unique and cannot be exchanged for another asset of equal value. It's like a digital certificate of ownership for something that is one-of-a-kind, such as a piece of artwork, a rare collectible, or a virtual item in a video game. Each NFT has its own unique code that is stored on a blockchain, making it secure and verifiable. NFTs have gained popularity in recent years as a way to buy, sell, and trade digital assets and are being used in a variety of industries, from art and music to sports and gaming."
    },
    {
      title: "What Is Blockchain?",
      id: 2,
      nftImage: images.nft_image_2,
      text:" Blockchain is a special way of keeping track of information on the internet. It's like a big notebook that many people can write in at the same time. Each time someone writes something new, it gets added to the notebook and everyone can see it. The notebook is very secure, so once something is written in it, it can't be changed or erased. This makes it a great way to keep track of things like money, property, or any other important information that needs to be kept safe and verified."
    },
    {
      title: "Why should we use NFTs as Tickets?",
      id: 3,
      nftImage: images.nft_image_3,
      text: "Using NFTs as tickets provides numerous advantages. NFTs offer unique digital ownership, traceable authenticity, and easy transferability. They eliminate counterfeiting risks and enable verifiable ticketing, reducing fraud. NFTs also allow seamless integration with digital platforms, offering enhanced ticketing experiences, personalization, and potential for additional revenue streams through resale and collectibility.By leveraging blockchain technology, NFTs as tickets provide transparency, immutability, and decentralized control, ensuring a secure and trustworthy ticketing ecosystem for event organizers and attendees alike.      "
    },
    // {
    //   title: "Home NFT",
    //   id: 4,
    //   name: "Raayan Hussain",
    //   price: "4664 ETH",
    //   like: 243,
    //   image: images.user4,
    //   nftImage: images.nft_image_1,
    //   time: {
    //     days: 87,
    //     hours: 29,
    //     minutes: 10,
    //     seconds: 15,
    //   },
    // },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h1>{sliderData[idNumber].title}</h1>
          <br/>
          <p className={Style.sliderText}>{sliderData[idNumber].text}</p>
        
          {/* <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
          </div> */}

          <div className={Style.bigNFTSlider_box_left_bidding}>
            {/* <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Price</small>
              <p>
                {sliderData[idNumber].price}
              </p>
            </div> */}

            {/* <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Event starts in</span>
            </p> */}

            {/* <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Buy Ticket" handleClick={() => router.push("/searchPage")} />
              <Button btnName="View Event" handleClick={() => router.push("/searchPage")} />
            </div> */}
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
