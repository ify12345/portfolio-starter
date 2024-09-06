import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import { Link } from "react-scroll";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="min-h-[100vh] lg:min-h-[100vh]" id="home">
      <div className="flex justify-center my-32">
        <div className="flex flex-col  gap-y-10 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] leading-[0.8] lg:text-[50px]"
            >
              <TypeAnimation
                sequence={[
                  " FRONT-END DEVELOPER",
                  2000,
                  "REACT-NATIVE DEVELOPER",
                  2000,
                  " REACT DEVELOPER",
                  2000,
                ]}
                speed={10}
                wrapper="span"
                repeat={Infinity}
                className="text-pink-500 font-extrabold"
              />
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[40px] font-secondary
             leading-[1]"
            ></motion.div>
            <motion.p
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-3xl  mx-auto lg:mx-0"
            >
              I build accessible, inclusive products and digital experiences for
              the web. And code beautifully simple things,Your friendly
              neighborhood frontend developer and JavaScript engineer{" "}
              <Link to="contact"> CONTACT ME</Link>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="about"
                className="btn btn-lg flex items-center gap-x-6 cursor-pointer"
              >
                See More About me{" "}
                <div
                  className={`icon-container ${isHovered ? "hovered" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <AiOutlineArrowRight size={22} />
                </div>
              </Link>
              <a href={""} className="text-gradient btn-link">
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/ifeanyi-nwakodo-ba689a255/">
                <FaLinkedin />
              </a>

              <a href="https://github.com/ify12345">
                <FaGithub />
              </a>

              <a href="https://twitter.com/ifyy_?s=21&t=Uz0y8R2ZfwOA4FIpSuRanA">
                <FaTwitter />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex lg:max-w-[482px]"
          >
            {/* <img src={} alt="img"></img> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
