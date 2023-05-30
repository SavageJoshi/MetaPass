import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import aboutillustration from "../../img/aboutillustration.png";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
      
          <h1>Sell Your NFT Tickets!</h1>
          <p>Join us and experience a whole new world of Ticketing System . Our aim is to provide Fast, Secure and
          a user-friendly experience and we thrive to achieve the same. Jooin us in this journey and lets take a step towards
          making ticketing industry fraud-free!</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Join Us"
              handleClick={() => router.push("/login")}
            />
            <Button
              btnName="Sell Tickets"
              handleClick={() => router.push("/uploadNFT")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={aboutillustration} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
