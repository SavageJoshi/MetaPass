import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "../HeroSection/HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import nft from "../../img/nft.png";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFT = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>NFTs</h1>
          <p>
          NFT, or Non-Fungible Token, is a special type of digital asset that is unique and cannot be exchanged for another asset of equal value. It's like a digital certificate of ownership for something that is one-of-a-kind, such as a piece of artwork, a rare collectible, or a virtual item in a video game. Each NFT has its own unique code that is stored on a blockchain, making it secure and verifiable. NFTs have gained popularity in recent years as a way to buy, sell, and trade digital assets and are being used in a variety of industries, from art and music to sports and gaming.
          </p>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={nft}
            alt="Hero section"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default NFT;