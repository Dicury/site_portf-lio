import Banner from "./components/Banner";
import PrincipaisProjetos from "./components/Principais Projetos";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTopo from "./components/ScrollTopo";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollTopo />
      <Banner />
      <PrincipaisProjetos />
      <Sobre />
      <Footer />
    </>
  );
}
