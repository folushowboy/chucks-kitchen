import Additions from "../components/adittions/Additions";
import Dish from "../components/dishes/Dish";
import Hero from "../components/hero/Hero";
import Menu from "../components/menu/Menu";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Menu/>
      <Dish/>
      <Additions/>
      <Footer/>
    </div>
  );
}

export default Home;
