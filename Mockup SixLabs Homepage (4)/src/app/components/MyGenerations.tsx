import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { 
  SectionHeading, 
  Pill, 
  Badge, 
  StatBadge, 
  StatusProgress,
  FeaturedIcon,
  BadgeGroup
} from "./design-system";
import { 
  SearchLg, 
  FilterLines, 
  ArrowUpRight, 
  LayoutAlt01, 
  Clock, 
  CheckCircle, 
  DotsHorizontal,
  RefreshCcw01,
  Zap,
  Play
} from "@untitled-ui/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { motion } from "motion/react";
import { cn } from "./ui/utils";

// Import sample images
import uiImg1 from "../../imports/image.png";
import uiImg2 from "../../imports/image-1.png";
import uiImg3 from "../../imports/image-2.png";

const initialGenerations = [
  {
    id: 1,
    title: "Summer Collection 2026",
    status: "Ready for review",
    date: "2h ago",
    type: "Meta Video + Static",
    credits: 120,
    image: uiImg2,
    health: 85,
    variant: "signal",
    href: "/generations/1"
  },
  {
    id: 2,
    title: "Brand Awareness Refresh",
    status: "Approved",
    date: "Yesterday",
    type: "Performance Static",
    credits: 80,
    image: uiImg1,
    health: 100,
    variant: "success",
    href: "/generations/2"
  },
  {
    id: 3,
    title: "Product Launch: Cirkul X",
    status: "Needs edits",
    date: "2 days ago",
    type: "DCO Variations",
    credits: 160,
    image: uiImg3,
    health: 45,
    variant: "lilac",
    href: "/generations/3"
  }
];

export default function MyGenerations() {
  const [generations, setGenerations] = useState(initialGenerations);

  useEffect(() => {
    // Check if there's a pending generation in session storage
    const pending = sessionStorage.getItem("pending_generation");
    if (pending) {
      const pendingData = JSON.parse(pending);
      setGenerations([
        {
          id: Date.now(),
          title: (pendingData.product !== "None (Global Brand)" ? pendingData.product : pendingData.brand) + " - Batch",
          status: "Queued",
          date: "Just now",
          type: pendingData.platform + " " + pendingData.ratio,
          credits: 120,
          image: uiImg1, // Placeholder
          health: 0,
          variant: "signal",
          href: "#"
        },
        ...initialGenerations
      ]);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-surface font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-border-subtle px-8 py-5 flex items-center justify-between z-20 shadow-sm shrink-0">
          <div className="flex items-center gap-6">
            <SectionHeading as="h1" className="text-3xl tracking-tight">Library</SectionHeading>
            <Badge variant="indigo">{generations.length} items</Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-72">
              <SearchLg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-text size-5" />
              <Input 
                placeholder="Search by campaign or product..." 
                className="pl-11 h-11 rounded-xl bg-surface/50 border-border-subtle focus:bg-white transition-all shadow-inner" 
              />
            </div>
            <Button variant="outline" className="h-11 px-5 rounded-xl border-border-subtle gap-2 font-bold text-[14px] shadow-sm hover:bg-surface transition-all">
              <FilterLines className="size-5" /> Filter
            </Button>
            <Link to="/app/create">
              <Button className="bg-signal text-white h-11 px-6 rounded-xl gap-2 font-bold text-[14px] hover:bg-signal/90 shadow-cta">
                New Generation <Zap className="size-5" />
              </Button>
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <h2 className="text-xl font-display font-bold text-ink tracking-tight">Creative Generations</h2>
                 <p className="text-sm text-muted-text">View and manage all your historical creative output.</p>
               </div>
               <BadgeGroup badge="Auto-Sync">
                  Cloud storage active
               </BadgeGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {generations.map((gen, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={gen.id}
                >
                  <Link 
                    to={gen.href}
                    className={cn(
                      "block rounded-[24px] border border-border-subtle shadow-card bg-white overflow-hidden group hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500",
                      gen.status === "Queued" && "opacity-90 ring-2 ring-signal/10"
                    )}
                  >
                    <div className="aspect-[1.5] overflow-hidden relative">
                      {gen.status === "Queued" ? (
                        <div className="w-full h-full bg-ink flex flex-col items-center justify-center p-8 text-center space-y-6 relative overflow-hidden">
                           <div className="absolute inset-0 bg-signal/10 blur-3xl opacity-30" />
                           <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 relative z-10">
                             <RefreshCcw01 className="text-lilac animate-spin size-8" />
                           </div>
                           <div className="space-y-2 relative z-10">
                             <p className="text-white font-bold text-[13px] tracking-[0.2em] uppercase">Processing Batch</p>
                             <div className="flex items-center justify-center gap-1.5">
                                <span className="size-1.5 bg-signal rounded-full animate-pulse" />
                                <span className="size-1.5 bg-signal rounded-full animate-pulse delay-75" />
                                <span className="size-1.5 bg-signal rounded-full animate-pulse delay-150" />
                             </div>
                           </div>
                        </div>
                      ) : (
                        <ImageWithFallback 
                          src={gen.image} 
                          alt={gen.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge variant={gen.status === "Approved" ? "success" : gen.status === "Queued" ? "indigo" : "info"}>
                          {gen.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="size-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 text-white">
                           <DotsHorizontal className="size-5" />
                         </div>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-8">
                      <div className="space-y-2">
                        <h3 className="text-xl font-display font-bold text-ink truncate group-hover:text-signal transition-colors tracking-tight">
                          {gen.title}
                        </h3>
                        <div className="flex items-center gap-3 text-muted-text text-[14px] font-medium">
                          <span className="flex items-center gap-1.5"><LayoutAlt01 size={16} className="size-4" /> {gen.type}</span>
                          <span className="size-1 bg-border-subtle rounded-full" />
                          <span>{gen.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-border-subtle/50">
                        <div className="flex items-center gap-8">
                          <StatBadge label="Cost" value={`${gen.credits} CR`} />
                          <div className="flex flex-col gap-1.5 w-24">
                            <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest leading-none">AI Health</span>
                            {gen.status === "Queued" ? (
                              <div className="h-4 w-full bg-surface rounded-full overflow-hidden shadow-inner">
                                <div className="h-full bg-cta-gradient w-1/3 animate-[pulse_2s_infinite]" />
                              </div>
                            ) : (
                              <StatusProgress value={gen.health} variant={gen.variant as any} />
                            )}
                          </div>
                        </div>
                        <div className="size-12 rounded-full bg-mist flex items-center justify-center text-signal opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all shadow-sm">
                          {gen.status === "Queued" ? <Clock className="size-6" /> : <ArrowUpRight className="size-6" />}
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
