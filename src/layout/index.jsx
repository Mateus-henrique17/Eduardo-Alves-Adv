import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
// import styles from "./layout.module.css";

export const Layout = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={shouldReduceMotion ? false : { opacity: 0.96 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0.96 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.12,
            ease: "linear",
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
