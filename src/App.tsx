import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Lab from "./pages/Lab";
import ContentIdeas from "./pages/ContentIdeas";
import Competitors from "./pages/Competitors";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="content-ideas" element={<ContentIdeas />} />
          <Route path="competitors" element={<Competitors />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
