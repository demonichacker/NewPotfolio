import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      
      {/* Subtitle */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Software Developer
      </motion.h2>

      {/* Main Name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-red-500 font-bold uppercase"
      >
        Ilori <br className="sm:hidden md:block" />
        Oluwole
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-gray-300"
      >
        An Energetic Web & Software Developer <br /> Experienced in developing and deploying front-end applications.
      </motion.p>

    </div>
  );
};

export default HeroText;
