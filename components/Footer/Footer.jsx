import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";
import Button from "../Button/Button";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            <DiJqueryLogo className={Style.footer_box_social_logo} />
          </a>
          <p>
            The world’s first and largest digital marketplace for buying 
            and selling tickets in the form of NFTs. Rest assured because 
            it is secured with blockchain!
          </p>

          <div className={Style.footer_social}>
            <a href="https://www.facebook.com/">
              <TiSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/">
              <TiSocialLinkedin />
            </a>
            <a href="https://www.twitter.com/">
              <TiSocialTwitter />
            </a>
            <a href="https://www.youtube.com/">
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Get Started</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>For More Queries</h3>

          
          <Button btnName="Contact Us!" handleClick={() => router.push("/contactus")}/>
          
          <div className={Style.subscribe_box_info}>
            <p>
            Connect with us and let us take care of all the hassle where you get to relax!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
