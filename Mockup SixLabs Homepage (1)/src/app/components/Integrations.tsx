import { Sidebar } from "./Sidebar";
import { 
  Plus, 
  SearchLg, 
  Settings01, 
  ArrowUpRight,
  CheckCircle,
  Clock,
  LayoutAlt01,
  MessageChatCircle,
  HelpCircle,
  ChevronRight,
  DotsHorizontal
} from "@untitled-ui/icons-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./design-system";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

// Import logos for integrations
import metaLogo from "../../imports/image-8.png"; // Based on prompt mentioning image-8.png

const activeIntegrations = [
  {
    id: "meta",
    name: "Meta Ads",
    description: "Connect your Meta Business Manager to sync creative assets and performance data.",
    logo: metaLogo,
    status: "Connected",
    lastSync: "2 minutes ago",
    active: true
  }
];

const comingSoonIntegrations = [
  {
    id: "tiktok",
    name: "TikTok Ads",
    description: "Direct integration with TikTok Ads Manager for viral creative distribution.",
    category: "Ads"
  },
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Sync your search and display campaigns with AI-generated assets.",
    category: "Ads"
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    description: "Track deep conversion metrics and ROI directly within SixLabs.",
    category: "Analytics"
  }
];

export default function Integrations() {
  return (
    <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">
          
          <div className="max-w-6xl mx-auto w-full px-8 md:px-12 py-12 space-y-12">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#F2F0EB] pb-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-display font-bold text-[#101828] tracking-tight">Integrations</h1>
                <p className="text-[#667085] font-medium text-[15px]">
                  Connect your advertising platforms to sync assets and measure performance.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <SearchLg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#667085]" />
                  <input 
                    type="text" 
                    placeholder="Search integrations..."
                    className="pl-10 pr-4 py-2 bg-[#F9FAFB] border border-[#F2F0EB] rounded-xl text-[14px] outline-none focus:ring-2 focus:ring-signal/10 transition-all w-64"
                  />
                </div>
              </div>
            </div>

            {/* Active / Supported Integrations */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-[#101828]">Active Integrations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeIntegrations.map((item) => (
                  <Card key={item.id} className="border border-[#F2F0EB] shadow-none hover:shadow-md transition-all group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="size-14 rounded-2xl bg-[#F9FAFB] border border-[#F2F0EB] flex items-center justify-center p-2 overflow-hidden">
                            <ImageWithFallback 
                              src={item.logo} 
                              alt={item.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <Badge variant="success" className="flex items-center gap-1.5 px-3 py-1">
                            <span className="size-1.5 bg-[#12B76A] rounded-full" />
                            {item.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-[#101828]">{item.name}</h3>
                          <p className="text-[14px] text-[#667085] font-medium leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 text-[12px] text-[#98A2B3] font-medium">
                            <Clock className="size-3.5" />
                            Last synced: {item.lastSync}
                          </div>
                          <button className="text-[13px] font-bold text-[#344054] hover:text-[#101828] flex items-center gap-1.5 transition-colors">
                            Manage <Settings01 className="size-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="bg-[#F9FAFB] border-t border-[#F2F0EB] px-6 py-4 flex items-center justify-between">
                        <span className="text-[12px] font-bold text-[#667085]">Connected as SixLabs_Official</span>
                        <button className="text-[12px] font-bold text-red-600 hover:text-red-700">Disconnect</button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Coming Soon Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-display font-bold text-[#101828]">Coming Soon</h2>
                  <p className="text-[14px] text-[#667085] font-medium">We're working on expanding our platform support.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comingSoonIntegrations.map((item) => (
                  <Card key={item.id} className="border border-[#F2F0EB] shadow-none opacity-80 group">
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="size-12 rounded-xl bg-[#F9FAFB] border border-[#F2F0EB] flex items-center justify-center font-bold text-[#667085] text-[18px]">
                          {item.name.charAt(0)}
                        </div>
                        <Badge variant="neutral" className="text-[10px] font-bold uppercase tracking-wider bg-[#F2F4F7]">Coming Soon</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold text-[#101828] text-[15px]">{item.name}</h3>
                        <p className="text-[12px] text-[#667085] font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <button disabled className="w-full py-2 bg-[#F2F4F7] text-[#98A2B3] rounded-xl text-[13px] font-bold cursor-not-allowed">
                        Notify me
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Support Callout */}
            <section className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-indigo-900">Missing an integration?</h3>
                <p className="text-indigo-700 text-[14px] font-medium max-w-md">
                  We're constantly adding new platforms. Let us know which one you need next for your performance marketing stack.
                </p>
              </div>
              <button className="px-6 py-3 bg-white text-indigo-700 rounded-xl text-[14px] font-bold border border-indigo-200 hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-sm">
                Request Integration <MessageChatCircle className="size-4" />
              </button>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
