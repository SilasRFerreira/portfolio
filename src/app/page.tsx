import Header from "@/components/Header";
import Greetings from "./HomeSections/Greetings";
import Tecnologies from "./HomeSections/Tecnologies";
import Projects from "./HomeSections/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Greetings/>
      <Tecnologies/>
      <Projects/>
      <Footer/>
    </main>
  );
}
