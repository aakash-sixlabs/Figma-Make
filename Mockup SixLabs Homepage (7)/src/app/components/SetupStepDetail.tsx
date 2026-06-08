import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./design-system";
import { SetupStep } from "./OnboardingChecklist";
import { Edit3, CheckCircle, Package, ShieldAlert } from "lucide-react";
import { cn } from "./ui/utils";

type SetupStepDetailProps = {
  step: SetupStep;
  onClose: () => void;
  onConfirm: () => void;
};

export function SetupStepDetail({ step, onClose, onConfirm }: SetupStepDetailProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsEditing(false);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-0 max-w-2xl border-[#F2F0EB] max-h-[90vh] overflow-hidden">
        <div className="flex flex-col max-h-[90vh]">
          {/* Header */}
          <DialogHeader className="p-6 sm:p-8 pb-4 border-b border-[#F2F0EB]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-3 rounded-xl bg-[#F9FAFB] border border-[#F2F0EB]",
                  step.completed && "bg-[#32D583]/10 border-[#32D583]/20"
                )}>
                  <step.icon className={cn("size-6", step.iconColor)} />
                </div>
                <div>
                  <DialogTitle className="text-xl sm:text-2xl font-display font-bold text-[#101828]">
                    {step.title}
                  </DialogTitle>
                  <DialogDescription className="text-[14px] sm:text-[15px] text-[#667085] mt-1">
                    {step.description}
                  </DialogDescription>
                </div>
              </div>
              {step.completed && (
                <Badge variant="success" className="shrink-0">
                  <CheckCircle className="size-3 mr-1" />
                  Confirmed
                </Badge>
              )}
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {step.id === "brand-kit" && <BrandKitContent isEditing={isEditing} />}
            {step.id === "icps" && <ICPsContent isEditing={isEditing} />}
            {step.id === "competitors" && <CompetitorsContent isEditing={isEditing} />}
            {step.id === "products" && <ProductsContent isEditing={isEditing} />}
            {step.id === "disclaimers" && <DisclaimersContent isEditing={isEditing} />}
            {step.id === "integrations" && <IntegrationsContent isEditing={isEditing} />}
          </div>

          {/* Footer */}
          <DialogFooter className="p-6 sm:p-8 pt-4 border-t border-[#F2F0EB] flex flex-col sm:flex-row gap-3">
            {!step.completed ? (
              <>
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold"
                >
                  Cancel
                </Button>
                {isEditing ? (
                  <Button
                    onClick={() => setIsEditing(false)}
                    className="bg-signal text-white hover:bg-signal/90 rounded-xl font-bold shadow-lg"
                  >
                    Save Changes
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                      className="rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold gap-2"
                    >
                      <Edit3 className="size-4" />
                      Edit
                    </Button>
                    <Button
                      onClick={handleConfirm}
                      className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl font-bold shadow-lg"
                    >
                      Confirm & Continue
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                {isEditing ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      className="bg-signal text-white hover:bg-signal/90 rounded-xl font-bold shadow-lg"
                    >
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                      className="rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold gap-2"
                    >
                      <Edit3 className="size-4" />
                      Edit
                    </Button>
                    <Button
                      onClick={onClose}
                      className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl font-bold"
                    >
                      Close
                    </Button>
                  </>
                )}
              </>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Individual content components for each step

function BrandKitContent({ isEditing }: { isEditing: boolean }) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Tone of Voice</Label>
        {isEditing ? (
          <Textarea
            defaultValue="Casual, friendly, energetic"
            className="rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white min-h-[80px]"
          />
        ) : (
          <div className="p-4 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] text-[14px] text-[#101828]">
            Casual, friendly, energetic
          </div>
        )}
      </div>

      <div className="space-y-3">
        <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Primary Color</Label>
        {isEditing ? (
          <div className="flex items-center gap-3">
            <Input
              type="color"
              defaultValue="#2563EB"
              className="w-20 h-12 rounded-xl border-[#F2F0EB]"
            />
            <Input
              defaultValue="#2563EB"
              className="flex-1 h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white"
            />
          </div>
        ) : (
          <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB]">
            <div className="size-8 rounded-lg" style={{ backgroundColor: "#2563EB" }} />
            <span className="text-[14px] font-mono text-[#101828]">#2563EB</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <Label className="text-[12px] font-bold uppercase tracking-widest text-[#667085]">Typography</Label>
        {isEditing ? (
          <Input
            defaultValue="Inter"
            className="h-12 rounded-xl border-[#F2F0EB] bg-[#F9FAFB] focus:bg-white"
          />
        ) : (
          <div className="p-4 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] text-[14px] font-display text-[#101828]">
            Inter
          </div>
        )}
      </div>
    </div>
  );
}

function ICPsContent({ isEditing }: { isEditing: boolean }) {
  const icps = [
    { name: "Health-conscious commuters", description: "Professionals who need a quick energy boost on the go." },
    { name: "Remote workers", description: "People working from home looking for premium café quality." }
  ];

  return (
    <div className="space-y-4">
      {icps.map((icp, idx) => (
        <div key={idx} className="p-5 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] space-y-3">
          {isEditing ? (
            <>
              <Input
                defaultValue={icp.name}
                className="h-11 rounded-xl border-[#F2F0EB] bg-white font-bold"
              />
              <Textarea
                defaultValue={icp.description}
                className="rounded-xl border-[#F2F0EB] bg-white min-h-[60px]"
              />
            </>
          ) : (
            <>
              <h4 className="font-bold text-[15px] text-[#101828]">{icp.name}</h4>
              <p className="text-[13px] text-[#667085] leading-relaxed">{icp.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function CompetitorsContent({ isEditing }: { isEditing: boolean }) {
  const competitors = [
    { name: "Blue Bottle Coffee", positioning: "Premium craft coffee with transparency focus" },
    { name: "Stumptown Coffee", positioning: "Direct-trade coffee with sustainability emphasis" }
  ];

  return (
    <div className="space-y-4">
      {competitors.map((competitor, idx) => (
        <div key={idx} className="p-5 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] space-y-3">
          {isEditing ? (
            <>
              <Input
                defaultValue={competitor.name}
                className="h-11 rounded-xl border-[#F2F0EB] bg-white font-bold"
              />
              <Textarea
                defaultValue={competitor.positioning}
                className="rounded-xl border-[#F2F0EB] bg-white min-h-[60px]"
              />
            </>
          ) : (
            <>
              <h4 className="font-bold text-[15px] text-[#101828]">{competitor.name}</h4>
              <p className="text-[13px] text-[#667085] leading-relaxed">{competitor.positioning}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function ProductsContent({ isEditing }: { isEditing: boolean }) {
  const products = [
    { name: "Morning Blend", description: "Our signature light roast with citrus notes." },
    { name: "Midnight Roast", description: "Dark, bold, and smoky finish." }
  ];

  return (
    <div className="space-y-4">
      {products.map((product, idx) => (
        <div key={idx} className="p-5 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-white rounded-xl border border-[#F2F0EB] flex items-center justify-center">
              <Package className="size-5 text-amber-500" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <Input
                  defaultValue={product.name}
                  className="h-11 rounded-xl border-[#F2F0EB] bg-white font-bold"
                />
              ) : (
                <h4 className="font-bold text-[15px] text-[#101828]">{product.name}</h4>
              )}
            </div>
          </div>
          {isEditing ? (
            <Textarea
              defaultValue={product.description}
              className="rounded-xl border-[#F2F0EB] bg-white min-h-[60px]"
            />
          ) : (
            <p className="text-[13px] text-[#667085] leading-relaxed">{product.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function DisclaimersContent({ isEditing }: { isEditing: boolean }) {
  const disclaimers = [
    { title: "Health Warning", text: "Consult a doctor before consuming excessive caffeine." },
    { title: "Shipping Policy", text: "Standard delivery takes 3-5 business days within the US." }
  ];

  return (
    <div className="space-y-4">
      {disclaimers.map((disclaimer, idx) => (
        <div key={idx} className="p-5 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB] space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-white rounded-xl border border-[#F2F0EB] flex items-center justify-center">
              <ShieldAlert className="size-5 text-rose-500" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <Input
                  defaultValue={disclaimer.title}
                  className="h-11 rounded-xl border-[#F2F0EB] bg-white font-bold"
                />
              ) : (
                <h4 className="font-bold text-[15px] text-[#101828]">{disclaimer.title}</h4>
              )}
            </div>
          </div>
          {isEditing ? (
            <Textarea
              defaultValue={disclaimer.text}
              className="rounded-xl border-[#F2F0EB] bg-white min-h-[60px]"
            />
          ) : (
            <p className="text-[13px] text-[#667085] leading-relaxed">{disclaimer.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function IntegrationsContent({ isEditing }: { isEditing: boolean }) {
  const integrations = [
    { name: "Meta Ads", status: "Connected", description: "Facebook & Instagram Business Manager" },
    { name: "Slack", status: "Connected", description: "Team notifications and updates" }
  ];

  return (
    <div className="space-y-4">
      {integrations.map((integration, idx) => (
        <div key={idx} className="p-5 bg-[#F9FAFB] rounded-xl border border-[#F2F0EB]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[15px] text-[#101828]">{integration.name}</h4>
              <p className="text-[13px] text-[#667085] mt-1">{integration.description}</p>
            </div>
            <Badge variant="success" className="shrink-0">
              <CheckCircle className="size-3 mr-1" />
              {integration.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
