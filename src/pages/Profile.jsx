import React from "react";
import AvatarHomeUser from "../assets/Avatar home user.png";
import NFTTrBidsBg from "../assets/NFT tr bids bg.png";
import ProfileTwoFactor from "../assets/2FA profile.png";

export default function Profile() {
  const itemsBought = Array(8).fill({
    title: "Liquid Wave",
    img: NFTTrBidsBg,
  });

  const followingList = Array(4).fill({
    name: "Papaya",
    count: "60 Items",
  });

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-nft-text-main">
            Profile
          </h1>

          <p className="text-xs text-nft-text-muted mt-0.5">
            Welcome Profile Page
          </p>
        </div>

        <div className="text-xs text-nft-text-muted font-medium flex gap-1 select-none">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-accent-primary font-semibold">
            Profile
          </span>
        </div>
      </div>

      {/* Top Split Sections Panel Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Verification Alert Dashboard Block */}
        <div className="bg-nft-card p-6 rounded-3xl border border-nft-border shadow-dashboard space-y-4">

          <div className="flex items-center gap-3">
            <img
              src={AvatarHomeUser}
              alt="Profile Master User"
              className="w-12 h-12 rounded-full object-cover border border-nft-border shadow-sm"
            />
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-base text-nft-text-main">
              Welcome, John Smith
            </h3>

            <p className="text-xs text-nft-text-muted font-light leading-relaxed">
              Looks like you are not verified yet. Verify yourself to use the
              full potential of Xtrader.
            </p>
          </div>

          {/* Authentication Buttons */}
          <div className="space-y-3 pt-2">

            {/* Verify Account */}
            <button
              className="
                w-full py-2.5
                bg-[#17132F]
                hover:bg-[#211B3A]
                text-emerald-400
                border border-emerald-500/30
                hover:border-emerald-400/50
                rounded-xl
                text-xs font-semibold
                flex items-center gap-2 px-4
                shadow-sm
                cursor-pointer
                transition-all
              "
            >
              <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                ✓
              </span>

              Verify account
            </button>

            {/* Two Factor Authentication */}
            <button
              className="
                w-full py-2.5
                bg-[#17132F]
                hover:bg-[#211B3A]
                text-accent-primary
                border border-accent-primary/30
                hover:border-accent-primary/50
                rounded-xl
                text-xs font-semibold
                flex items-center gap-2 px-4
                shadow-sm
                cursor-pointer
                transition-all
              "
            >
              <span className="w-4 h-4 rounded-full bg-accent-primary text-white flex items-center justify-center text-[10px]">
                <img
                  src={ProfileTwoFactor}
                  alt="Lock Img"
                  className="w-2 h-2 object-cover"
                />
              </span>

              Two-factor Authentication (2FA)
            </button>

          </div>
        </div>

        {/* Following Stack Cards Box Grid */}
        <div className="lg:col-span-2 bg-nft-card p-6 rounded-3xl border border-nft-border shadow-dashboard space-y-4">

          <h3 className="font-bold text-base text-nft-text-main">
            Following
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {followingList.map((f, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-between
                  p-3.5
                  border border-nft-border
                  rounded-2xl
                  bg-[#17132F]
                  hover:bg-[#211B3A]
                  transition-colors
                "
              >
                <div className="flex items-center gap-3">
                  <img
                    src={AvatarHomeUser}
                    alt="Creator Icon"
                    className="w-9 h-9 rounded-full object-cover border border-nft-border shadow-2xs"
                  />

                  <div>
                    <p className="text-xs font-bold text-nft-text-main">
                      {f.name}
                    </p>

                    <p className="text-[10px] text-nft-text-muted mt-0.5">
                      {f.count}
                    </p>
                  </div>
                </div>

                <button
                  className="
                    px-4 py-1.5
                    bg-accent-secondary
                    text-white
                    text-xs font-bold
                    rounded-xl
                    hover:opacity-90
                    transition-all
                    cursor-pointer
                    shadow-sm
                    active:scale-95
                  "
                >
                  Unfollow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Bought */}
      <div className="space-y-4">

        <h3 className="font-bold text-base text-nft-text-muted">
          My Bought
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 gap-y-15">

          {itemsBought.map((nft, idx) => (
            <div
              key={idx}
              className="
                bg-nft-card
                border border-nft-border
                p-3
                rounded-2xl
                shadow-dashboard
                space-y-3
                relative
                group
              "
            >
              <div className="overflow-hidden rounded-xl bg-[#17132F] aspect-square">

                <img
                  src={NFTTrBidsBg}
                  alt="NFT Img"
                  className="
                    w-full h-full
                    object-cover
                    group-hover:scale-102
                    transition-transform
                    duration-300
                  "
                />

              </div>

              <div className="flex justify-between items-center px-1 relative">

                <span className="text-xs font-bold text-nft-text-main">
                  {nft.title}
                </span>

                <img
                  src={AvatarHomeUser}
                  alt="Owner indicator"
                  className="
                    w-8 h-8
                    absolute
                    bottom-4
                    right-8
                    rounded-full
                    border border-nft-border
                    shadow-3xs
                  "
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}