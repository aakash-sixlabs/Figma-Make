import { 
  SectionHeading, 
  BadgeGroup,
  FeaturedIcon,
  Badge,
  CTAButton
} from "./design-system";
import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import {
  PlusCircle,
  ArrowRight,
  LayoutAlt01,
  Clock,
  CheckCircle,
  Zap,
  File02,
  Edit03,
  Download01,
  HelpCircle,
  DotsHorizontal,
  Plus,
  ArrowUpRight,
  ChevronRight,
  Layout,
  CpuChip01,
  VideoRecorder,
  AlertCircle
} from "@untitled-ui/icons-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "./ui/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { motion } from "motion/react";
import { OnboardingChecklist } from "./OnboardingChecklist";
import { SetupDemoControls } from "./SetupDemoControls";

// Import images as ES modules
import uiImg1 from "../../imports/image.png";
import uiImg2 from "../../imports/image-1.png";
import uiImg3 from "../../imports/image-2.png";

const recentGenerations = [
  {
    id: 1,
    title: "Orange cartridge static ads",
    status: "Ready for review",
    date: "Today",
    type: "Meta Static",
    image: uiImg2,
    href: "/app/generations/1"
  },
  {
    id: 2,
    title: "Starter kit ads",
    status: "Approved",
    date: "Yesterday",
    type: "Meta Video",
    image: uiImg1,
    href: "/app/generations/2"
  },
  {
    id: 3,
    title: "Summer flavor concepts",
    status: "Needs edits",
    date: "3 days ago",
    type: "Meta Carousel",
    image: uiImg3,
    href: "/app/generations/3"
  }
];

