import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactus = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🗺 ADDRESS</h3>
              <p>
                Gokhale Education Societys R.H.Sapat College of Engineering  , Management Studies and Resaerch
              </p>
            </div><br/>
            <div className={Style.contactus_box_box_left_item}>
              <h3>✉️EMAIL</h3>
              <p>ticketx@gmail.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>☎PHONE</h3>
              <p>9087654321</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🌏SOCIALS</h3>
              <a href="https://www.facebook.com/">
                <TiSocialFacebook />
              </a>
              <a href="https://www.linkedin.com/">
                <TiSocialLinkedin />
              </a>
              <a href="https://www.instagram.com/">
                <TiSocialInstagram />
              </a>
              <a href="https://www.youtube.com/">
                <TiSocialYoutube />
              </a>
              <a href="https://www.twitter.com/">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder=""
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
