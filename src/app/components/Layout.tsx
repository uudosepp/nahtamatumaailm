import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToHash } from "./ScrollToHash";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#0a0e1a]">
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}