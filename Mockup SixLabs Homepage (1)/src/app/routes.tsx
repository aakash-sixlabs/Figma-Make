import { createBrowserRouter } from "react-router";
import Homepage from "./components/Homepage";
import GenerationDetail from "./components/GenerationDetail";
import CreateFlow from "./components/CreateFlow";
import MyGenerations from "./components/MyGenerations";
import ContextSkills from "./components/ContextSkills";
import Integrations from "./components/Integrations";

const NotFound = () => (
  <div className="flex items-center justify-center h-screen bg-surface">
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-display font-bold text-ink">Page Not Found</h1>
      <a href="/" className="text-signal font-semibold">Back to Home</a>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/generations/:id",
    Component: GenerationDetail,
  },
  {
    path: "/create",
    Component: CreateFlow,
  },
  {
    path: "/generations",
    Component: MyGenerations,
  },
  {
    path: "/context",
    Component: ContextSkills,
  },
  {
    path: "/integrations",
    Component: Integrations,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
