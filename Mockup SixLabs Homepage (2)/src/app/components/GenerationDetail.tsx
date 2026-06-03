import { Sidebar } from "./Sidebar";
import { CTAButton, SectionHeading, Badge, StatBadge, StatusProgress } from "./design-system";
import { ChevronLeft, Share2, Download, CircleCheckBig, Copy, Edit3, MoreHorizontal, Sparkles, Layout, Type, Image as ImageIcon, Globe, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useParams } from "react-router";

// Import sample images
import uiImg3 from "../../imports/image-2.png";

export default function GenerationDetail() {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen bg-surface font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-border-subtle px-8 py-4 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-surface rounded-full transition-colors text-muted-text hover:text-ink">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-display font-bold text-ink truncate max-w-[300px]">Summer Collection 2026</h1>
                <Badge variant="indigo">Ready for review</Badge>
              </div>
              <p className="text-[12px] text-muted-text">Generated 2h ago • Cirkul Workspace</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl border-border-subtle hover:bg-surface gap-2 font-bold text-[13px]">
              <Share2 size={16} /> Share
            </Button>
            <Button variant="outline" className="rounded-xl border-border-subtle hover:bg-surface gap-2 font-bold text-[13px]">
              <Download size={16} /> Export All
            </Button>
            <CTAButton className="px-6 py-2.5 h-auto text-[14px]">
              <CircleCheckBig size={16} /> Approve Generation
            </CTAButton>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Main Preview Pane */}
          <div className="flex-1 overflow-y-auto p-8 bg-surface/50">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Main Ad Preview - Inspired by image-2.png */}
              <Card className="rounded-2xl border-border-subtle shadow-card bg-white overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-[450px] aspect-[4/5] bg-ink/5 relative group">
                    <ImageWithFallback 
                      src={uiImg3} 
                      alt="Ad Preview" 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button variant="secondary" className="rounded-full size-12 p-0"><Layout size={20} /></Button>
                      <Button variant="secondary" className="rounded-full size-12 p-0"><Play size={20} /></Button>
                    </div>
                  </div>
                  <div className="flex-1 p-8 space-y-8">
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-signal">
                          <Sparkles size={16} />
                          <span className="text-[11px] font-bold uppercase tracking-wider">Creative Strategy</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-ink">Hydration Meets Flavor</h3>
                        <p className="text-[14px] text-muted-text leading-relaxed italic">
                          "This set leverages high-contrast lifestyle imagery paired with benefit-led typography to target health-conscious commuters."
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="rounded-xl border-border-subtle bg-surface p-4">
                          <StatBadge label="AI Relevance" value="94%" />
                          <div className="mt-2"><StatusProgress value={94} variant="signal" /></div>
                        </Card>
                        <Card className="rounded-xl border-border-subtle bg-surface p-4">
                          <StatBadge label="Brand Alignment" value="100%" />
                          <div className="mt-2"><StatusProgress value={100} variant="success" /></div>
                        </Card>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Variant Specs</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="neutral">9:16 Vertical</Badge>
                        <Badge variant="neutral">4:5 Square</Badge>
                        <Badge variant="neutral">UGC Style</Badge>
                        <Badge variant="neutral">High Contrast</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Other Variations in this Set */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-bold text-ink">Batch Variations (6)</h4>
                  <Button variant="link" className="text-signal p-0 h-auto font-bold text-[13px]">View Grid</Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <Card key={i} className="aspect-video rounded-xl border-border-subtle bg-white overflow-hidden hover:ring-2 hover:ring-signal/50 transition-all cursor-pointer group">
                      <div className="w-full h-full bg-surface relative">
                         <ImageWithFallback src={uiImg3} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-2 left-2 bg-white/90 px-1.5 py-0.5 rounded text-[10px] font-bold">V{i}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar - Creative Specs */}
          <aside className="w-96 bg-white border-l border-border-subtle overflow-y-auto">
            <div className="p-8 space-y-10">
              {/* Ad Components Section */}
              <section className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Ad Elements</h4>
                    <Button variant="ghost" size="sm" className="h-8 text-[11px] font-bold text-signal"><Edit3 size={14} className="mr-1" /> Edit All</Button>
                  </div>

                  <div className="space-y-6">
                    {/* Primary Text */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-ink font-bold text-[13px]">
                          <Type size={16} className="text-muted-text" /> Primary Text
                        </div>
                        <button className="text-muted-text hover:text-signal transition-colors"><Copy size={14} /></button>
                      </div>
                      <div className="p-4 bg-surface rounded-xl border border-border-subtle text-[14px] leading-relaxed text-body-text">
                        Struggling to hit your water goal? 💧 Meet the flavored hydration system that makes drinking water delicious. Get your starter kit today!
                      </div>
                    </div>

                    {/* Headline */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-ink font-bold text-[13px]">
                          <Type size={16} className="text-muted-text" /> Headline
                        </div>
                        <button className="text-muted-text hover:text-signal transition-colors"><Copy size={14} /></button>
                      </div>
                      <div className="p-4 bg-surface rounded-xl border border-border-subtle text-[14px] font-bold text-ink">
                        Water, But Better. 🍓
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-ink font-bold text-[13px]">
                          <Type size={16} className="text-muted-text" /> Description
                        </div>
                        <button className="text-muted-text hover:text-signal transition-colors"><Copy size={14} /></button>
                      </div>
                      <div className="p-4 bg-surface rounded-xl border border-border-subtle text-[14px] text-body-text">
                        Over 50+ flavors. Zero calories. Infinite hydration.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Destination</h4>
                    <Globe size={14} className="text-muted-text" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border-subtle">
                    <span className="text-[13px] font-medium text-ink truncate max-w-[180px]">drinkcirkul.com/starter-kit</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-[11px] font-bold text-signal">Change</Button>
                  </div>
                </div>
              </section>

              {/* History Section */}
              <section className="space-y-4 pt-4 border-t border-border-subtle">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Activity</h4>
                <div className="space-y-4">
                  {[
                    { user: "AI Engine", action: "Generated variations", time: "2h ago" },
                    { user: "Aakash", action: "Refined primary text", time: "1h ago" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3 text-[13px]">
                      <div className="size-6 bg-surface rounded-full border border-border-subtle flex items-center justify-center text-[10px] font-bold">{log.user[0]}</div>
                      <div>
                        <span className="font-bold text-ink">{log.user}</span> <span className="text-muted-text">{log.action}</span>
                        <p className="text-[11px] text-muted-text mt-0.5">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
        </div>
      </main>
    </div>
  );
}
