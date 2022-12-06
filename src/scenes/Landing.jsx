import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import animation01 from "../assets/sara_animation01.json";
import Lottie from "lottie-react";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute
          "
          >
            <Lottie
              animationData={animation01}
              loop={true}
              className="hover:filter hover:saturate-150  transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <div>
            {" "}
            <Lottie
              animationData={animation01}
              loop={true}
              className="hover:filter hover:saturate-150  transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px]"
            />
          </div>
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ durantion: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-raleway z-10 text-center md:text-start ">
            {" "}
            <span style={{ textTransform: "uppercase" }}>
              Hello, my name is{" "}
              <span
                style={{
                  fontWeight: "900",
                }}
              >
                SARA SILVA
              </span>
              . I’m a{" "}
              <span className="flex-row bg-yellow text-purple justify-center text-center">
                Front{" "}
              </span>
              <span
                style={{
                  backgroundColor: "#edfe7b",
                  color: "#4b2f63",
                }}
              >
                {" "}
                End
              </span>
              <span
                style={{
                  backgroundColor: "#edfe7b",
                  color: "#4b2f63",
                }}
              >
                {" "}
                Developer{" "}
              </span>
              / Motion Designer current living in Enschede, NL.
            </span>
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, durantion: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