export default function Homepage() {
  // Setup completion state - toggleable for demo
  const [setupComplete, setSetupComplete] = useState(() => {
    return localStorage.getItem("sixlabs_setup_complete") === "true";
  });
  const [optionalStepsRemaining, setOptionalStepsRemaining] = useState(2);

  const handleSetupComplete = () => {
    localStorage.setItem("sixlabs_setup_complete", "true");
    setSetupComplete(true);
  };

  return (
    <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
      <Sidebar />
      <MobileNav />
      <SetupDemoControls />

      {/* If setup is not complete, show onboarding checklist in main area */}
      {!setupComplete ? (
        <OnboardingChecklist onComplete={handleSetupComplete} />
      ) : (

      <main className="flex-1 flex flex-col h-screen overflow-hidden pt-[60px] lg:pt-0 lg:p-2 xl:p-3 2xl:p-4">
        {/* The "Main Canvas Card" */}
        <div className="flex-1 bg-white lg:rounded-[20px] xl:rounded-[24px] lg:border border-[#F2F0EB] lg:shadow-sm lg:hover:shadow-md lg:hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">

          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">

            {/* Optional Setup Reminder */}
            {optionalStepsRemaining > 0 && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                    <AlertCircle className="size-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#101828]">
                      Complete Your Setup
                    </h3>
                    <p className="text-[13px] text-[#667085] mt-1">
                      {optionalStepsRemaining} optional setup {optionalStepsRemaining === 1 ? 'step' : 'steps'} remaining to unlock full platform capabilities.
                    </p>
                  </div>
                </div>
                <Link to="/app/context">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold gap-2 shadow-lg shrink-0">
                    Complete Setup <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            )}

            {/* Consolidated Hero & Quick Action Section */}
            <section className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#FFF9F5] border border-[#FFEDE0]/50 shadow-sm">
              {/* Soft Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD5AD]/40 via-transparent to-transparent opacity-70" />
              <div className="absolute -bottom-24 -left-24 size-96 bg-signal/5 rounded-full blur-3xl" />

              <div className="relative z-10 px-5 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 space-y-5 sm:space-y-6">
                <div className="space-y-2 max-w-3xl">
                  <p className="text-[#667085] text-xs font-bold uppercase tracking-widest">Good Afternoon, Aakash</p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#020617] tracking-tight leading-[1.1]">
                    What creatives do you need today?
                  </h1>
                  <p className="text-[14px] sm:text-[15px] text-[#667085] font-medium max-w-2xl leading-relaxed">Start with a short brief. Get categorized creatives ready for review.</p>
                </div>

                <div className="max-w-4xl space-y-4 sm:space-y-5">
                  <Link
                    to="/app/create"
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-[20px] sm:rounded-[24px] border border-[#F2F0EB] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group text-left"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
                      <div className="size-10 sm:size-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                        <PlusCircle className="size-5 sm:size-6" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[#020617]">New Creative Brief</h3>
                        <p className="text-[13px] sm:text-[14px] text-[#667085] font-medium leading-relaxed">
                          Describe what you need, upload any product or brand assets, and generate approval-ready Meta ad creatives in minutes.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#020617] text-white rounded-xl h-11 sm:h-12 px-5 sm:px-6 text-[13px] sm:text-[14px] font-bold flex items-center gap-2 group-hover:bg-[#020617]/90 transition-all shrink-0 w-full sm:w-auto justify-center">
                      Start brief <ArrowRight className="size-4" />
                    </div>
                  </Link>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3">
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[12px] sm:text-[13px]">
                      <span className="size-2 bg-[#32D583] rounded-full animate-pulse" />
                      Creatives ready in 5 minutes
                    </div>
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[12px] sm:text-[13px]">
                      <LayoutAlt01 className="size-4 text-[#2563EB]" /> Categorized creative angles
                    </div>
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[12px] sm:text-[13px]">
                      <CheckCircle className="size-4 text-indigo-500" /> Ready for review and download
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Generations */}
            <section className="space-y-6 sm:space-y-8 lg:space-y-10 pb-12 sm:pb-16 lg:pb-20">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-0 px-0 sm:px-2">
                <div className="space-y-1 sm:space-y-2">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#101828] tracking-tight">Recent generations</h2>
                  <p className="text-[13px] sm:text-[15px] text-[#667085] font-medium">Pick up where you left off with your latest creative batches.</p>
                </div>
                <Button variant="ghost" asChild className="text-signal font-bold gap-2 hover:bg-mist rounded-xl h-9 sm:h-10 px-3 sm:px-4 text-[13px] sm:text-[14px]">
                  <Link to="/app/generations">View All <ChevronRight className="size-4" /></Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {recentGenerations.map((gen, idx) => (
                  <motion.div
                    key={gen.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={gen.href}
                      className="block group bg-white rounded-[20px] sm:rounded-[24px] border border-[#F2F0EB] shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="aspect-[1.5] overflow-hidden relative border-b border-[#F2F0EB]">
                        <ImageWithFallback
                          src={gen.image}
                          alt={gen.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <Badge variant={
                            gen.status === "Approved" ? "success" :
                            gen.status === "Ready for review" ? "indigo" :
                            gen.status === "Needs edits" ? "warning" : "neutral"
                          }>
                            {gen.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-[14px] sm:text-[15px] font-display font-bold text-[#101828] truncate group-hover:text-signal transition-colors tracking-tight">
                            {gen.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#667085] font-medium">
                            <span>{gen.type}</span>
                            <span className="size-1 bg-[#D0D5DD] rounded-full" />
                            <span>{gen.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#F2F0EB]">
                           <span className="text-[10px] sm:text-[11px] font-bold text-[#101828] uppercase tracking-wider">
                              Open Batch
                           </span>
                           <ArrowUpRight className="size-4 text-[#667085] group-hover:text-signal transition-colors" />
                        </div>
                      </CardContent>
                    </Link>
                  </motion.div>
                ))}

                {/* Empty/Add Placeholder */}
                <Link
                  to="/app/create"
                  className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] hover:bg-[#F2F4F7] hover:border-signal/50 transition-all group min-h-[180px] sm:min-h-[200px]"
                >
                  <div className="size-10 sm:size-12 rounded-xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#667085] group-hover:text-signal group-hover:scale-110 group-hover:shadow-sm transition-all mb-3 sm:mb-4">
                    <Plus className="size-4 sm:size-5" />
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-bold text-[#101828]">New Generation</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>
      )}
    </div>
  );
}

// Minimal Button component
function Button({ children, variant = "ghost", className, asChild, ...props }: any) {
  const variants = {
    ghost: "bg-transparent hover:bg-surface",
    outline: "border border-border-subtle bg-white hover:bg-surface",
  };
  
  const Comp = asChild ? "span" : "button";
  
  return (
    <Comp className={cn("inline-flex items-center justify-center transition-colors font-medium", variants[variant as keyof typeof variants], className)} {...props}>
      {children}
    </Comp>
  );
}
