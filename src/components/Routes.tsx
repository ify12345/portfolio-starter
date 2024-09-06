import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import AnimatedCursor from "react-animated-cursor";
import Contact from "./Contact";

export default function Routes() {
  return (
    <div>
       <AnimatedCursor
        innerSize={4}
        outerSize={70}
        outerAlpha={0.2}
        innerScale={3}
        outerScale={0.2}
        outerStyle={{
          border: "3px solid white",
        }}
        innerStyle={{
          backgroundColor: "pink",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header />
      <Banner />
      <Nav/>
      <About />
      <Work />
      <Contact />
    </div>
  );
}
