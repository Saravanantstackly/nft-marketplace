import React from "react";
import { motion } from "framer-motion";

// Assets
import Cover from "../assets/Cover.png";
import ArtworkTrendingBids from "../assets/Artwork trending bids.png";
import ArtworkBids from "../assets/Artwork bids.png";
import AvatarHomeUser from "../assets/Avatar home user.png";
import NFTTrBidsBg from "../assets/NFT tr bids bg.png";
import NFTDbBg from "../assets/NFT DB bg.png";
import ChartCircleTrBids from "../assets/Chart circle tr bids.png";
import ChartGraphTrBids from "../assets/Chart graph tr bids.png";

export default function Home() {
  // Card details
  const trendingNfts = Array(8).fill({
    title: "Liquid Wave",
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    highestBid: "0.15 ETH",
    image: NFTTrBidsBg,
  });

  return (
    <div className="w-[1220px] mx-auto space-y-12 pb-16">

      {/* ================= ROW 1 ================= */}
      <div className="w-[1130px] h-[228px] flex items-center justify-between gap-[30px]">

        {/* Left Interactive Promo Box */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(112, 71, 235, 0.95), rgba(76, 42, 186, 0.75)), url(${Cover})`,
          }}
          className="w-[595px] h-[228px] bg-cover bg-center rounded-[24px] p-8 text-white flex flex-col justify-between shadow-dashboard-card"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight leading-tight">
              Discover, Collect, Sell <br />
              and Create your NFT
            </h1>

            <p className="text-purple-200 text-xs font-light max-w-xs">
              Digital marketplace for crypto collectibles and non-fungible
              tokens
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white text-accent-primary text-xs font-bold rounded-[12px] shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
              Explore
            </button>

            <button className="px-6 py-2 bg-[#ff4a55] border border-white/20 text-white text-xs font-semibold rounded-[12px] cursor-pointer hover:bg-white/25 transition-colors">
              Create
            </button>
          </div>
        </div>

        {/* Right Feature Auction Card */}
        <div className="w-[595px] h-[227px] bg-nft-card rounded-[24px] p-5 flex gap-5 items-center shadow-dashboard-card border border-white/60">
          <img
            src={NFTDbBg}
            alt="Featured NFT"
            className="w-[180px] h-[180px] rounded-[16px] object-cover shrink-0 shadow-sm"
          />

          <div className="flex-1 min-w-0 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src={AvatarHomeUser}
                alt="Creator"
                className="w-5 h-5 rounded-full object-cover"
              />

              <span className="text-xs font-bold text-nft-text-main truncate">
                John Abraham
              </span>

              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse ml-auto"></span>
            </div>

            <div>
              <h3 className="font-bold text-base text-nft-text-main truncate">
                Birghten LQ
              </h3>

              <div className="flex justify-between text-[11px] text-nft-text-muted mt-1.5">
                <span>
                  Auction time
                  <br />
                  <strong className="text-nft-text-main font-semibold">
                    3h 1m 50s
                  </strong>
                </span>

                <span className="text-right">
                  Current Bid{" "}
                  <strong className="text-accent-primary font-bold block">
                    0.05 ETH
                  </strong>

                  <span className="text-[9px] block font-medium">
                    0.15 ETH
                  </span>
                </span>
              </div>
            </div>

            <div className="flex gap-2.5 pt-0.5">
              <button className="flex-1 py-2 bg-accent-primary text-white text-xs font-bold rounded-[10px] shadow-xs cursor-pointer hover:bg-opacity-95 transition-all">
                Place a Bid
              </button>

              <button className="flex-1 py-2 bg-[#ff4a55] text-white text-xs font-bold rounded-[10px] shadow-xs cursor-pointer hover:opacity-95 transition-all">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRENDING BIDS ================= */}
      <section className="w-[1130px] space-y-5">

        <div className="flex items-center justify-between pr-0.5">
          <h2 className="text-lg font-bold text-nft-text-main tracking-tight">
            Trending Bids
          </h2>

          <div className="flex gap-1 bg-white p-0.5 rounded-[12px] shadow-dashboard-card text-xs font-bold border border-white">
            <button className="px-4 py-1.5 bg-accent-primary text-white rounded-[8px] shadow-xs cursor-pointer">
              All
            </button>

            <button className="px-4 py-1.5 text-nft-text-muted hover:text-nft-text-main transition-colors cursor-pointer">
              Artwork
            </button>

            <button className="px-4 py-1.5 text-nft-text-muted hover:text-nft-text-main transition-colors cursor-pointer">
              Book
            </button>
          </div>
        </div>

        {/* ================= ARTWORK GRID ================= */}
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[31px]">

          {trendingNfts.map((nft, idx) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={idx}
              style={{ width: "270px" }}
              className="flex flex-col justify-between"
            >

              {/* Artwork Image */}
              <div className="overflow-hidden rounded-[14px] w-[250px] h-[250px] mx-auto">
                <img
                  src={NFTTrBidsBg}
                  alt={nft.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artwork Details */}
              <div className="space-y-3 mt-4">

                <h4 className="font-bold text-base text-nft-text-main px-0.5 truncate">
                  {nft.title}
                </h4>

                <div className="flex justify-between text-xs border-t border-nft-border pt-3 px-0.5">

                  <div>
                    <p className="text-[10px] text-nft-text-muted font-medium">
                      Auction time
                    </p>

                    <p className="font-bold text-nft-text-main mt-0.5">
                      {nft.auctionTime}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] text-nft-text-muted font-medium">
                      Current Bid
                    </p>

                    <p className="font-bold text-accent-primary mt-0.5">
                      {nft.currentBid}
                    </p>

                    <p className="text-[9px] text-nft-text-muted font-semibold mt-0.5">
                      {nft.highestBid}
                    </p>
                  </div>

                </div>

                <button className="w-full py-2.5 bg-accent-primary text-white text-xs font-bold rounded-[12px] shadow-xs hover:bg-opacity-95 transition-all cursor-pointer">
                  Place a Bid
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= ROW 4 ================= */}
      <div className="w-[1130px] h-[398px] flex justify-between gap-6 items-stretch">

        {/* Left Side KPI Metrics */}
        <div className="w-[292.5px] h-[380px] flex flex-col justify-between py-0.5">

          {[
            {
              label: "Artworks",
              count: "24K",
              delta: "+168.001%",
              color: "bg-[#7047eb]",
              icon: ArtworkTrendingBids,
              negative: false,
            },
            {
              label: "Auction",
              count: "89",
              delta: "-168.001%",
              color: "bg-[#ff5656]",
              icon: ArtworkBids,
              negative: true,
            },
            {
              label: "Creators",
              count: "82K",
              delta: "+168.001%",
              color: "bg-[#27c26c]",
              icon: ArtworkTrendingBids,
              negative: false,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white px-4 h-[100px] rounded-[20px] flex flex-row items-center justify-between shadow-[0_4px_24px_rgba(142,146,188,0.06)] border border-white w-full"
            >

              <div className="flex flex-row items-center gap-4 flex-1 min-w-0">

                <div
                  className={`w-11 h-11 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center ${stat.color}`}
                >
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-4 h-4 object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center min-w-0">
                  <p className="text-lg font-bold text-[#0c0b11] leading-none">
                    {stat.count}
                  </p>

                  <p className="text-xs text-[#8e92bc] font-semibold mt-1.5 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>

              </div>

              <span
                className={`text-xs font-bold whitespace-nowrap shrink-0 ml-2 ${
                  stat.negative
                    ? "text-red-500"
                    : "text-emerald-500"
                }`}
              >
                {stat.delta}
              </span>

            </div>
          ))}

        </div>

        {/* Center Price Vector Chart */}
        <div className="w-[516px] h-[380px] bg-white p-5 rounded-[24px] shadow-[0_4px_24px_rgba(142,146,188,0.06)] border border-white flex flex-col justify-between">

          <div className="flex justify-between items-center h-[30px]">
            <h4 className="text-xs font-bold text-[#8e92bc]">
              ETH Price
            </h4>

            <span className="text-[10px] text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
              Live
            </span>
          </div>

          <div className="w-[480px] h-[348px] overflow-hidden flex items-center justify-center">
            <img
              src={ChartGraphTrBids}
              alt="Price Vector Chart Content"
              className="w-full h-full object-contain select-none"
            />
          </div>

        </div>

        {/* Right Statistics */}
        <div className="w-[360px] h-[380px] bg-white p-5 rounded-[24px] shadow-[0_4px_24px_rgba(142,146,188,0.06)] border border-white flex flex-col justify-between">

          <div className="h-[30px]">
            <h4 className="text-xs font-bold text-[#8e92bc]">
              Statistics
            </h4>
          </div>

          <div className="w-[360px] h-[348px] overflow-hidden flex flex-col items-center justify-center">

            <img
              src={ChartCircleTrBids}
              alt="Allocation Breakdown Ring"
              className="w-[240px] h-[200px] object-contain select-none"
            />

            <div className="flex justify-center items-center gap-4 text-[10px] text-[#8e92bc] font-semibold pt-6 mt-4 border-t border-gray-100/70 w-full select-none">

              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7047eb]"></span>
                Artwork Sold
              </span>

              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                Artwork Cancel
              </span>

            </div>
          </div>
        </div>
      </div>

      {/* ================= ROW 5 ================= */}
      <div className="w-[1140px] flex justify-between gap-6 items-stretch">

        {/* Recent Activity */}
        <section
          style={{ width: "443px", height: "444px" }}
          className="bg-white p-6 rounded-[24px] shadow-[0_4px_24px_rgba(142,146,188,0.06)] border border-white flex flex-col justify-between"
        >

          <div className="flex justify-between items-center h-[40px] pb-1 border-b border-gray-100">

            <h3 className="font-bold text-base text-[#0c0b11]">
              Recent Activity
            </h3>

            <button className="text-xs text-[#7047eb] font-bold hover:underline cursor-pointer">
              See more
            </button>

          </div>

          <div
            style={{ height: "353.19px" }}
            className="overflow-y-auto space-y-4 pt-3 pr-1"
          >

            {[
              { type: "Purchase by you for 0.05 ETH", time: "12 mins ago" },
              { type: "0.06 ETH Received", time: "12 mins ago" },
              { type: "Started Following you", time: "12 mins ago" },
              { type: "Has been sold by 12.75ETH", time: "12 mins ago" },
              { type: "Purchase by you for 0.05 ETH", time: "12 mins ago" },
            ].map((act, i) => (

              <div
                key={i}
                className="flex flex-row items-center justify-between text-xs py-2 border-b border-gray-50 last:border-0 last:pb-0 w-full"
              >

                <div className="flex flex-row items-center gap-3 min-w-0">

                  <img
                    src={AvatarHomeUser}
                    alt="Actor"
                    className="w-8 h-8 rounded-full object-cover border border-gray-100 shadow-2xs shrink-0"
                  />

                  <div className="flex flex-col min-w-0">

                    <span className="font-bold text-[#0c0b11] text-[13px]">
                      Papaya
                    </span>

                    <span className="text-[11px] text-[#8e92bc] font-medium mt-0.5 truncate">
                      {act.type}
                    </span>

                  </div>

                </div>

                <span className="text-[11px] text-[#8e92bc] font-normal shrink-0 ml-2 select-none self-center">
                  {act.time}
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* Top Creators */}
        <section
          style={{ width: "753px", minHeight: "444px" }}
          className="bg-white p-6 rounded-[24px] shadow-[0_4px_24px_rgba(142,146,188,0.06)] border border-white space-y-4"
        >

          <div className="flex justify-between items-center h-[40px] pb-1 border-b border-gray-100">

            <h3 className="font-bold text-base text-[#0c0b11]">
              Top Creators
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-x-[41px] gap-y-[20px] pt-2">

            {Array(8)
              .fill({ name: "Papaya", count: "60 Items" })
              .map((cr, idx) => (

                <div
                  key={idx}
                  style={{ width: "320px", height: "68px" }}
                  className="flex flex-row items-center justify-between p-3.5 border border-[#eaecef] rounded-[18px] bg-gray-50/40 hover:bg-gray-50 transition-colors shadow-3xs mx-auto"
                >

                  <div className="flex flex-row items-center gap-3 min-w-0">

                    <img
                      src={AvatarHomeUser}
                      alt="Creator Portrait"
                      className="w-9 h-9 rounded-full object-cover border border-white shadow-2xs shrink-0"
                    />

                    <div className="flex flex-col min-w-0">

                      <p className="text-xs font-bold text-[#0c0b11] truncate">
                        {cr.name}
                      </p>

                      <p className="text-[10px] text-[#8e92bc] mt-0.5 truncate">
                        {cr.count}
                      </p>

                    </div>

                  </div>

                  <button className="px-4 py-1.5 border border-[#eaecef] text-xs font-bold text-[#0c0b11] rounded-[10px] hover:bg-white hover:border-[#7047eb] transition-all cursor-pointer shadow-3xs active:scale-95 shrink-0">
                    Follow
                  </button>

                </div>

              ))}

          </div>
        </section>
      </div>

    </div>
  );
}
