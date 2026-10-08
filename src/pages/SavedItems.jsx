import React from "react";
import { motion } from "framer-motion";
import NFTTrBidsBg from "../assets/NFT tr bids bg.png";

const savedList = Array(8).fill({
  title: "Liquid Wave",
  time: "3h 1m 50s",
  currentBid: "0.05 ETH",
  highestBid: "0.15 ETH",
  image: NFTTrBidsBg,
});

export function SavedItems() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-nft-text-main">
            Saved Items
          </h1>
          <p className="text-xs text-nft-text-muted mt-0.5">
            Welcome Saved Page
          </p>
        </div>
        <div className="text-xs text-nft-text-muted font-medium flex gap-1 select-none">
          <span>Home</span> <span>&gt;</span>{" "}
          <span className="text-accent-primary font-semibold">Saved</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedList.map((nft, idx) => (
          <motion.div
            whileHover={{ y: -4 }}
            key={idx}
            className="bg-nft-card rounded-3xl p-4 space-y-4 shadow-dashboard border border-white flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-2xl aspect-square bg-gray-50">
              <img
                src={NFTTrBidsBg}
                alt={nft.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-base text-nft-text-main">
                {nft.title}
              </h4>
              <div className="flex justify-between text-xs border-t border-nft-border pt-3">
                <div>
                  <p className="text-[10px] text-nft-text-muted">
                    Auction time
                  </p>
                  <p className="font-semibold text-nft-text-main mt-0.5">
                    {nft.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-nft-text-muted">Current Bid</p>
                  <p className="font-bold text-accent-primary mt-0.5">
                    {nft.currentBid}
                  </p>
                  <p className="text-[9px] text-nft-text-muted font-medium mt-0.5">
                    {nft.highestBid}
                  </p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-accent-primary text-white text-xs font-bold rounded-xl shadow-sm hover:bg-accent-primary-hover transition-colors cursor-pointer mt-2">
                Place a Bid
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Collections() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-nft-text-main">
            Collections
          </h1>
          <p className="text-xs text-nft-text-muted mt-0.5">
            Welcome Collections Page
          </p>
        </div>
        <div className="text-xs text-nft-text-muted font-medium flex gap-1 select-none">
          <span>Home</span> <span>&gt;</span>{" "}
          <span className="text-accent-primary font-semibold">Collections</span>
        </div>
      </div>

      <div className="flex gap-1 bg-white p-1 rounded-xl shadow-dashboard text-xs font-bold w-fit mb-4">
        <button className="px-4 py-1.5 bg-accent-primary text-white rounded-lg shadow-sm">
          All
        </button>
        <button className="px-4 py-1.5 text-nft-text-muted hover:text-nft-text-main transition-colors">
          Artwork
        </button>
        <button className="px-4 py-1.5 text-nft-text-muted hover:text-nft-text-main transition-colors">
          Book
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedList.map((nft, idx) => (
          <motion.div
            whileHover={{ y: -4 }}
            key={idx}
            className="bg-nft-card rounded-3xl p-4 space-y-4 shadow-dashboard border border-white flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-2xl aspect-square bg-gray-50">
              <img
                src={NFTTrBidsBg}
                alt={nft.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-base text-nft-text-main">
                {nft.title}
              </h4>
              <div className="flex justify-between text-xs border-t border-nft-border pt-3">
                <div>
                  <p className="text-[10px] text-nft-text-muted">
                    Auction time
                  </p>
                  <p className="font-semibold text-nft-text-main mt-0.5">
                    {nft.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-nft-text-muted">Current Bid</p>
                  <p className="font-bold text-accent-primary mt-0.5">
                    {nft.currentBid}
                  </p>
                  <p className="text-[9px] text-nft-text-muted font-medium mt-0.5">
                    {nft.highestBid}
                  </p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-accent-primary text-white text-xs font-bold rounded-xl shadow-sm hover:bg-accent-primary-hover transition-colors cursor-pointer mt-2">
                Place a Bid
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
