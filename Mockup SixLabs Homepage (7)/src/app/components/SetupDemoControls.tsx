import { useState } from "react";
import { Button } from "./ui/button";
import { Settings, X } from "lucide-react";
import { cn } from "./ui/utils";
import { Badge } from "./design-system";

export function SetupDemoControls() {
  const [isOpen, setIsOpen] = useState(false);

  const resetSetup = () => {
    localStorage.removeItem("sixlabs_setup_complete");
    window.location.reload();
  };

  const completeSetup = () => {
    localStorage.setItem("sixlabs_setup_complete", "true");
    window.location.reload();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[60] size-12 bg-purple-600 text-white rounded-full shadow-2xl hover:bg-purple-700 transition-all flex items-center justify-center"
      >
        {isOpen ? <X className="size-5" /> : <Settings className="size-5" />}
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[60] bg-white rounded-2xl border border-[#F2F0EB] shadow-2xl p-6 w-80">
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-bold text-[15px] text-[#101828] mb-1">
                Demo Controls
              </h3>
              <p className="text-[12px] text-[#667085]">
                Toggle setup states for testing
              </p>
            </div>

            <div className="space-y-2">
              <Button
                onClick={resetSetup}
                variant="outline"
                className="w-full rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold justify-start text-[13px]"
              >
                <Badge variant="neutral" className="mr-2">1</Badge>
                Show Onboarding (No Setup)
              </Button>

              <Button
                onClick={completeSetup}
                variant="outline"
                className="w-full rounded-xl border-[#F2F0EB] hover:bg-[#F9FAFB] font-bold justify-start text-[13px]"
              >
                <Badge variant="success" className="mr-2">2</Badge>
                Complete Setup (Show App)
              </Button>

              <div className="pt-2 border-t border-[#F2F0EB]">
                <p className="text-[11px] text-[#667085] italic">
                  Note: Individual step states are managed within the onboarding checklist itself
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
