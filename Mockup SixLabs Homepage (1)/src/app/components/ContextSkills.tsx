import { Sidebar } from "./Sidebar";
import { 
  Plus, 
  ChevronRight, 
  CpuChip01, 
  File02, 
  Image01, 
  BookOpen01,
  LayoutAlt01,
  MessageChatCircle,
  Zap,
  CheckCircle,
  Clock,
  DotsVertical
} from "@untitled-ui/icons-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./design-system";
import { motion } from "motion/react";
import { Link } from "react-router";

// Mock data for Context
const contextItems = [
  {
    id: "brand",
    title: "Brand context",
    description: "The Morning Coffee",
    icon: <div className="size-8 bg-[#101828] text-white rounded-lg flex items-center justify-center font-bold text-xs">M</div>,
    count: "Active"
  },
  {
    id: "assets",
    title: "Asset libraries",
    description: "Summer '26 Drop, Core Collection",
    icon: <Image01 className="size-5 text-signal" />,
    count: "2 libraries"
  },
  {
    id: "guidelines",
    title: "Brand guidelines",
    description: "Tone of voice, Typography, Color palette",
    icon: <File02 className="size-5 text-indigo-500" />,
    count: "3 files"
  }
];

// Mock data for Skills
const skills = [
  {
    id: 1,
    title: "Product Featurette",
    description: "Highlight key product features with dynamic close-ups and benefits.",
    tag: "Conversion",
    icon: "🛍️"
  },
  {
    id: 2,
    title: "Brand Storyteller",
    description: "Craft a compelling narrative around your brand values and mission.",
    tag: "Awareness",
    icon: "📖"
  },
  {
    id: 3,
    title: "Trend Catcher",
    description: "Leverage current social trends to make your ads feel native and viral.",
    tag: "Engagement",
    icon: "🔥"
  },
  {
    id: 4,
    title: "Benefits focused",
    description: "Direct response focus on the specific benefits and ROI for the user.",
    tag: "Performance",
    icon: "📈"
  },
  {
    id: 5,
    title: "Visual Hooks",
    description: "High-impact visual openers designed to stop the scroll in 0.5 seconds.",
    tag: "Retention",
    icon: "🪝"
  },
  {
    id: 6,
    title: "Problem/Solution",
    description: "Classic direct-response framework: identify pain point, offer cure.",
    tag: "Conversion",
    icon: "💡"
  },
  {
    id: 7,
    title: "Testimonial",
    description: "Social proof driven creatives using customer reviews and ratings.",
    tag: "Trust",
    icon: "⭐"
  },
  {
    id: 8,
    title: "Side-by-side",
    description: "Comparison creatives showing your product vs. the competition.",
    tag: "Direct Response",
    icon: "🆚"
  }
];

export default function ContextSkills() {
  return (
    <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">
          
          <div className="max-w-6xl mx-auto w-full px-8 md:px-12 py-12 space-y-12">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-display font-bold text-[#101828] tracking-tight">Context & Skills</h1>
                <p className="text-[#667085] font-medium text-[15px]">
                  Manage your brand context and AI skills to ensure high-fidelity outputs.
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#101828] text-white rounded-xl text-[14px] font-bold hover:bg-[#101828]/90 transition-all shadow-sm">
                <Plus className="size-4" /> Add new
              </button>
            </div>

            {/* Merged Section 1: Context (Image 1 content) */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-[#101828]">Brand Context</h2>
                <button className="text-[13px] font-bold text-signal hover:underline">Edit context</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contextItems.map((item) => (
                  <Card key={item.id} className="border border-[#F2F0EB] shadow-none hover:shadow-md transition-all cursor-pointer group">
                    <CardContent className="p-5 flex flex-col h-full space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 bg-[#F9FAFB] rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-[#F2F0EB]">
                          {item.icon}
                        </div>
                        <Badge variant="neutral" className="text-[10px] font-bold uppercase">{item.count}</Badge>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#101828] text-[15px]">{item.title}</h3>
                        <p className="text-[13px] text-[#667085] font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <hr className="border-[#F2F0EB]" />

            {/* Merged Section 2: Skills (Image 2 content) */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-display font-bold text-[#101828]">Your Skills</h2>
                  <p className="text-[14px] text-[#667085] font-medium">Pre-trained AI modules designed for specific marketing objectives.</p>
                </div>
                <div className="flex items-center gap-2 p-1 bg-[#F9FAFB] border border-[#F2F0EB] rounded-xl">
                  <button className="px-3 py-1.5 text-[12px] font-bold bg-white text-[#101828] rounded-lg shadow-sm">My Skills</button>
                  <button className="px-3 py-1.5 text-[12px] font-bold text-[#667085] hover:text-[#101828]">Explore Library</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card className="h-full border border-[#F2F0EB] shadow-none hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col">
                      <CardContent className="p-5 flex flex-col flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{skill.icon}</span>
                          <button className="text-[#98A2B3] hover:text-[#101828]">
                            <DotsVertical className="size-4" />
                          </button>
                        </div>
                        <div className="space-y-2 flex-1">
                          <h3 className="font-bold text-[#101828] text-[15px] group-hover:text-signal transition-colors">{skill.title}</h3>
                          <p className="text-[12px] text-[#667085] font-medium leading-[1.6]">
                            {skill.description}
                          </p>
                        </div>
                        <div className="pt-2">
                          <Badge variant="indigo" className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                            {skill.tag}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                
                {/* Add Skill Placeholder */}
                <button className="h-full min-h-[180px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] rounded-[24px] flex flex-col items-center justify-center gap-3 group hover:border-signal/50 hover:bg-[#F2F4F7] transition-all">
                  <div className="size-10 rounded-xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#667085] group-hover:text-signal transition-all shadow-sm">
                    <Plus className="size-5" />
                  </div>
                  <span className="text-[13px] font-bold text-[#475467]">New Skill</span>
                </button>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
