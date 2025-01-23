import { motion } from "framer-motion";

//variants
const thinkTypeAnimation = {
  initial: { top: " 0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index: number) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const ThinkType = () => {
  return (
    <>
      {/* render 6 motion divs, each rep  a step of stairs */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={thinkTypeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default ThinkType;
