import TopMenu from "./components/ui/TopMenu";
import PageTop from "./components/pages/PageTop.tsx";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <body className="bg-brand-bg">
      <TopMenu />
      <Routes>
        <Route index element={<PageTop />} />
      </Routes>
    </body>
  );
}
