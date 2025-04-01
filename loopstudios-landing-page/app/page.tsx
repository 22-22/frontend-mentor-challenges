import Header from "./ui/Header";
import LeaderSection from "./ui/LeaderSection";
import OurCreationsSection from "./ui/creations-section/OurCreationsSection";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <LeaderSection />
      <OurCreationsSection />
      <Footer />
    </div>
  );
}
