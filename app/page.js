import CustomHead from "./components/head";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Carousel from "./components/carousel-main";
import ProductGrid from "./components/product-grid";

export default function Home() {
  return (
    <div>
      <CustomHead />
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Nav />
        <Carousel />
        <ProductGrid />
        <Footer />
      </div>
    </div>
  );
}
