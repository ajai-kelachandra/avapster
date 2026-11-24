import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founders } from "@/components/sections/Founders";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Approach } from "@/components/sections/Approach";
import { WhyAvapster } from "@/components/sections/WhyAvapster";
import { Contact } from "@/components/sections/Contact";
import { ScrollMascot } from "@/components/ui/ScrollMascot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080A09] text-[#F5F5F0]">
      {/* 01: Transparent-to-Solid Sticky Navigation */}
      <Navbar />

      {/* Main Experience */}
      <main id="main-content" className="flex-grow">
        {/* 02: Cinematic Hero with Coordinated Five-Element Motion */}
        <Hero />

        {/* 03: Editorial About AVAPSTER */}
        <About />

        {/* 04: The Five Founders Gallery */}
        <Founders />

        {/* 05: Technology Expertise / Capabilities */}
        <Services />

        {/* 06: Selected Client Portfolio & Deliveries */}
        <Portfolio />

        {/* 07: Four-Stage Delivery Approach */}
        <Approach />

        {/* 07: Why AVAPSTER / Collaborative Credo */}
        <WhyAvapster />

        {/* 08: Dramatic Dark Contact Section */}
        <Contact />
      </main>

      {/* 09: Oversized Editorial Footer with Lime-A Watermark */}
      <Footer />

      {/* Interactive 3D Scroll-Based Animated Mascot */}
      <ScrollMascot />
    </div>
  );
}
