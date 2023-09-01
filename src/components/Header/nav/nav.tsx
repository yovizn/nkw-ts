import styles from "./style.module.scss";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavLinks } from "@constants/navbar";
import LinkNav from "./link/Link";
import { menuSlide } from "../animate";
import Curve from "./curve/curve";

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.nav
      className={styles.menu}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.body}>
        <div
          className={styles.nav}
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className={styles.header}>
            <p className="text-sm md:text-md">
              <span className="font-medium text-background">Nakula</span> Kresna
            </p>
          </div>
          <div className="text-2xl md:text-3xl text-background">
            {NavLinks.map((l, idx) => {
              return (
                <React.Fragment key={idx}>
                  <LinkNav
                    data={{ ...l, idx }}
                    isActive={selectedIndicator == l.href}
                    setSelectedIndicator={setSelectedIndicator}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <Curve />
      </div>
    </motion.nav>
  );
}
