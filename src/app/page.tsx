import Navbar      from "@/components/layout/Navbar";
import Footer      from "@/components/layout/Footer";
import Hero        from "@/components/sections/Hero";
import About       from "@/components/sections/About";
import Services    from "@/components/sections/Services";
import Doctors     from "@/components/sections/Doctors";
import Appointment from "@/components/sections/Appointment";
import Blog        from "@/components/sections/Blog";
import FAQ         from "@/components/sections/FAQ";
import Gallery     from "@/components/sections/Gallery";
import Contact     from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Appointment />
        <Blog />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
