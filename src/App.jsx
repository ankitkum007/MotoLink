import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Category from "./component/Category";
import MostSearch from "./component/MostSearch";
import Info from "./component/Info";
import Footer from "./component/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto relative" >
        <Header />
        <Hero />
        <Category />
        <MostSearch />
        <Info />
        <Footer/>
      </div>
    </>
  );
}

export default App;
