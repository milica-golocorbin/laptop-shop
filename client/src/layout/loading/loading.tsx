import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// COMPONENTS
import Footer from "../footer/footer";
// END OF IMPORTS

const LoadingMain = () => {
  return (
    <>
      <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal" />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={Math.random()}
          className="flex-1 w-full h-screen bg-slate-900 tracking-normal leading-normal flex flex-col justify-center items-center py-10 s:py-11 md:py-12 lg:py-14 xl:py-16 2xl:py-20"
        >
          <img src="/images/three-dots.svg" alt="loading dots" />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default LoadingMain;
