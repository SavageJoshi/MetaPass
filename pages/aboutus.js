import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand,Contact } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Kalyani",
      position: "CEO",
      images: images.founder1,
    },
    {
      name: "Atharva",
      position: "CEO",
      images: images.founder2,
    },
    {
      name: "Sarvesh",
      position: "CEO",
      images: images.founder3,
    },
    {
      name: "Aishwarya",
      position: "CEO",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "0",
      info: "Tickets have been sold uptill now",
    },
    {
      title: "0",
      info: "Registered users account",
    },
    {
      title: "0",
      info: "Events created and tickets for them sold successfully",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We are on a mission to reduce all types of frauds
              in ticketing industry. Frauds in ticketing industry has caused loss
              of over 5 million dollars and is increasing exponentially!
              Help us fight these frauds by connecting with Ticketx! 

            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Meet Our Team!</h2>
          <p>
            We are here to give to the society and create a small impact by fighting one of the rising issues in the
            world of ticketing industry.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we thrive to bring our best on the table!
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
      <br />
      <br />
      <Contact />
      <br />
      <br />
    </div>
  );
};

export default aboutus;
