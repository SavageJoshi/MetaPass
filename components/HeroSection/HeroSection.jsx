import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import hero from "../../img/indexillustration.png";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Welcome To MetaPass</h1>
          <p>
            Buy and Sell NFT tickets for all the events around the globe. Join us to make Ticketing systems Secure , Safe and Fun!!
          </p>
          <Button
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={hero}
            alt="Hero section"
            width={700}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
