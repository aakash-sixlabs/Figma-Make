import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { 
  Users01,
  Plus,
  ArrowLeft,
  SearchLg
} from "@untitled-ui/icons-react";
import { Package, ShieldAlert, Palette, Trash2, Upload, AlertCircle, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./design-system";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";

type ViewState = "table" | "form";

export default function BrandSetup() {
  const [showBrandKit, setShowBrandKit] = useState(false);
  const [brandKitData, setBrandKitData] = useState({
    name: "The Morning Coffee",
    website: "morningcoffee.com",
    tone: "Casual, friendly, energetic",
    primaryColor: "#2563EB",
    font: "Inter"
  });

  const [showICPs, setShowICPs] = useState(false);
  const [icpView, setIcpView] = useState<ViewState>("table");
  const [icps, setIcps] = useState([
    { id: 1, name: "Health-conscious commuters", description: "Professionals who need a quick energy boost on the go." },
    { id: 2, name: "Remote workers", description: "People working from home looking for premium café quality." }
  ]);
  const [newIcp, setNewIcp] = useState({ name: "", description: "" });

  const [showProducts, setShowProducts] = useState(false);
  const [productView, setProductView] = useState<ViewState>("table");
  const [products, setProducts] = useState([
    { id: 1, name: "Morning Blend", description: "Our signature light roast with citrus notes.", imageCount: 4 },
    { id: 2, name: "Midnight Roast", description: "Dark, bold, and smoky finish.", imageCount: 2 }
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "" });

  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const [disclaimerView, setDisclaimerView] = useState<ViewState>("table");
  const [disclaimers, setDisclaimers] = useState([
    { id: 1, title: "Health Warning", text: "Consult a doctor before consuming excessive caffeine." },
    { id: 2, title: "Shipping Policy", text: "Standard delivery takes 3-5 business days within the US." }
  ]);
  const [newDisclaimer, setNewDisclaimer] = useState({ title: "", text: "" });

  const contextItems = [
    {
      id: "brand-kit",
      title: "Brand Kit",
      description: "Tone of voice, Colors, Typography",
      icon: <Palette className="size-5 text-indigo-500" />,
      count: "Configured",
      onClick: () => setShowBrandKit(true)
    },
    {
      id: "icps",
      title: "ICPs",
      description: "Manage Ideal Customer Profiles",
      icon: <Users01 className="size-5 text-signal" />,
      count: `${icps.length} Profile${icps.length === 1 ? '' : 's'}`,
      onClick: () => {
        setIcpView("table");
        setShowICPs(true);
      }
    },
    {
      id: "products",
      title: "Products",
      description: "Manage product catalogue",
      icon: <Package className="size-5 text-amber-500" />,
      count: `${products.length} Item${products.length === 1 ? '' : 's'}`,
      onClick: () => {
        setProductView("table");
        setShowProducts(true);
      }
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      description: "Legal and compliance library",
      icon: <ShieldAlert className="size-5 text-rose-500" />,
      count: `${disclaimers.length} Active`,
      onClick: () => {
        setDisclaimerView("table");
        setShowDisclaimers(true);
      }
    }
  ];

  const handleAddIcp = () => {
    if (newIcp.name) {
      setIcps([{ id: Date.now(), ...newIcp }, ...icps]);
      setNewIcp({ name: "", description: "" });
      setIcpView("table");
    }
  };

  const handleDeleteIcp = (id: number) => {
    setIcps(icps.filter(i => i.id !== id));
  };

  const handleAddProduct = () => {
    if (newProduct.name) {
      setProducts([{ id: Date.now(), ...newProduct, imageCount: 0 }, ...products]);
      setNewProduct({ name: "", description: "" });
      setProductView("table");
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleAddDisclaimer = () => {
    if (newDisclaimer.title) {
      setDisclaimers([{ id: Date.now(), ...newDisclaimer }, ...disclaimers]);
      setNewDisclaimer({ title: "", text: "" });
      setDisclaimerView("table");
    }
  };

  const handleDeleteDisclaimer = (id: number) => {
    setDisclaimers(disclaimers.filter(d => d.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-body text-[#101828] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm overflow-y-auto custom-scrollbar relative">
          
          <div className="max-w-6xl mx-auto w-full px-8 md:px-12 py-12 space-y-12">
            
            {/* Header */}
            <div className="space-y-3">
              <h1 className="text-3xl font-display font-bold text-[#101828] tracking-tight">Brand Setup</h1>
              <p className="text-[#667085] font-medium text-[15px] leading-relaxed max-w-2xl">
                Configure your brand identity, customer profiles, and product catalogue to provide context for AI creative generation.
              </p>
            </div>

            {/* Section: Brand Assets */}
            <section className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contextItems.map((item) => (
                  <Card key={item.id} onClick={item.onClick} className="border border-[#F2F0EB] shadow-none hover:shadow-md hover:border-[#D0D5DD] transition-all cursor-pointer group bg-white">
                    <CardContent className="p-6 flex flex-col h-full space-y-5">
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 bg-[#F9FAFB] rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-[#F2F0EB]">
                          {item.icon}
                        </div>
                        <Badge variant="neutral" className="text-[10px] font-bold uppercase">{item.count}</Badge>
                      </div>
                      <div className="space-y-1.5">
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

          </div>
        </div>
      </main>

      {/* Brand Kit Modal */}
      <Dialog open={showBrandKit} onOpenChange={setShowBrandKit}>
        <DialogContent className="rounded-[28px] p-8 max-w-xl border-[#F2F0EB]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-[#101828]">Brand Kit</DialogTitle>
            <DialogDescription className="text-[15px] text-[#667085] mt-1">Core identity settings for your workspace.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Brand Name</Label>
              <Input 
                value={brandKitData.name} 
                onChange={(e) => setBrandKitData({...brandKitData, name: e.target.value})}
                className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Website</Label>
              <Input 
                value={brandKitData.website} 
                onChange={(e) => setBrandKitData({...brandKitData, website: e.target.value})}
                className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Tone of Voice</Label>
              <Textarea 
                value={brandKitData.tone} 
                onChange={(e) => setBrandKitData({...brandKitData, tone: e.target.value})}
                className="rounded-xl min-h-[100px] border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm text-[15px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Primary Color</Label>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl border border-[#F2F0EB] shrink-0 shadow-sm" style={{ backgroundColor: brandKitData.primaryColor }} />
                  <Input 
                    value={brandKitData.primaryColor} 
                    onChange={(e) => setBrandKitData({...brandKitData, primaryColor: e.target.value})}
                    className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm uppercase font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Typography</Label>
                <Input 
                  value={brandKitData.font} 
                  onChange={(e) => setBrandKitData({...brandKitData, font: e.target.value})}
                  className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button variant="ghost" onClick={() => setShowBrandKit(false)} className="rounded-xl text-[#667085]">Cancel</Button>
            <Button onClick={() => setShowBrandKit(false)} className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl px-8 shadow-sm">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ICPs Modal */}
      <Dialog open={showICPs} onOpenChange={setShowICPs}>
        <DialogContent className="rounded-[28px] p-0 max-w-3xl border-[#F2F0EB] overflow-hidden">
          <AnimatePresence mode="wait">
            {icpView === "table" ? (
              <motion.div 
                key="table"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col h-full max-h-[85vh]"
              >
                <div className="p-8 pb-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <DialogTitle className="text-2xl font-display font-bold text-[#101828]">Ideal Customer Profiles</DialogTitle>
                    <p className="text-[15px] text-[#667085]">Manage your target audience segments.</p>
                  </div>
                  <Button onClick={() => setIcpView("form")} className="bg-[#101828] text-white rounded-xl gap-2 px-5">
                    <Plus className="size-4" /> Add Profile
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                  <div className="border border-[#F2F0EB] rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-[#F9FAFB] border-b border-[#F2F0EB]">
                        <tr>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Profile Name</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Description</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085] text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F2F0EB] bg-white">
                        {icps.map(icp => (
                          <tr key={icp.id} className="group hover:bg-[#F9FAFB] transition-colors">
                            <td className="px-6 py-4">
                              <span className="font-bold text-[#101828] text-[14px]">{icp.name}</span>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[#667085] text-[13px] line-clamp-2 leading-relaxed">{icp.description}</p>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button onClick={() => handleDeleteIcp(icp.id)} className="p-2 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                <Trash2 className="size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {icps.length === 0 && (
                          <tr>
                            <td colSpan={3} className="px-6 py-12 text-center text-[#667085] text-[14px]">
                              No ICPs configured yet. Click "Add Profile" to get started.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                className="p-8 space-y-8"
              >
                <div className="flex items-center gap-4">
                  <button onClick={() => setIcpView("table")} className="p-2 rounded-xl border border-[#F2F0EB] hover:bg-[#F9FAFB] transition-all text-[#667085]">
                    <ArrowLeft className="size-4" />
                  </button>
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-display font-bold text-[#101828]">Create New ICP</h3>
                    <p className="text-[14px] text-[#667085]">Define a new target segment for your brand.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Profile Name</Label>
                    <Input 
                      placeholder="e.g. Health-conscious commuters"
                      value={newIcp.name} 
                      onChange={(e) => setNewIcp({...newIcp, name: e.target.value})}
                      className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Detailed Description</Label>
                    <Textarea 
                      placeholder="Describe their pain points, motivations, and daily routines..."
                      value={newIcp.description} 
                      onChange={(e) => setNewIcp({...newIcp, description: e.target.value})}
                      className="rounded-xl min-h-[120px] border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm text-[15px] leading-relaxed"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F2F0EB]">
                  <Button variant="ghost" onClick={() => setIcpView("table")} className="rounded-xl text-[#667085]">Cancel</Button>
                  <Button onClick={handleAddIcp} disabled={!newIcp.name} className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl px-8 shadow-sm">
                    Save Profile
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {/* Products Modal */}
      <Dialog open={showProducts} onOpenChange={setShowProducts}>
        <DialogContent className="rounded-[28px] p-0 max-w-3xl border-[#F2F0EB] overflow-hidden">
          <AnimatePresence mode="wait">
            {productView === "table" ? (
              <motion.div 
                key="table"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col h-full max-h-[85vh]"
              >
                <div className="p-8 pb-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <DialogTitle className="text-2xl font-display font-bold text-[#101828]">Product Catalogue</DialogTitle>
                    <p className="text-[15px] text-[#667085]">Manage your product database and assets.</p>
                  </div>
                  <Button onClick={() => setProductView("form")} className="bg-[#101828] text-white rounded-xl gap-2 px-5">
                    <Plus className="size-4" /> Add Product
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                  <div className="border border-[#F2F0EB] rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-[#F9FAFB] border-b border-[#F2F0EB]">
                        <tr>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Product</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Assets</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085] text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F2F0EB] bg-white">
                        {products.map(product => (
                          <tr key={product.id} className="group hover:bg-[#F9FAFB] transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-[#F9FAFB] border border-[#F2F0EB] flex items-center justify-center shrink-0 text-[#98A2B3] group-hover:bg-white transition-colors">
                                  <Package className="size-5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="font-bold text-[#101828] text-[14px]">{product.name}</p>
                                  <p className="text-[#667085] text-[12px] line-clamp-1">{product.description}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant="indigo" className="text-[10px]">{product.imageCount} Images</Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button onClick={() => handleDeleteProduct(product.id)} className="p-2 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                <Trash2 className="size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {products.length === 0 && (
                          <tr>
                            <td colSpan={3} className="px-6 py-12 text-center text-[#667085] text-[14px]">
                              No products found. Register your first product to begin.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                className="p-8 space-y-8"
              >
                <div className="flex items-center gap-4">
                  <button onClick={() => setProductView("table")} className="p-2 rounded-xl border border-[#F2F0EB] hover:bg-[#F9FAFB] transition-all text-[#667085]">
                    <ArrowLeft className="size-4" />
                  </button>
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-display font-bold text-[#101828]">Register New Product</h3>
                    <p className="text-[14px] text-[#667085]">Provide details and assets for the AI to analyze.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Product Name</Label>
                    <Input 
                      placeholder="e.g. Morning Blend 12oz"
                      value={newProduct.name} 
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Description / Unique Selling Points</Label>
                    <Textarea 
                      placeholder="List the main features and benefits..."
                      value={newProduct.description} 
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      className="rounded-xl min-h-[100px] border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm text-[15px] leading-relaxed"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Product Assets</Label>
                    <div 
                      onClick={() => document.getElementById('product-image-upload')?.click()}
                      className="border-2 border-dashed border-[#F2F0EB] rounded-2xl p-8 flex flex-col items-center justify-center bg-[#F9FAFB] gap-3 cursor-pointer hover:bg-white hover:border-signal/30 transition-all shadow-sm group"
                    >
                       <input type="file" id="product-image-upload" className="hidden" multiple accept="image/*" />
                       <div className="size-12 rounded-xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#98A2B3] group-hover:text-signal transition-colors shadow-sm">
                        <Upload className="size-5" />
                       </div>
                       <div className="text-center">
                        <p className="text-[14px] font-bold text-[#101828]">Upload product imagery</p>
                        <p className="text-[12px] text-[#667085] mt-1">PNG, JPG or WEBP up to 10MB each</p>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F2F0EB]">
                  <Button variant="ghost" onClick={() => setProductView("table")} className="rounded-xl text-[#667085]">Cancel</Button>
                  <Button onClick={handleAddProduct} disabled={!newProduct.name} className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl px-8 shadow-sm">
                    Save Product
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {/* Disclaimers Modal */}
      <Dialog open={showDisclaimers} onOpenChange={setShowDisclaimers}>
        <DialogContent className="rounded-[28px] p-0 max-w-3xl border-[#F2F0EB] overflow-hidden">
          <AnimatePresence mode="wait">
            {disclaimerView === "table" ? (
              <motion.div 
                key="table"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col h-full max-h-[85vh]"
              >
                <div className="p-8 pb-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <DialogTitle className="text-2xl font-display font-bold text-[#101828]">Disclaimer Library</DialogTitle>
                    <p className="text-[15px] text-[#667085]">Manage your legal and compliance snippets.</p>
                  </div>
                  <Button onClick={() => setDisclaimerView("form")} className="bg-[#101828] text-white rounded-xl gap-2 px-5">
                    <Plus className="size-4" /> Add Disclaimer
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                  <div className="border border-[#F2F0EB] rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-[#F9FAFB] border-b border-[#F2F0EB]">
                        <tr>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Title</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085]">Text Snippet</th>
                          <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#667085] text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F2F0EB] bg-white">
                        {disclaimers.map(disc => (
                          <tr key={disc.id} className="group hover:bg-[#F9FAFB] transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <AlertCircle className="size-4 text-rose-500 shrink-0" />
                                <span className="font-bold text-[#101828] text-[14px]">{disc.title}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[#667085] text-[13px] line-clamp-1 leading-relaxed">{disc.text}</p>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button onClick={() => handleDeleteDisclaimer(disc.id)} className="p-2 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                <Trash2 className="size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {disclaimers.length === 0 && (
                          <tr>
                            <td colSpan={3} className="px-6 py-12 text-center text-[#667085] text-[14px]">
                              Library is empty. Add your first disclaimer.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                className="p-8 space-y-8"
              >
                <div className="flex items-center gap-4">
                  <button onClick={() => setDisclaimerView("table")} className="p-2 rounded-xl border border-[#F2F0EB] hover:bg-[#F9FAFB] transition-all text-[#667085]">
                    <ArrowLeft className="size-4" />
                  </button>
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-display font-bold text-[#101828]">New Disclaimer</h3>
                    <p className="text-[14px] text-[#667085]">Add legal or compliance text to be used in creatives.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Internal Title</Label>
                    <Input 
                      placeholder="e.g. FDA Compliance Statement"
                      value={newDisclaimer.title} 
                      onChange={(e) => setNewDisclaimer({...newDisclaimer, title: e.target.value})}
                      className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Full Legal Text</Label>
                    <Textarea 
                      placeholder="Enter the disclaimer text exactly as it should appear..."
                      value={newDisclaimer.text} 
                      onChange={(e) => setNewDisclaimer({...newDisclaimer, text: e.target.value})}
                      className="rounded-xl min-h-[150px] border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white transition-all shadow-sm text-[15px] leading-relaxed"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F2F0EB]">
                  <Button variant="ghost" onClick={() => setDisclaimerView("table")} className="rounded-xl text-[#667085]">Cancel</Button>
                  <Button onClick={handleAddDisclaimer} disabled={!newDisclaimer.title} className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl px-8 shadow-sm">
                    Save Disclaimer
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
