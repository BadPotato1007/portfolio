import React from "react";
//pages
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bg from "./components/Bg";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Bg/>
      <Navbar/>
      <Hero/>
      <About/>
      
      
    </div>
  );
}
