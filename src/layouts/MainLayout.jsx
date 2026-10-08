import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

// Assets
import Logo from "../assets/Logo.png";
import DashBoardIcon from "../assets/DashBoard.png";
import BidIcon from "../assets/bid.png";
import HeartIcon from "../assets/heart.png";
import CollectionIcon from "../assets/Collection.png";
import ProfileIcon from "../assets/Profile.png";
import SettingIcon from "../assets/setting.png";
import SignOutIcon from "../assets/sign-out.png";
import SearchIcon from "../assets/Search.png";
import BellIcon from "../assets/bell.png";
import AvatarNavbar from "../assets/avatar navbar.png";

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    {
      icon: DashBoardIcon,
      path: "/",
      label: "Dashboard",
      w: 19,
      h: 22,
    },
    {
      icon: BidIcon,
      path: "/bids",
      label: "Bids",
      w: 19,
      h: 19,
    },
    {
      icon: HeartIcon,
      path: "/saved",
      label: "Saved Items",
      w: 19,
      h: 17,
    },
    {
      icon: CollectionIcon,
      path: "/collections",
      label: "Collections",
      w: 22,
      h: 22,
    },
    {
      icon: ProfileIcon,
      path: "/profile",
      label: "Profile",
      w: 19,
      h: 22,
    },
    {
      icon: SettingIcon,
      path: "/settings",
      label: "Settings",
      w: 19,
      h: 19,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0B0718] text-white relative">

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-20 fixed left-0 top-0 h-screen bg-[#110D27] border-r border-[#292342] flex-col items-center py-7 justify-between z-40 shadow-xl select-none">

        <div className="flex flex-col items-center gap-14 w-full">

          {/* Logo */}
          <Link
            to="/"
            className="w-[30px] h-[30px] flex items-center justify-center transition-transform active:scale-95"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col gap-7 w-full items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-3 rounded-2xl transition-all duration-200 relative group flex items-center justify-center ${
                    isActive
                      ? "bg-[#3526A8] shadow-lg shadow-purple-900/30"
                      : "opacity-40 hover:opacity-100 hover:bg-[#211B3A]"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                      width: `${item.w}px`,
                      height: `${item.h}px`,
                    }}
                    className="object-contain"
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sign Out */}
        <button className="p-3 rounded-2xl opacity-40 hover:opacity-100 hover:bg-[#211B3A] transition-all cursor-pointer mb-4">
          <img
            src={SignOutIcon}
            alt="Sign Out"
            className="w-[19px] h-[19px] object-contain"
          />
        </button>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#110D27]/95 backdrop-blur-md border-t border-[#292342] flex justify-around items-center py-3 z-50 shadow-xl px-2 overflow-x-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`p-2.5 rounded-xl transition-all ${
                isActive
                  ? "bg-[#3526A8] shadow-lg"
                  : "opacity-40 hover:opacity-100"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  width: `${item.w}px`,
                  height: `${item.h}px`,
                }}
                className="object-contain"
              />
            </Link>
          );
        })}
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-h-screen md:pl-20 bg-[#0B0718]">

        {/* ================= TOP HEADER ================= */}
        <header className="max-w-[1220px] w-full px-4 sm:px-6 md:px-12 mt-[30px] h-[50px] flex items-center justify-between gap-4 mx-auto select-none">

          {/* Search */}
          <div className="relative w-[380px] h-[50px] bg-[#151025] rounded-[12px] border border-[#292342] focus-within:border-[#6D5DFB] transition-all flex items-center">

            <img
              src={SearchIcon}
              alt="Search"
              className="w-6 h-6 absolute left-[18px] opacity-50 pointer-events-none"
            />

            <input
              type="text"
              placeholder="Search Here"
              className="w-full h-full bg-transparent border-0 pl-[54px] pr-4 text-xs font-semibold text-white placeholder:text-[#8B879D] focus:outline-none"
            />
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-5 shrink-0 h-full">

            {/* Theme Button - No Box */}
            <button
              className="w-8 h-8 flex items-center justify-center transition-all opacity-70 hover:opacity-100"
              aria-label="Toggle Theme"
            >
              <svg
                className="w-5 h-5 text-[#C5C0D6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

            {/* Notification - No Box */}
            <button
              className="w-8 h-8 flex items-center justify-center transition-all opacity-70 hover:opacity-100"
              aria-label="Notifications"
            >
              <img
                src={BellIcon}
                alt="Notifications"
                className="w-[19px] h-[19px] object-contain"
              />
            </button>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#292342] shadow-lg">
              <img
                src={AvatarNavbar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="max-w-[1220px] w-full px-4 sm:px-6 md:px-12 mt-12 pb-24 mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

