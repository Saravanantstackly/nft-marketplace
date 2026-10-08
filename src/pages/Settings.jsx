import React from "react";
import SettingUserIcon from "../assets/settingUserIcon.png";

export default function Settings() {
  const tabs = [
    "Profile",
    "Application",
    "Security",
    "Activity",
    "Payment Method",
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-nft-text-main">
            Setting
          </h1>
          <p className="text-xs text-nft-text-muted mt-0.5">
            Welcome Setting Page
          </p>
        </div>
        <div className="text-xs text-nft-text-muted font-medium flex gap-1 select-none">
          <span>Home</span> <span>&gt;</span>{" "}
          <span className="text-accent-primary font-semibold">Setting</span>
        </div>
      </div>

      {/* Horizontal Filter Navigation Bar Row */}
      <div className="flex gap-6 border-b border-gray-200/60 text-xs font-bold pb-2 overflow-x-auto select-none">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`pb-2 whitespace-nowrap transition-colors cursor-pointer ${
              i === 0
                ? "text-accent-primary border-b-2 border-accent-primary font-bold"
                : "text-nft-text-muted hover:text-nft-text-main"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Forms Split Columns Wrapper Matrix Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Core User Info Block */}
        <div className="bg-nft-card border border-white p-6 rounded-3xl shadow-dashboard space-y-4">
          <h3 className="font-bold text-sm md:text-base text-nft-text-main">
            User profile
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-3 text-xs bg-nft-bg/40 border border-nft-border rounded-xl focus:outline-none focus:border-accent-primary transition-colors"
            />
            <div className="flex items-center gap-3 py-1 px-1">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                <img
                  src={SettingUserIcon}
                  alt="User"
                  className="w-4 h-4 object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-nft-text-main">
                  John Smith
                </p>
                <p className="text-[10px] text-nft-text-muted mt-0.5">
                  Welcome Setting Page
                </p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer transition-colors active:scale-95">
              Save
            </button>
          </div>
        </div>

        {/* Right Dynamic Update Credentials Box Form Component */}
        <div className="bg-nft-card border border-white p-6 rounded-3xl shadow-dashboard space-y-4">
          <h3 className="font-bold text-sm md:text-base text-nft-text-main">
            Update Profile
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-nft-text-main mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 text-xs bg-nft-bg/40 border border-nft-border rounded-xl focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-nft-text-main mb-1.5">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 text-xs bg-nft-bg/40 border border-nft-border rounded-xl focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
            <button className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer transition-colors active:scale-95">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Extended Wide Personal Attributes Grid Panel Wrapper Form */}
      <div className="bg-nft-card border border-white p-6 rounded-3xl shadow-dashboard space-y-4">
        <h3 className="font-bold text-sm md:text-base text-nft-text-main">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <div key={i}>
                <label className="block text-[11px] font-bold text-nft-text-main mb-1.5">
                  Info
                </label>
                <input
                  type="text"
                  className="w-full p-3 text-xs bg-nft-bg/40 border border-nft-border rounded-xl focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
            ))}
        </div>
        <button className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primary-hover text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer transition-colors active:scale-95 mt-2">
          Save
        </button>
      </div>
    </div>
  );
}
