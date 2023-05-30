import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "../HeroSection/HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import blockchain from "../../img/blockchain.png";



//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Blockchain = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_right}>
          <Image
            src= {blockchain}
            alt="Hero section"
            width={500}
            height={500}
          />
        </div>

        <div className={Style.heroSection_box_left}>
          <h1>What Is Blockchain?</h1>
          <p>
          Blockchain is a special way of keeping track of information on the internet. It's like a big notebook that many people can write in at the same time. Each time someone writes something new, it gets added to the notebook and everyone can see it. The notebook is very secure, so once something is written in it, it can't be changed or erased. This makes it a great way to keep track of things like money, property, or any other important information that needs to be kept safe and verified.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Blockchain;