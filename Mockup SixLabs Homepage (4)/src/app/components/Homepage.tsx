import { 
  SectionHeading, 
  BadgeGroup,
  FeaturedIcon,
  Badge,
  CTAButton
} from "./design-system";
import { Sidebar } from "./Sidebar";
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
  VideoRecorder
} from "@untitled-ui/icons-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "./ui/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { motion } from "motion/react";

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
    href: "/generations/1"
  },
  {
    id: 2,
    title: "Starter kit ads",
    status: "Approved",
    date: "Yesterday",
    type: "Meta Video",
    image: uiImg1,
    href: "/generations/2"
  },
  {
    id: 3,
    title: "Summer flavor concepts",
    status: "Needs edits",
    date: "3 days ago",
    type: "Meta Carousel",
    image: uiImg3,
    href: "/generations/3"
  }
];

export default function Homepage() {
  return (
    <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        {/* The "Main Canvas Card" */}
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">
          
          <div className="max-w-6xl mx-auto w-full px-8 md:px-12 py-12 space-y-16">
            
            {/* Consolidated Hero & Quick Action Section */}
            <section className="relative rounded-[40px] overflow-hidden bg-[#FFF9F5] border border-[#FFEDE0]/50 shadow-sm">
              {/* Soft Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD5AD]/40 via-transparent to-transparent opacity-70" />
              <div className="absolute -bottom-24 -left-24 size-96 bg-signal/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 px-8 md:px-12 py-8 md:py-12 space-y-6">
                <div className="space-y-2 max-w-3xl">
                  <p className="text-[#667085] text-xs font-bold uppercase tracking-widest">Good Afternoon, Aakash</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#020617] tracking-tight leading-[1.1]">
                    What creatives do you need today?
                  </h1>
                  <p className="text-[15px] text-[#667085] font-medium max-w-2xl leading-relaxed">Start with a short brief. Get categorized creatives ready for review.</p>
                </div>

                <div className="max-w-4xl space-y-5">
                  <Link 
                    to="/app/create" 
                    className="flex flex-col md:flex-row items-center justify-between gap-5 p-6 bg-white rounded-[24px] border border-[#F2F0EB] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className="size-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                        <PlusCircle className="size-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-[#020617]">New Creative Brief</h3>
                        <p className="text-[14px] text-[#667085] font-medium max-w-[500px] leading-relaxed">
                          Describe what you need, upload any product or brand assets, and generate approval-ready Meta ad creatives in minutes.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#020617] text-white rounded-xl h-12 px-6 text-[14px] font-bold flex items-center gap-2 group-hover:bg-[#020617]/90 transition-all shrink-0">
                      Start brief <ArrowRight className="size-4" />
                    </div>
                  </Link>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[13px]">
                      <span className="size-2 bg-[#32D583] rounded-full animate-pulse" />
                      Creatives ready in 5 minutes
                    </div>
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[13px]">
                      <LayoutAlt01 className="size-4 text-[#2563EB]" /> Categorized creative angles
                    </div>
                    <div className="flex items-center gap-2 text-[#667085] font-bold text-[13px]">
                      <CheckCircle className="size-4 text-indigo-500" /> Ready for review and download
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Generations */}
            <section className="space-y-10 pb-20">
              <div className="flex items-end justify-between px-2">
                <div className="space-y-2">
                  <h2 className="text-2xl font-display font-bold text-[#101828] tracking-tight">Recent generations</h2>
                  <p className="text-[#667085] font-medium">Pick up where you left off with your latest creative batches.</p>
                </div>
                <Button variant="ghost" asChild className="text-signal font-bold gap-2 hover:bg-mist rounded-xl h-10 px-4">
                  <Link to="/app/generations">View All <ChevronRight className="size-4" /></Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentGenerations.map((gen, idx) => (
                  <motion.div
                    key={gen.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      to={gen.href}
                      className="block group bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="aspect-[1.5] overflow-hidden relative border-b border-[#F2F0EB]">
                        <ImageWithFallback 
                          src={gen.image} 
                          alt={gen.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant={
                            gen.status === "Approved" ? "success" : 
                            gen.status === "Ready for review" ? "indigo" : 
                            gen.status === "Needs edits" ? "warning" : "neutral"
                          }>
                            {gen.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5 space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-[15px] font-display font-bold text-[#101828] truncate group-hover:text-signal transition-colors tracking-tight">
                            {gen.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[12px] text-[#667085] font-medium">
                            <span>{gen.type}</span>
                            <span className="size-1 bg-[#D0D5DD] rounded-full" />
                            <span>{gen.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#F2F0EB]">
                           <span className="text-[11px] font-bold text-[#101828] uppercase tracking-wider">
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
                  className="flex flex-col items-center justify-center p-8 rounded-[24px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] hover:bg-[#F2F4F7] hover:border-signal/50 transition-all group"
                >
                  <div className="size-12 rounded-xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#667085] group-hover:text-signal group-hover:scale-110 group-hover:shadow-sm transition-all mb-4">
                    <Plus className="size-5" />
                  </div>
                  <p className="text-[14px] font-bold text-[#101828]">New Generation</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>
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
