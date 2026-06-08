import { createBrowserRouter, Navigate } from "react-router";
import Homepage from "./components/Homepage";
import GenerationDetail from "./components/GenerationDetail";
import CreateFlow from "./components/CreateFlow";
import MyGenerations from "./components/MyGenerations";
import BrandSetup from "./components/BrandSetup";
import Integrations from "./components/Integrations";
import LoginMVP from "./components/LoginMVP";
import { OnboardingChecklist } from "./components/OnboardingChecklist";

const NotFound = () => (
  <div className="flex items-center justify-center h-screen bg-surface">
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-display font-bold text-ink">Page Not Found</h1>
      <a href="/app" className="text-signal font-semibold">Back to Dashboard</a>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/loginmvp" replace />,
  },
  {
    path: "/loginmvp",
    Component: LoginMVP,
  },
  {
    path: "/onboarding",
    element: <OnboardingChecklist />,
  },
  {
    path: "/app",
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "generations/:id",
        Component: GenerationDetail,
      },
      {
        path: "create",
        Component: CreateFlow,
      },
      {
        path: "generations",
        Component: MyGenerations,
      },
      {
        path: "context",
        Component: BrandSetup,
      },
      {
        path: "integrations",
        Component: Integrations,
      },
    ]
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
