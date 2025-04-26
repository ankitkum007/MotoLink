import React from "react";
import Header from './Header.jsx'
import Footer from "./Footer.jsx";

function AboutMotoLink() {
  return (
    <div>
        <div className="max-w-7xl mx-auto relative">
            <Header/>
        </div>
    <section className="bg-gray-100 p-6 md:p-10 lg:p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-4">
          About MotoLink
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Welcome to MotoLink, your one-stop destination for hassle-free vehicle exploration and financial tools. Designed for automotive enthusiasts and savvy buyers, MotoLink revolutionizes how you search, compare, and plan for your dream ride.
        </p>
        <div className="mt-6 text-left">
          <ul className="list-disc list-inside text-gray-600 md:text-lg">
            <li>
              <strong>MotoLink Search:</strong> Effortlessly explore a wide range of vehicles with smart filters and detailed insights.
            </li>
            <li>
              <strong>EMI Calculator:</strong> Take control of your finances with our easy-to-use calculator, ensuring transparency and informed decision-making.
            </li>
            <li>
              <strong>Multiple Cars Available:</strong> Choose from a diverse selection of cars tailored to match every lifestyle and budget.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-lg text-gray-600 md:text-xl">
          At MotoLink, we aim to empower you with tools and resources that make car buying smarter and more personalized. Our platform blends innovation and accessibility, ensuring a seamless experience for everyone—from first-time buyers to seasoned motorists. Discover MotoLink and take the first step toward a new adventure.
        </p>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default AboutMotoLink;
