import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { cn } from "./ui/utils";
import {
  Home01,
  LayersTwo01,
  CpuChip01,
  Plus as PlusIcon,
  VideoRecorder
} from "@untitled-ui/icons-react";
import { motion } from "motion/react";

const mainNavItems = [
  { icon: Home01, label: "Home", href: "/app" },
  { icon: LayersTwo01, label: "Generations", href: "/app/generations" },
  { icon: CpuChip01, label: "Brand Setup", href: "/app/context" },
  { icon: PlusIcon, label: "Integrations", href: "/app/integrations" },
];

export function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/app/create");
  };

  return (
    <>
      {/* Top Fixed Navbar - Mobile/Tablet */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white border-b border-[#F2F0EB] shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="size-8 bg-[#101828] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-display font-bold text-[#101828] text-base">SixLabs</span>
          </div>

          {/* Nav Links - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-medium transition-all",
                    isActive
                      ? "bg-[#EFECE6] text-[#101828]"
                      : "text-[#475467] hover:bg-[#F2F0EB] hover:text-[#101828]"
                  )}
                >
                  <item.icon className={cn("size-4", isActive ? "text-[#101828]" : "text-[#667085]")} />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Create Button */}
          <button
            onClick={handleCreateClick}
            className="bg-[#101828] text-white rounded-xl h-9 px-4 flex items-center gap-2 text-[13px] font-bold hover:bg-[#101828]/90 transition-all shadow-lg"
          >
            <VideoRecorder className="size-4" />
            <span className="hidden sm:inline">Create</span>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation Bar - Mobile Only (for very small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-xl border-t border-[#F2F0EB] shadow-2xl">
        <div className="flex items-center justify-around px-2 py-3 safe-area-inset-bottom">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[60px]",
                  isActive
                    ? "text-[#101828]"
                    : "text-[#667085]"
                )}
              >
                <item.icon className={cn("size-5", isActive ? "text-[#101828]" : "text-[#667085]")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
