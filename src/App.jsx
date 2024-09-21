import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Slider from "./components/Slider";
import "./index.css";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Diary from "./components/Diary";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [onfetching, setOnFecthing] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch(import.meta.env.VITE_KEY_API);
    const data = await response.json();
    console.log(data);

    setProducts(data);
  };
  useEffect(() => {
    setOnFecthing(true);
  }, []);
  useEffect(() => {
    if (onfetching) fetchProducts();
  }, [onfetching]);

  return (
    <>
      <Header />
      <Slider />
      <Products
        title={"Sản phẩm mới nhất"}
        backgroundClass="bg-item1"
        data={products.slice(0, 5)}
      />
      <Banner title={"Đồ chạy bộ"} backgroundClass="bg-banner" />
      <Products
        title={"Mặc hằng ngày"}
        backgroundClass="bg-item1"
        data={products.slice(0, 5)}
      />
      <Banner title={"Mặc hằng ngày"} backgroundClass="bg-banner2" />
      <Products
        title={"Sản phẩm đồ lót nam"}
        backgroundClass="bg-item1"
        data={products.slice(0, 5)}
      />
      <Banner title={"Quần lót"} backgroundClass="bg-banner3" />
      <Products
        title={"Sản phẩm đồ chạy bộ"}
        backgroundClass="bg-item1"
        data={products.slice(0, 5)}
      />
      <Collection backgroundClass="bg-banner4" />
      <Diary />
      <Footer />
    </>
  );
}

export default App;
