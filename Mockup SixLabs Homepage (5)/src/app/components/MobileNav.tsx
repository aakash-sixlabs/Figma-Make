import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { cn } from "./ui/utils";
import {
  Home01,
  LayersTwo01,
  CpuChip01,
  Plus as PlusIcon,
  VideoRecorder,
  ChevronDown
} from "@untitled-ui/icons-react";
import { motion, AnimatePresence } from "motion/react";

const mainNavItems = [
  { icon: Home01, label: "Home", href: "/app" },
  { icon: LayersTwo01, label: "Generations", href: "/app/generations" },
  { icon: CpuChip01, label: "Brand Setup", href: "/app/context" },
  { icon: PlusIcon, label: "Integrations", href: "/app/integrations" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/app/create");
  };

  return (
    <>
      {/* Hamburger Menu Button - Top Left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 size-10 bg-white border border-[#F2F0EB] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all lg:hidden"
      >
        {isOpen ? (
          <X className="size-5 text-[#101828]" />
        ) : (
          <Menu className="size-5 text-[#101828]" />
        )}
      </button>

      {/* Floating Action Button - Bottom Right */}
      <button
        onClick={handleCreateClick}
        className="fixed bottom-6 right-6 z-50 size-14 bg-[#101828] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all lg:hidden"
      >
        <VideoRecorder className="size-6" />
      </button>

      {/* Slide-in Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#FCFBF9] z-40 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6 pt-20 space-y-6">
                {/* Workspace Picker */}
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-[#F2F0EB]">
                  <div className="size-8 bg-[#F2F0EB] rounded-lg flex items-center justify-center text-[#101828] font-semibold text-[11px] uppercase">
                    W
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-[14px] text-[#101828] block">Brand Account</span>
                  </div>
                  <ChevronDown className="size-4 text-[#667085]" />
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {mainNavItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all",
                          isActive
                            ? "bg-[#EFECE6] text-[#101828]"
                            : "text-[#475467] hover:bg-[#F2F0EB] hover:text-[#101828]"
                        )}
                      >
                        <item.icon className={cn("size-5", isActive ? "text-[#101828]" : "text-[#667085]")} />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Active Generation Status */}
                <div className="px-4 py-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                  <div className="flex items-center gap-3">
                    <div className="relative flex shrink-0">
                      <div className="size-2 bg-indigo-500 rounded-full animate-ping absolute" />
                      <div className="size-2 bg-indigo-500 rounded-full relative" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-[#101828] truncate">Generation in progress...</p>
                      <p className="text-[10px] text-indigo-600 font-medium">Meta Static Ads</p>
                    </div>
                    <div className="text-[10px] font-bold text-indigo-400">45%</div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto pt-6 space-y-3 border-t border-[#F2F0EB]">
                  <button className="w-full px-4 py-3 text-left text-[14px] font-medium text-[#475467] hover:bg-[#F2F0EB] rounded-xl transition-all">
                    Settings
                  </button>
                  <button className="w-full px-4 py-3 text-left text-[14px] font-medium text-[#475467] hover:bg-[#F2F0EB] rounded-xl transition-all">
                    Help & Support
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
