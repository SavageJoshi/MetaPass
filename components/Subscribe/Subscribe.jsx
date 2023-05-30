import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>You get the Security of a Blockchain</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>No more Need of third party to sell your tickets</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>03</span>
            <small>Direct transaction between you and customer</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>04</span>
            <small>No more Ticket scalping , Bots or Frauds</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>05</span>
            <small>Grows your Customer Base and wins their trust!</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>06</span>
            <small>Only need to work on event. We take care of the rest!</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>07</span>
            <small>NFTs as Tickets!!!</small>
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
