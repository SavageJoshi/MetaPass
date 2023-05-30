import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  Service,
  Subscribe,
  FollowerTab,
  Title,
  Brand,
  Blockchain,
  NFT
} from "../components/componentsindex";


//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Organizers = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    // if (currentAccount) {
    fetchNFTs().then((items) => {
      console.log(nfts);
      setNfts(items.reverse());
      setNftsCopy(items);
    });
    // }
  }, []);



  return (
    <div className={Style.homePage}>
      <Brand />
      <Blockchain />
      <NFT />
      <br />
      <br />
      <Title
        heading="How to Create an Event and Sell tickets for it?"
      />
      <Service />
      <Title
        heading="Okay, But Why Us?"
      />
      <Subscribe />
      

    </div>
  );
};

export default Organizers;
