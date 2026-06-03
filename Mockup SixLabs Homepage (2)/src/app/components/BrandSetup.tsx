import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { 
  Users01
} from "@untitled-ui/icons-react";
import { Package, ShieldAlert, Palette, Trash2, Upload, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./design-system";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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
  const [icps, setIcps] = useState([
    { id: 1, name: "Health-conscious commuters", description: "Professionals who need a quick energy boost." }
  ]);
  const [newIcp, setNewIcp] = useState({ name: "", description: "" });

  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Morning Blend", description: "Our signature light roast.", images: [] as File[] }
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "" });

  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const [disclaimers, setDisclaimers] = useState([
    { id: 1, title: "Health Warning", text: "Consult a doctor before consuming excessive caffeine." }
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
      onClick: () => setShowICPs(true)
    },
    {
      id: "products",
      title: "Products",
      description: "Manage product catalogue",
      icon: <Package className="size-5 text-amber-500" />,
      count: `${products.length} Item${products.length === 1 ? '' : 's'}`,
      onClick: () => setShowProducts(true)
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      description: "Legal and compliance library",
      icon: <ShieldAlert className="size-5 text-rose-500" />,
      count: `${disclaimers.length} Active`,
      onClick: () => setShowDisclaimers(true)
    }
  ];

  const handleAddIcp = () => {
    if (newIcp.name) {
      setIcps([...icps, { id: Date.now(), ...newIcp }]);
      setNewIcp({ name: "", description: "" });
    }
  };

  const handleDeleteIcp = (id: number) => {
    setIcps(icps.filter(i => i.id !== id));
  };

  const handleAddProduct = () => {
    if (newProduct.name) {
      setProducts([...products, { id: Date.now(), ...newProduct, images: [] }]);
      setNewProduct({ name: "", description: "" });
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleAddDisclaimer = () => {
    if (newDisclaimer.title) {
      setDisclaimers([...disclaimers, { id: Date.now(), ...newDisclaimer }]);
      setNewDisclaimer({ title: "", text: "" });
    }
  };

  const handleDeleteDisclaimer = (id: number) => {
    setDisclaimers(disclaimers.filter(d => d.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden p-2 md:p-3 lg:p-4">
        <div className="flex-1 bg-white rounded-[24px] border border-[#F2F0EB] shadow-sm hover:shadow-md hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">
          
          <div className="max-w-6xl mx-auto w-full px-8 md:px-12 py-12 space-y-12">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-display font-bold text-[#101828] tracking-tight">Brand Setup</h1>
                <p className="text-[#667085] font-medium text-[15px]">
                  Configure your brand identity, customer profiles, and product catalogue.
                </p>
              </div>
            </div>

            {/* Section 1: Context Setup */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-[#101828]">Brand Assets</h2>
                <button className="text-[13px] font-bold text-signal hover:underline">Quick import</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contextItems.map((item) => (
                  <Card key={item.id} onClick={item.onClick} className="border border-[#F2F0EB] shadow-none hover:shadow-md transition-all cursor-pointer group">
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

          </div>
        </div>
      </main>

      {/* Brand Kit Modal */}
      <Dialog open={showBrandKit} onOpenChange={setShowBrandKit}>
        <DialogContent className="rounded-[28px] p-8 max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Brand Kit</DialogTitle>
            <DialogDescription className="sr-only">Configure your brand kit identity and settings.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Brand Name</Label>
              <Input 
                value={brandKitData.name} 
                onChange={(e) => setBrandKitData({...brandKitData, name: e.target.value})}
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Website</Label>
              <Input 
                value={brandKitData.website} 
                onChange={(e) => setBrandKitData({...brandKitData, website: e.target.value})}
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Tone of Voice</Label>
              <Textarea 
                value={brandKitData.tone} 
                onChange={(e) => setBrandKitData({...brandKitData, tone: e.target.value})}
                className="rounded-xl min-h-[100px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Primary Color (Hex)</Label>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl border shrink-0 shadow-sm" style={{ backgroundColor: brandKitData.primaryColor }} />
                  <Input 
                    value={brandKitData.primaryColor} 
                    onChange={(e) => setBrandKitData({...brandKitData, primaryColor: e.target.value})}
                    className="h-12 rounded-xl flex-1 uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Typography</Label>
                <Input 
                  value={brandKitData.font} 
                  onChange={(e) => setBrandKitData({...brandKitData, font: e.target.value})}
                  className="h-12 rounded-xl"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setShowBrandKit(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={() => setShowBrandKit(false)} className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl px-6">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ICPs Modal */}
      <Dialog open={showICPs} onOpenChange={setShowICPs}>
        <DialogContent className="rounded-[28px] p-8 max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Ideal Customer Profiles</DialogTitle>
            <DialogDescription className="sr-only">Manage your ideal customer profiles.</DialogDescription>
          </DialogHeader>
          <div className="space-y-8 py-4">
            <div className="space-y-4 bg-[#F9FAFB] p-6 rounded-2xl border border-[#F2F0EB]">
              <h4 className="font-bold text-[#101828] text-[15px]">Add New ICP</h4>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Profile Name</Label>
                  <Input 
                    placeholder="e.g. Health-conscious commuters"
                    value={newIcp.name} 
                    onChange={(e) => setNewIcp({...newIcp, name: e.target.value})}
                    className="h-10 rounded-xl bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Description</Label>
                  <Textarea 
                    placeholder="Describe their pain points and motivations..."
                    value={newIcp.description} 
                    onChange={(e) => setNewIcp({...newIcp, description: e.target.value})}
                    className="rounded-xl min-h-[80px] bg-white"
                  />
                </div>
                <Button onClick={handleAddIcp} disabled={!newIcp.name} className="w-full bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl">
                  Add Profile
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#101828] text-[15px]">Existing Profiles</h4>
              <div className="space-y-3">
                {icps.map(icp => (
                  <div key={icp.id} className="flex items-start justify-between p-4 bg-white border border-[#F2F0EB] rounded-2xl shadow-sm">
                    <div className="space-y-1 pr-4">
                      <p className="font-bold text-[#101828] text-[14px]">{icp.name}</p>
                      <p className="text-[#667085] text-[13px]">{icp.description}</p>
                    </div>
                    <button onClick={() => handleDeleteIcp(icp.id)} className="p-2 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
                {icps.length === 0 && (
                  <div className="text-center py-6 text-[#667085] text-sm border-2 border-dashed border-[#F2F0EB] rounded-2xl">
                    No ICPs configured yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Products Modal */}
      <Dialog open={showProducts} onOpenChange={setShowProducts}>
        <DialogContent className="rounded-[28px] p-8 max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Product Catalogue</DialogTitle>
            <DialogDescription className="sr-only">Manage your product catalogue and assets.</DialogDescription>
          </DialogHeader>
          <div className="space-y-8 py-4">
            <div className="space-y-4 bg-[#F9FAFB] p-6 rounded-2xl border border-[#F2F0EB]">
              <h4 className="font-bold text-[#101828] text-[15px]">Add New Product</h4>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Product Name</Label>
                  <Input 
                    placeholder="e.g. Morning Blend 12oz"
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="h-10 rounded-xl bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Description / Key Features</Label>
                  <Textarea 
                    placeholder="List the main selling points..."
                    value={newProduct.description} 
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    className="rounded-xl min-h-[80px] bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Product Images</Label>
                  <div 
                    onClick={() => document.getElementById('product-image-upload')?.click()}
                    className="border-2 border-dashed border-[#D0D5DD] rounded-xl p-4 flex flex-col items-center justify-center bg-white gap-2 cursor-pointer hover:bg-[#F9FAFB] hover:border-signal/30 transition-all"
                  >
                     <input type="file" id="product-image-upload" className="hidden" multiple accept="image/*" />
                     <Upload className="size-5 text-[#98A2B3]" />
                     <span className="text-[12px] font-medium text-[#667085]">Upload PNG or JPG</span>
                  </div>
                </div>
                <Button onClick={handleAddProduct} disabled={!newProduct.name} className="w-full bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl mt-2">
                  Add Product
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#101828] text-[15px]">Your Catalogue</h4>
              <div className="space-y-3">
                {products.map(product => (
                  <div key={product.id} className="flex items-start gap-4 p-4 bg-white border border-[#F2F0EB] rounded-2xl shadow-sm">
                    <div className="size-16 rounded-xl bg-[#F9FAFB] border border-[#F2F0EB] flex items-center justify-center shrink-0 text-[#98A2B3]">
                      <Package className="size-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <p className="font-bold text-[#101828] text-[14px]">{product.name}</p>
                        <button onClick={() => handleDeleteProduct(product.id)} className="p-1.5 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <p className="text-[#667085] text-[13px]">{product.description}</p>
                      <div className="flex items-center gap-2 pt-1">
                        <Badge variant="neutral" className="text-[10px]">0 Images</Badge>
                      </div>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <div className="text-center py-6 text-[#667085] text-sm border-2 border-dashed border-[#F2F0EB] rounded-2xl">
                    No products added yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Disclaimers Modal */}
      <Dialog open={showDisclaimers} onOpenChange={setShowDisclaimers}>
        <DialogContent className="rounded-[28px] p-8 max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Disclaimer Library</DialogTitle>
            <DialogDescription className="sr-only">Manage your legal disclaimers.</DialogDescription>
          </DialogHeader>
          <div className="space-y-8 py-4">
            <div className="space-y-4 bg-[#F9FAFB] p-6 rounded-2xl border border-[#F2F0EB]">
              <h4 className="font-bold text-[#101828] text-[15px]">Add New Disclaimer</h4>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Title</Label>
                  <Input 
                    placeholder="e.g. FDA Compliance"
                    value={newDisclaimer.title} 
                    onChange={(e) => setNewDisclaimer({...newDisclaimer, title: e.target.value})}
                    className="h-10 rounded-xl bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-[#667085]">Legal Text</Label>
                  <Textarea 
                    placeholder="Enter the full disclaimer text..."
                    value={newDisclaimer.text} 
                    onChange={(e) => setNewDisclaimer({...newDisclaimer, text: e.target.value})}
                    className="rounded-xl min-h-[80px] bg-white"
                  />
                </div>
                <Button onClick={handleAddDisclaimer} disabled={!newDisclaimer.title} className="w-full bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl mt-2">
                  Save Disclaimer
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#101828] text-[15px]">Active Disclaimers</h4>
              <div className="space-y-3">
                {disclaimers.map(disc => (
                  <div key={disc.id} className="flex items-start justify-between p-4 bg-white border border-[#F2F0EB] rounded-2xl shadow-sm">
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="size-4 text-rose-500" />
                        <p className="font-bold text-[#101828] text-[14px]">{disc.title}</p>
                      </div>
                      <p className="text-[#667085] text-[13px] mt-1">{disc.text}</p>
                    </div>
                    <button onClick={() => handleDeleteDisclaimer(disc.id)} className="p-2 text-[#98A2B3] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
                {disclaimers.length === 0 && (
                  <div className="text-center py-6 text-[#667085] text-sm border-2 border-dashed border-[#F2F0EB] rounded-2xl">
                    No disclaimers added yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
