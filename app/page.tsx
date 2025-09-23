import AboutMe from "@/components/about-me";
import Container from "@/components/shared/container";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portafolio from "@/components/portafolio";
import Testimonials from "@/components/testimonials";
import Contacto from "@/components/contact";
import Footer from "@/components/footer";
import Certifiquey from "@/components/Certificados";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Portafolio/>
      <Certifiquey/>
      {/* <Testimonials/> */}
      <Contacto/>
      <Footer/>
    </main>
  );
}
