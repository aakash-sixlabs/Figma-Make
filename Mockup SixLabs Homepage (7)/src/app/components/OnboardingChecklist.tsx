import { useState } from "react";
import { Users01, CpuChip01, Zap } from "@untitled-ui/icons-react";
import { Palette, Package, ShieldAlert, CheckCircle, Circle, LogOut } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./design-system";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { SetupStepDetail } from "./SetupStepDetail";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export type SetupStep = {
  id: string;
  title: string;
  description: string;
  icon: any;
  iconColor: string;
  required: boolean;
  completed: boolean;
  status: string;
};

type OnboardingChecklistProps = {
  onComplete?: () => void;
};

export function OnboardingChecklist({ onComplete }: OnboardingChecklistProps) {
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const [steps, setSteps] = useState<SetupStep[]>([
    {
      id: "brand-kit",
      title: "Brand Kit",
      description: "Tone of voice, Colors, Typography",
      icon: Palette,
      iconColor: "text-indigo-500",
      required: true,
      completed: false,
      status: "Pending"
    },
    {
      id: "icps",
      title: "ICPs",
      description: "Manage Ideal Customer Profiles",
      icon: Users01,
      iconColor: "text-signal",
      required: true,
      completed: false,
      status: "Pending"
    },
    {
      id: "competitors",
      title: "Competitors",
      description: "Track competing brands and positioning",
      icon: Zap,
      iconColor: "text-purple-500",
      required: true,
      completed: false,
      status: "Pending"
    },
    {
      id: "products",
      title: "Products",
      description: "Manage product catalogue",
      icon: Package,
      iconColor: "text-amber-500",
      required: false,
      completed: false,
      status: "Pending"
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      description: "Legal and compliance library",
      icon: ShieldAlert,
      iconColor: "text-rose-500",
      required: false,
      completed: false,
      status: "Pending"
    },
    {
      id: "integrations",
      title: "Integrations",
      description: "Connect to Meta, Slack, and more",
      icon: CpuChip01,
      iconColor: "text-blue-500",
      required: false,
      completed: false,
      status: "Pending"
    }
  ]);

  const requiredSteps = steps.filter(s => s.required);
  const completedRequired = requiredSteps.filter(s => s.completed).length;
  const totalRequired = requiredSteps.length;
  const allRequiredComplete = completedRequired === totalRequired;

  const handleStepConfirm = (stepId: string) => {
    setSteps(prev => prev.map(step => {
      if (step.id === stepId) {
        const newCompleted = !step.completed;
        return {
          ...step,
          completed: newCompleted,
          status: newCompleted ? getCompletedStatus(stepId) : "Pending"
        };
      }
      return step;
    }));
    setSelectedStep(null);
  };

  const getCompletedStatus = (stepId: string) => {
    switch(stepId) {
      case "brand-kit": return "Configured";
      case "icps": return "2 Profiles";
      case "competitors": return "2 Brands";
      case "products": return "2 Items";
      case "disclaimers": return "2 Active";
      case "integrations": return "Connected";
      default: return "Complete";
    }
  };

  const handleContinue = () => {
    if (allRequiredComplete) {
      toast.success("Setup complete! Welcome to SixLabs.");
      if (onComplete) {
        onComplete();
      }
      navigate("/app");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("sixlabs_session");
    toast.info("Logged out successfully");
    navigate("/loginmvp");
  };

  const selectedStepData = steps.find(s => s.id === selectedStep);

  return (
    <>
      <div className="flex min-h-screen bg-[#FCFBF9] font-body text-body-text overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden pt-[60px] lg:pt-0 lg:p-2 xl:p-3 2xl:p-4">
          <div className="flex-1 bg-white lg:rounded-[20px] xl:rounded-[24px] lg:border border-[#F2F0EB] lg:shadow-sm lg:hover:shadow-md lg:hover:border-[#D0D5DD] transition-all duration-300 overflow-y-auto custom-scrollbar relative">
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 space-y-8 sm:space-y-10 lg:space-y-12">

            {/* Welcome Section */}
            {/* PLACEHOLDER: Future welcome animation / illustration goes here */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#101828] tracking-tight">
                Complete Your Brand Setup
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#667085] max-w-3xl leading-relaxed">
                Before you can start creating performance-driven ad creatives, we need to learn about your brand. Complete the required steps below to get started.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl border border-[#F2F0EB] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-[#101828]">Setup Progress</h3>
                  <p className="text-[14px] text-[#667085] mt-1">
                    {completedRequired} of {totalRequired} required steps complete
                  </p>
                </div>
                <Badge variant={allRequiredComplete ? "success" : "neutral"} className="text-[11px] font-bold uppercase">
                  {allRequiredComplete ? "Ready to Continue" : "In Progress"}
                </Badge>
              </div>

              <div className="relative h-3 bg-[#F2F0EB] rounded-full overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 rounded-full transition-all duration-500",
                    allRequiredComplete ? "bg-[#32D583]" : "bg-signal"
                  )}
                  style={{ width: `${(completedRequired / totalRequired) * 100}%` }}
                />
              </div>
            </div>

            {/* Required Steps Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#101828]">Required Steps</h2>
                  <Badge variant="neutral" className="text-[10px] font-bold uppercase">
                    {completedRequired} of {totalRequired} Complete
                  </Badge>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#667085] leading-relaxed">
                  These steps are essential to generate brand-aligned creatives with our AI engine.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {steps.filter(s => s.required).map((step) => (
                  <Card
                    key={step.id}
                    onClick={() => setSelectedStep(step.id)}
                    className={cn(
                      "border shadow-none hover:shadow-md hover:border-[#D0D5DD] transition-all cursor-pointer group bg-white relative",
                      step.completed ? "border-[#32D583]/30 bg-[#32D583]/5" : "border-[#F2F0EB]"
                    )}
                  >
                    <div className="absolute top-3 right-3 bg-signal text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      Required
                    </div>

                    <CardContent className="p-5 sm:p-6 flex flex-col h-full space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={cn(
                          "p-2.5 bg-[#F9FAFB] rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-[#F2F0EB]",
                          step.completed && "bg-[#32D583]/10"
                        )}>
                          <step.icon className={cn("size-5", step.iconColor)} />
                        </div>
                        {step.completed ? (
                          <CheckCircle className="size-5 text-[#32D583]" />
                        ) : (
                          <Circle className="size-5 text-[#D0D5DD]" />
                        )}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <h3 className="font-bold text-[#101828] text-[15px]">{step.title}</h3>
                        <p className="text-[13px] text-[#667085] font-medium leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <Badge
                        variant={step.completed ? "success" : "neutral"}
                        className="text-[10px] font-bold uppercase w-fit"
                      >
                        {step.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Optional Steps Section */}
            <div className="space-y-6 pt-8 border-t border-[#F2F0EB]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#101828]">Optional Steps</h2>
                  <Badge variant="neutral" className="text-[10px] font-bold uppercase">
                    Enhance Your Setup
                  </Badge>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#667085] leading-relaxed">
                  Complete these to unlock advanced features like product-specific campaigns and integration syncing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {steps.filter(s => !s.required).map((step) => (
                  <Card
                    key={step.id}
                    onClick={() => setSelectedStep(step.id)}
                    className={cn(
                      "border shadow-none hover:shadow-md hover:border-[#D0D5DD] transition-all cursor-pointer group bg-white relative",
                      step.completed ? "border-[#32D583]/30 bg-[#32D583]/5" : "border-[#F2F0EB]"
                    )}
                  >
                    <CardContent className="p-5 sm:p-6 flex flex-col h-full space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={cn(
                          "p-2.5 bg-[#F9FAFB] rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-[#F2F0EB]",
                          step.completed && "bg-[#32D583]/10"
                        )}>
                          <step.icon className={cn("size-5", step.iconColor)} />
                        </div>
                        {step.completed ? (
                          <CheckCircle className="size-5 text-[#32D583]" />
                        ) : (
                          <Circle className="size-5 text-[#D0D5DD]" />
                        )}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <h3 className="font-bold text-[#101828] text-[15px]">{step.title}</h3>
                        <p className="text-[13px] text-[#667085] font-medium leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <Badge
                        variant={step.completed ? "success" : "neutral"}
                        className="text-[10px] font-bold uppercase w-fit"
                      >
                        {step.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            {allRequiredComplete && (
              <div className="bg-white rounded-2xl border border-[#F2F0EB] p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-display font-bold text-[#101828]">You're all set!</h3>
                    <p className="text-[14px] text-[#667085] mt-1">
                      Ready to start creating high-performing ad creatives.
                    </p>
                  </div>
                  <Button
                    onClick={handleContinue}
                    className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-xl h-12 px-8 font-bold shadow-lg"
                  >
                    Continue to Dashboard
                  </Button>
                </div>
              </div>
            )}

            {/* PLACEHOLDER: Future completion celebration animation goes here */}
            </div>
          </div>
        </main>
      </div>

      {/* Step Detail Modal */}
      {selectedStep && selectedStepData && (
        <SetupStepDetail
          step={selectedStepData}
          onClose={() => setSelectedStep(null)}
          onConfirm={() => handleStepConfirm(selectedStep)}
        />
      )}
    </>
  );
}
