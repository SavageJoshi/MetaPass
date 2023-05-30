import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "About Us",
      link: "aboutus",
    },
    // {
    //   name: "Events",
    //   link: "collection",
    // },
    {
      name: "Events",
      link: "searchPage",
    },
    {
      name: " How It Works!?",
      link: "organizers",
    },
    {
      name: "Create Event",
      link: "uploadNFT",
    },
  
   
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
