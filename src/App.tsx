import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Collections from "./pages/Collections";
import Spaces from "./pages/Spaces";
import Materials from "./pages/Materials";
import CustomDesign from "./pages/CustomDesign";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import QuoteBuilder from "./pages/QuoteBuilder";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="quote/:productId" element={<QuoteBuilder />} />
          <Route path="collections" element={<Collections />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="materials" element={<Materials />} />
          <Route path="custom-design" element={<CustomDesign />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}
