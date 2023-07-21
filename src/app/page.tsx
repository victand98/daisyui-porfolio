import { Footer, Hero, Navbar, Projects, Sidebar } from "@/components";

export default function Home() {
  return (
    <div className="drawer bg-base-100 text-base-content">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <Sidebar />
      </div>
    </div>
  );
}
