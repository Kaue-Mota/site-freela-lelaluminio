import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "@/components/ui/sonner";

const App = () => (
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);

export default App;
