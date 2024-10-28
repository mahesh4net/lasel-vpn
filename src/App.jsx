import Nav from "./components/navbar";
import Hero from "./components/hero-section";
import Stats from "./components/stats";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Map from "./components/map";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Mobilenav from "./components/mobilenav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Mobilenav></Mobilenav>
      <Hero></Hero>
      <Stats></Stats>
      <Features></Features>
      <Pricing></Pricing>
      <Map></Map>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}

export default App;
