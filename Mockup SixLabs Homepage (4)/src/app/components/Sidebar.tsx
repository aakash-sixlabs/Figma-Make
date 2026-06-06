import { 
  Home01, 
  ChevronDown,
  MessageChatCircle,
  VideoRecorder,
  LayersTwo01,
  BookOpen01,
  CpuChip01,
  LayoutAlt01,
  Plus,
  HelpCircle,
  XClose,
  ArrowUpRight,
  Settings01,
  SearchLg,
  Zap
} from "@untitled-ui/icons-react";
import { Link, useLocation } from "react-router";
import { cn } from "./ui/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarClose, Layout } from "lucide-react";

const mainNavItems = [
  { icon: Home01, label: "Home", href: "/app" },
  { icon: LayersTwo01, label: "Generations", href: "/app/generations" },
  { icon: CpuChip01, label: "Brand Setup", href: "/app/context" },
  { icon: Plus, label: "Integrations", href: "/app/integrations" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[240px] bg-[#FCFBF9] flex flex-col h-screen sticky top-0 z-50 border-r border-[#F2F0EB]">
      <div className="flex flex-col h-full overflow-y-auto custom-scrollbar p-3 space-y-4">
        
        {/* Workspace Picker */}
        <div className="flex items-center justify-between px-2 mb-2 pt-2">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="size-6 bg-[#F2F0EB] rounded-md flex items-center justify-center text-[#101828] font-semibold text-[10px] uppercase">
              W
            </div>
            <span className="font-semibold text-[14px] text-[#101828]">Brand Account</span>
            <ChevronDown className="size-4 text-[#667085]" />
          </div>
          <button className="p-1.5 text-[#667085] hover:bg-[#F2F0EB] rounded-lg transition-colors">
            <SidebarClose className="size-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-4">
          <button className="w-full h-10 border border-[#D0D5DD] bg-white rounded-xl flex items-center justify-center gap-2 text-[13px] font-semibold text-[#344054] hover:bg-[#F9FAFB] transition-all shadow-sm">
            <VideoRecorder className="size-4.5" />
            Create
          </button>
          
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-0.5">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all group",
                  isActive 
                    ? "bg-[#EFECE6] text-[#101828]" 
                    : "text-[#475467] hover:bg-[#F2F0EB] hover:text-[#101828]"
                )}
              >
                <item.icon className={cn("size-4.5", isActive ? "text-[#101828]" : "text-[#667085] group-hover:text-[#101828]")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Active Generation Status */}
        <div className="px-2 pt-2">
           <div className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
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

        

        {/* Promo Card - Minimal */}
        <div className="mt-auto pt-6 space-y-4">
          {/* Credits Remaining Pill */}
          <div className="px-2">
            <div className="flex items-center justify-between p-2 bg-[#101828] rounded-xl border border-white/10 shadow-sm group">
              <div className="flex items-center gap-2 pl-1">
                <Zap className="size-3 text-signal fill-current" />
                <span className="text-[11px] font-bold text-white/90">999 credits</span>
              </div>
              <button className="px-2 py-1 bg-signal rounded-lg text-[10px] font-bold text-white hover:bg-signal/90 transition-colors">
                Upgrade
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#F2F0EB] shadow-sm relative overflow-hidden group">
            <button className="absolute top-2 right-2 text-[#98A2B3] hover:text-[#101828] opacity-0 group-hover:opacity-100 transition-opacity">
              <XClose className="size-3.5" />
            </button>
            <div className="flex gap-3 mb-3">
              <Avatar className="size-9">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&auto=format&fit=crop" />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-[13px] font-bold text-[#101828]">Expert Call</h4>
                <p className="text-[11px] text-[#667085]">Book your free session</p>
              </div>
              <button className="p-1.5 border border-[#D0D5DD] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <ArrowUpRight className="size-3.5 text-[#344054]" />
              </button>
            </div>
          </div>

          

          {/* User Profile */}
          <div className="flex items-center justify-between px-2 pt-2 pb-2 border-t border-[#F2F0EB]">
            <div className="flex items-center gap-2.5">
              <Avatar className="size-7">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&auto=format&fit=crop" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <span className="text-[13px] font-semibold text-[#101828]">Aakash</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageChatCircle className="size-4.5 text-[#667085]" />
              <Settings01 className="size-4.5 text-[#667085]" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
