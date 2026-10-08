
import React from "react";
import ArtworkBids from "../assets/Artwork bids.png";
import AvatarBidsUser from "../assets/avatar bids user.png";
import NftBidsIlBg1 from "../assets/NFT bids IL bg 1.png";
import NftBidsIlBg2 from "../assets/NFT bids IL bg 2.png";
import NftBidsIlBg3 from "../assets/NFT bids IL bg 3.png";
import NFTTrBidsBg from "../assets/NFT tr bids bg.png";

export default function Bids() {
  const statStrip = [
    {
      label: "Artworks",
      val: "24K",
      color: "bg-violet-600",
      icon: ArtworkBids,
    },
    {
      label: "Auction",
      val: "82K",
      color: "bg-green-500",
      icon: ArtworkBids,
    },
    {
      label: "Creators",
      val: "200",
      color: "bg-amber-300",
      icon: ArtworkBids,
    },
    {
      label: "Canceled",
      val: "89",
      color: "bg-red-600",
      icon: ArtworkBids,
    },
  ];

  const bidRows = [
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg2,
    },
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg3,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NFTTrBidsBg,
    },
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg2,
    },
    {
      item: "Cute Cube Cool",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg1,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NftBidsIlBg3,
    },
    {
      item: "Liquid Wave",
      author: "John Abraham",
      price: "0.0025 ETH",
      userOffer: "0.0025 ETH",
      liveOffer: "0.0025 ETH",
      time: "2 Hours 1 min 30s",
      img: NFTTrBidsBg,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-nft-text-main">
            Bids
          </h1>

          <p className="text-xs text-nft-text-muted mt-0.5">
            Welcome Bids Page
          </p>
        </div>

        <div className="text-xs text-nft-text-muted font-medium flex gap-1 select-none">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-accent-primary font-semibold">
            Bids
          </span>
        </div>
      </div>

      {/* Numerical Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statStrip.map((data, i) => (
          <div
            key={i}
            className="bg-nft-card p-4 rounded-2xl border border-nft-border shadow-figma flex items-center gap-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-2xs ${data.color}`}
            >
              <img
                src={data.icon}
                alt={data.label}
                className="w-4 h-4 object-cover"
              />
            </div>

            <div>
              <p className="text-lg font-bold text-nft-text-main">
                {data.val}
              </p>

              <p className="text-xs text-nft-text-muted font-medium">
                {data.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Bids Table */}
      <div className="bg-nft-card rounded-3xl overflow-hidden shadow-figma border border-nft-border">

        {/* Table Header */}
        <div className="p-5 border-b border-nft-border flex justify-between items-center">
          <h3 className="font-bold text-base text-nft-text-main">
            Active Bids
          </h3>

          <button className="px-5 py-2 bg-accent-primary text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer hover:bg-[#4938d6] transition-colors">
            Place a Bid
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">

            {/* Table Head */}
            <thead>
              <tr className="text-nft-text-muted border-b border-nft-border font-semibold bg-[#0D0B16]">

                <th className="p-4 pl-6 select-none">
                  <input
                    type="checkbox"
                    className="accent-accent-primary rounded"
                  />
                </th>

                <th className="p-4">
                  Item List
                </th>

                <th className="p-4">
                  Open Price
                </th>

                <th className="p-4">
                  Your Offer
                </th>

                <th className="p-4">
                  Recent Offer
                </th>

                <th className="p-4">
                  Time Left
                </th>

                <th className="p-4 text-center">
                  Action
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#252238]">

              {bidRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#181528] transition-colors"
                >

                  {/* Checkbox */}
                  <td className="p-4 pl-6">
                    <input
                      type="checkbox"
                      className="accent-accent-primary rounded"
                    />
                  </td>

                  {/* Item */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">

                      <img
                        src={row.img}
                        alt={row.item}
                        className="w-10 h-10 rounded-xl object-cover shadow-3xs shrink-0"
                      />

                      <div>
                        <p className="font-bold text-nft-text-main">
                          {row.item}
                        </p>

                        <p className="text-[10px] text-nft-text-muted mt-0.5">
                          {row.author}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Open Price */}
                  <td className="p-4 font-bold text-nft-text-main">
                    {row.price}
                  </td>

                  {/* Your Offer */}
                  <td className="p-4 font-bold text-nft-text-main">
                    {row.userOffer}
                  </td>

                  {/* Recent Offer */}
                  <td className="p-4">
                    <div className="flex items-center gap-2 font-bold text-nft-text-main">

                      <img
                        src={AvatarBidsUser}
                        alt="Offeror User Avatar"
                        className="w-10 h-10 rounded-xl object-cover shadow-3xs shrink-0"
                      />

                      {row.liveOffer}

                    </div>
                  </td>

                  {/* Time */}
                  <td className="p-4 text-nft-text-muted font-medium">
                    {row.time}
                  </td>

                  {/* Action */}
                  <td className="p-4 text-center">
                    <button className="w-6 h-6 rounded-md hover:bg-[#2A1620] text-nft-text-muted hover:text-red-400 font-bold transition-colors cursor-pointer">
                      ✕
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
