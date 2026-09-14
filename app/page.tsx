import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextLoop from "@/components/TextLoop";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SocialFloat from "@/components/SocialFloat";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#e9ecef] min-h-[100dvh] text-black relative overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="relative z-20">
        <TextLoop
          text="Portfolio"
          shape="line"
          speed={45}
          direction="forward"
          separator="✦"
          fontSize={26}
          fontWeight={800}
          letterSpacing={3}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#000000"
          ribbonWidth={56}
          pauseOnHover={false}
        />
      </div>

      <About />
      <Experience />
      <Projects />
      <SocialFloat />
      <Contact />
      <Footer />
    </main>
  );
}
