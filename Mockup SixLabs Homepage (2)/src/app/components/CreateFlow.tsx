import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { 
  CTAButton, 
  SectionHeading, 
  Pill, 
  Badge, 
  FeaturedIcon,
  BadgeGroup 
} from "./design-system";
import { 
  ChevronLeft, 
  Target01, 
  Users01, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Plus,
  Upload01,
  File02,
  XClose,
  Stars01,
  LayoutAlt01,
  Clock,
  HelpCircle
} from "@untitled-ui/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { cn } from "./ui/utils";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

const STEPS = [
  { id: "objective", label: "Objective", icon: Target01 },
  { id: "context", label: "Context", icon: Users01 },
  { id: "creative", label: "Creative", icon: Stars01 },
  { id: "generate", label: "Review", icon: Zap },
];

const PREDEFINED_AUDIENCES = [
  "Health-conscious commuters",
  "Busy parents (25-45)",
  "Fitness enthusiasts",
  "Eco-friendly shoppers"
];

const PREDEFINED_PRODUCTS = [
  "Cirkul Starter Kit",
  "Blueberry Flavor Sips",
  "Orange Flavor Sips",
  "Cirkul Water Bottle (32oz)"
];

export default function CreateFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  // Form State
  const [formData, setFormData] = useState({
    objective: "offer", // "offer" or "brand"
    brand: "Cirkul",
    audience: "Health-conscious commuters",
    platform: "Meta",
    ratio: "9:16",
    prompt: "",
    product: "None (Global Brand)",
    files: [] as File[],
    productImages: [] as File[],
  });

  // Modal States
  const [showAddAudience, setShowAddAudience] = useState(false);
  const [newAudience, setNewAudience] = useState("");
  const [audiences, setAudiences] = useState(PREDEFINED_AUDIENCES);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [products, setProducts] = useState(PREDEFINED_PRODUCTS);

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleLaunch();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleLaunch = () => {
    sessionStorage.setItem("pending_generation", JSON.stringify(formData));
    toast.success("Generation request added to queue!", {
      description: "You can track the progress in the My Generations menu.",
    });
    navigate("/generations");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({...formData, files: [...formData.files, ...Array.from(e.target.files)]});
    }
  };

  const removeFile = (index: number) => {
    setFormData({...formData, files: formData.files.filter((_, i) => i !== index)});
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({...formData, productImages: [...formData.productImages, ...Array.from(e.target.files)]});
    }
  };

  const removeImage = (index: number) => {
    setFormData({...formData, productImages: formData.productImages.filter((_, i) => i !== index)});
  };

  const addNewAudience = () => {
    if (newAudience.trim()) {
      setAudiences([...audiences, newAudience.trim()]);
      setFormData({...formData, audience: newAudience.trim()});
      setNewAudience("");
      setShowAddAudience(false);
    }
  };

  const addNewProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct.trim()]);
      setFormData({...formData, product: newProduct.trim()});
      setNewProduct("");
      setShowAddProduct(false);
    }
  };

  const renderStepIcon = (index: number) => {
    const StepIcon = STEPS[index].icon;
    const isCompleted = index < currentStep;
    const isActive = index === currentStep;

    return (
      <div className={cn(
        "size-12 rounded-xl flex items-center justify-center transition-all duration-500 border shadow-featured-icon",
        isCompleted ? "bg-signal border-signal text-white" : 
        isActive ? "bg-white border-signal text-signal shadow-cta" : 
        "bg-surface border-border-subtle text-muted-text"
      )}>
        {isCompleted ? <CheckCircle className="size-6" /> : <StepIcon className="size-6" />}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-surface font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-border-subtle px-8 py-4 flex items-center justify-between z-20 shadow-sm shrink-0">
          <div className="flex items-center gap-8">
            <Link to="/" className="p-2.5 hover:bg-surface rounded-xl border border-transparent hover:border-border-subtle transition-all text-muted-text hover:text-ink">
              <ChevronLeft className="size-5" />
            </Link>
            <div className="h-8 w-px bg-border-subtle hidden md:block" />
            <div className="flex items-center gap-10">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center gap-4">
                  {renderStepIcon(index)}
                  <div className="hidden xl:block">
                    <p className={cn(
                      "text-[11px] font-bold uppercase tracking-widest leading-none mb-1.5",
                      index <= currentStep ? "text-signal" : "text-muted-text"
                    )}>Step 0{index + 1}</p>
                    <p className={cn(
                      "text-[14px] font-display font-bold leading-none",
                      index === currentStep ? "text-ink" : "text-muted-text"
                    )}>{step.label}</p>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="ml-6 h-0.5 w-12 bg-border-subtle/50 hidden 2xl:block rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BadgeGroup badge="Live Support">
               Ask AI for help
            </BadgeGroup>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-12"
              >
                {/* Step Title Section */}
                <div className="space-y-4">
                  <Pill variant="indigo">Generation Workflow</Pill>
                  <SectionHeading as="h1" className="text-4xl md:text-5xl tracking-tight">
                    {currentStep === 0 && "Define your core objective"}
                    {currentStep === 1 && "Campaign configuration"}
                    {currentStep === 2 && "The Creative Workspace"}
                    {currentStep === 3 && "Final review & Batch launch"}
                  </SectionHeading>
                  <p className="text-muted-text text-xl leading-relaxed max-w-2xl">
                    {currentStep === 0 && "Choose the primary goal for this creative batch to help our AI prioritize performance metrics."}
                    {currentStep === 1 && "Specify your target audience and distribution channel context."}
                    {currentStep === 2 && "Provide your brief assets. The more context you provide, the better the output."}
                    {currentStep === 3 && "Verify your settings before we fire up the generation engine."}
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-card border border-border-subtle relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-mist rounded-full blur-[120px] opacity-40 -mr-40 -mt-40" />
                  
                  <div className="relative z-10">
                    {currentStep === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: "offer", label: "Offer Led Creatives", desc: "Optimized for direct response, discounts, and high-velocity seasonal promotions.", icon: Zap, variant: "primary" as const },
                          { id: "brand", label: "Evergreen Brand", desc: "Long-term storytelling focusing on core brand values and lifestyle proposition.", icon: Stars01, variant: "gray" as const },
                        ].map(item => (
                          <button 
                            key={item.id}
                            onClick={() => setFormData({...formData, objective: item.id})}
                            className={cn(
                              "flex flex-col gap-4 p-6 rounded-[20px] border-2 text-left transition-all duration-500 h-full group relative overflow-hidden shadow-skeuomorphic",
                              formData.objective === item.id 
                                ? "border-signal bg-mist/30 shadow-xl scale-[1.02]" 
                                : "border-border-subtle hover:border-signal/20 bg-white hover:shadow-lg"
                            )}
                          >
                            <FeaturedIcon 
                              icon={item.icon} 
                              variant={formData.objective === item.id ? "primary" : item.variant} 
                              size="md" 
                              className="group-hover:scale-110 transition-transform"
                            />
                            <div>
                              <h3 className="text-xl font-display font-bold text-ink tracking-tight group-hover:text-signal transition-colors">{item.label}</h3>
                              <p className="text-muted-text mt-2 text-[14px] leading-relaxed">{item.desc}</p>
                            </div>
                            {formData.objective === item.id && (
                              <div className="absolute top-4 right-4 text-signal">
                                <CheckCircle className="size-5" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Target Audience</Label>
                              <button onClick={() => setShowAddAudience(true)} className="text-signal text-[12px] font-bold flex items-center gap-1 hover:underline">
                                <Plus className="size-3" /> Create New
                              </button>
                            </div>
                            <Select 
                              value={formData.audience} 
                              onValueChange={(v) => setFormData({...formData, audience: v})}
                            >
                              <SelectTrigger className="h-12 rounded-[14px] border-border-subtle bg-surface/40 px-4 focus:bg-white transition-all text-[15px] shadow-sm">
                                <SelectValue placeholder="Select audience" />
                              </SelectTrigger>
                              <SelectContent>
                                {audiences.map(a => (
                                  <SelectItem key={a} value={a}>{a}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-3">
                            <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Primary Platform</Label>
                            <div className="h-12 rounded-[14px] border-2 border-signal/20 bg-mist/20 px-4 flex items-center gap-3 shadow-sm">
                              <FeaturedIcon icon={LayoutAlt01} variant="primary" size="sm" className="shadow-none border-none bg-signal text-white" />
                              <div className="flex-1">
                                <p className="text-[14px] font-bold text-ink leading-tight">Meta (Facebook & IG)</p>
                                <p className="text-[10px] text-signal font-bold uppercase tracking-wider">Enterprise Channel Active</p>
                              </div>
                              <Badge variant="indigo">Current Choice</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Aspect Ratio & Placement</Label>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { id: "9:16", label: "Vertical", desc: "Stories & Reels", icon: Clock },
                              { id: "4:5", label: "Social", desc: "Main Feed", icon: LayoutAlt01 },
                              { id: "1:1", label: "Square", desc: "Grid & Sidebar", icon: File02 },
                            ].map(r => (
                              <button
                                key={r.id}
                                onClick={() => setFormData({...formData, ratio: r.id})}
                                className={cn(
                                  "p-4 rounded-[16px] border-2 text-left transition-all duration-300 relative group",
                                  formData.ratio === r.id ? "border-signal bg-mist/20 shadow-lg" : "border-border-subtle hover:border-signal/10 bg-white"
                                )}
                              >
                                <p className="font-bold text-ink text-base tracking-tight group-hover:text-signal transition-colors">{r.id}</p>
                                <p className="text-[12px] text-muted-text mt-1 font-medium">{r.desc}</p>
                                {formData.ratio === r.id && <div className="absolute top-4 right-4 size-2 bg-signal rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-8">
                        <div className="space-y-4">
                           <div className="flex items-center justify-between">
                              <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Associated Product</Label>
                              <button onClick={() => setShowAddProduct(true)} className="text-signal text-[12px] font-bold flex items-center gap-1 hover:underline">
                                <Plus className="size-3" /> Register Product
                              </button>
                           </div>
                           <Select 
                             value={formData.product} 
                             onValueChange={(v) => setFormData({...formData, product: v})}
                           >
                             <SelectTrigger className="h-12 rounded-[14px] border-border-subtle bg-surface/40 px-4 focus:bg-white transition-all text-[15px] shadow-sm">
                               <SelectValue placeholder="Select product context" />
                             </SelectTrigger>
                             <SelectContent>
                               <SelectItem value="None (Global Brand)">General Brand Message</SelectItem>
                               {products.map(p => (
                                 <SelectItem key={p} value={p}>{p}</SelectItem>
                               ))}
                             </SelectContent>
                           </Select>
                        </div>

                        <div className="space-y-4">
                           <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Product Images (Optional)</Label>
                           <div 
                             className="border-2 border-dashed border-border-subtle rounded-[16px] p-4 flex items-center gap-4 bg-surface/20 hover:bg-mist/20 hover:border-signal/30 transition-all cursor-pointer group shadow-inner"
                             onClick={() => document.getElementById('image-upload')?.click()}
                           >
                             <input type="file" id="image-upload" accept="image/*" className="hidden" multiple onChange={handleImageUpload} />
                             <div className="size-10 rounded-[10px] bg-white border border-border-subtle flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all shadow-sm">
                               <Upload01 className="text-signal size-5" />
                             </div>
                             <div>
                               <h4 className="text-[14px] font-bold text-ink">Upload product shots</h4>
                               <p className="text-muted-text text-[12px] font-medium">PNG or JPG up to 10MB</p>
                             </div>
                           </div>
                           
                           {formData.productImages.length > 0 && (
                             <div className="flex flex-wrap gap-2">
                               {formData.productImages.map((file, i) => (
                                 <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-[12px] font-bold text-ink shadow-sm group">
                                   <File02 className="text-signal size-3.5" />
                                   <span className="max-w-[150px] truncate">{file.name}</span>
                                   <button onClick={(e) => { e.stopPropagation(); removeImage(i); }} className="hover:text-danger ml-1 transition-colors">
                                     <XClose className="size-3.5" />
                                   </button>
                                 </div>
                               ))}
                             </div>
                           )}
                        </div>

                        <div className="space-y-6">
                           <div className="flex flex-col gap-4">
                              <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text">Primary Content Method</Label>
                              <div 
                                className="border-2 border-dashed border-border-subtle rounded-[24px] p-8 flex flex-col items-center justify-center bg-surface/20 hover:bg-mist/20 hover:border-signal/30 transition-all cursor-pointer group shadow-inner"
                                onClick={() => document.getElementById('file-upload')?.click()}
                              >
                                <input type="file" id="file-upload" className="hidden" multiple onChange={handleFileUpload} />
                                <div className="size-16 rounded-[16px] bg-white border border-border-subtle flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all shadow-featured-icon">
                                  <Upload01 className="text-signal size-6" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-ink tracking-tight">Drop your brief here</h4>
                                <p className="text-muted-text mt-1 text-[14px] font-medium max-w-sm text-center">We support PDF, DOCX, and high-res imagery for context.</p>
                              </div>

                              {formData.files.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {formData.files.map((file, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-border-subtle rounded-[12px] text-[13px] font-bold text-ink shadow-sm group">
                                      <File02 className="text-signal size-4" />
                                      {file.name}
                                      <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="hover:text-danger ml-1 transition-colors">
                                        <XClose className="size-4" />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                           </div>

                           <div className="space-y-3">
                              <Label className="text-[12px] font-bold uppercase tracking-widest text-muted-text opacity-50">Manual Prompt Instructions (Optional)</Label>
                              <Textarea 
                                placeholder="Describe any specific visual requirements or copy directions that aren't in your document..."
                                className="min-h-[100px] w-full p-4 rounded-[16px] border-2 border-border-subtle bg-surface/10 focus:bg-white focus:border-signal/40 focus:ring-0 text-[15px] leading-relaxed transition-all resize-none font-medium shadow-inner"
                                value={formData.prompt}
                                onChange={(e) => setFormData({...formData, prompt: e.target.value})}
                              />
                           </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <section className="space-y-4">
                            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-text flex items-center gap-2">
                               <CheckCircle className="size-4" /> Pipeline config
                            </h3>
                            <div className="space-y-1">
                              {[
                                { label: "Objective", value: formData.objective === "offer" ? "OFFER LED" : "EVERGREEN", isBadge: true },
                                { label: "Target Product", value: formData.product },
                                { label: "Audience", value: formData.audience },
                                { label: "Channel", value: `Meta (${formData.ratio})` },
                              ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-border-subtle/50 last:border-0">
                                  <span className="text-[14px] font-medium text-muted-text">{item.label}</span>
                                  {item.isBadge ? (
                                    <Badge variant="indigo">{item.value}</Badge>
                                  ) : (
                                    <span className="text-[14px] font-bold text-ink text-right">{item.value}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </section>

                          <section className="space-y-4">
                            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-text flex items-center gap-2">
                               <File02 className="size-4" /> Submission Context
                            </h3>
                            <Card className="rounded-[20px] border-border-subtle bg-surface/30 p-6 h-full shadow-inner">
                              <div className="flex flex-col h-full gap-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-[13px] font-bold text-ink">Analyzed Briefs</span>
                                  <button onClick={() => setCurrentStep(2)} className="text-signal text-[12px] font-bold hover:underline underline-offset-4">MODIFY</button>
                                </div>
                                <div className="space-y-3 flex-1">
                                  {formData.files.length > 0 ? (
                                    <div className="flex flex-col gap-2">
                                      {formData.files.slice(0, 2).map((f, i) => (
                                        <div key={i} className="p-3 bg-white rounded-lg border border-border-subtle flex items-center gap-2 text-[13px] font-bold shadow-sm">
                                          <File02 className="text-signal size-4" />
                                          <span className="truncate">{f.name}</span>
                                        </div>
                                      ))}
                                      {formData.files.length > 2 && (
                                        <p className="text-[11px] text-muted-text font-bold text-center">+{formData.files.length - 2} more files</p>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="p-6 border-2 border-dashed border-border-subtle rounded-xl flex flex-col items-center gap-2 opacity-50">
                                       <HelpCircle className="size-6" />
                                       <p className="text-[11px] font-bold uppercase tracking-widest text-center">No docs provided</p>
                                    </div>
                                  )}
                                  <div className="pt-3 border-t border-border-subtle/30">
                                    <p className="text-[14px] text-muted-text italic leading-relaxed line-clamp-3">
                                      "{formData.prompt || "No additional text-based instructions provided for this batch."}"
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </section>
                        </div>

                        <div className="bg-[#020617] text-white rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 relative overflow-hidden shadow-2xl">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-signal/10 rounded-full blur-[100px]" />
                          <div className="flex items-center gap-4 relative z-10">
                            <FeaturedIcon icon={Zap} variant="primary" size="md" className="bg-white/10 border-white/20 text-lilac shadow-lg" />
                            <div>
                              <p className="text-white/50 text-[12px] font-bold uppercase tracking-widest">Resource Cost</p>
                              <p className="text-3xl font-display font-bold tracking-tight mt-1">120 <span className="text-base opacity-40 font-medium">CREDITS</span></p>
                            </div>
                          </div>
                          <div className="flex flex-col items-center md:items-end gap-2 relative z-10">
                             <BadgeGroup badge="Auto-scaling Active">
                                Background Batch Generation
                             </BadgeGroup>
                             <p className="text-white/40 text-[12px] font-medium">Estimated queue wait: <span className="text-white font-bold">~4.2m</span></p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6">
                  <Button 
                    variant="ghost" 
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={cn(
                      "h-16 px-10 rounded-2xl font-bold gap-3 text-muted-text transition-all",
                      currentStep === 0 && "opacity-0 pointer-events-none"
                    )}
                  >
                    <ChevronLeft className="size-5" /> Previous Step
                  </Button>

                  <div className="flex items-center gap-6">
                    <CTAButton 
                      onClick={nextStep}
                      className="h-16 px-12 rounded-cta gap-4 shadow-cta hover:shadow-cta-hover transition-all text-lg text-[#0b123f]"
                    >
                      {currentStep === STEPS.length - 1 ? "Start Generation" : "Continue to Next Step"}
                      {currentStep === STEPS.length - 1 ? <Zap className="size-6" /> : <ArrowRight className="size-6" />}
                    </CTAButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </div>
      </main>

      {/* Modals */}
      <Dialog open={showAddAudience} onOpenChange={setShowAddAudience}>
        <DialogContent className="rounded-[28px] p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Register Audience</DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-4">
            <Label className="uppercase tracking-widest text-[11px] font-bold text-muted-text">Audience Identification</Label>
            <Input 
              value={newAudience} 
              onChange={(e) => setNewAudience(e.target.value)} 
              placeholder="e.g., Silicon Valley Tech Pros (25-40)"
              className="h-14 rounded-xl border-border-subtle bg-surface/50 focus:bg-white transition-all shadow-inner"
            />
          </div>
          <DialogFooter className="gap-3">
            <Button variant="ghost" className="h-12 px-6 font-bold" onClick={() => setShowAddAudience(false)}>Cancel</Button>
            <Button onClick={addNewAudience} className="bg-signal text-white rounded-xl h-12 px-8 font-bold shadow-cta">Create Segment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
        <DialogContent className="rounded-[28px] p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Register Product</DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-4">
            <Label className="uppercase tracking-widest text-[11px] font-bold text-muted-text">Product Identifier</Label>
            <Input 
              value={newProduct} 
              onChange={(e) => setNewProduct(e.target.value)} 
              placeholder="e.g., Cirkul Hydration Plus (Lemonade)"
              className="h-14 rounded-xl border-border-subtle bg-surface/50 focus:bg-white transition-all shadow-inner"
            />
          </div>
          <DialogFooter className="gap-3">
            <Button variant="ghost" className="h-12 px-6 font-bold" onClick={() => setShowAddProduct(false)}>Cancel</Button>
            <Button onClick={addNewProduct} className="bg-signal text-white rounded-xl h-12 px-8 font-bold shadow-cta">Add to Library</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
