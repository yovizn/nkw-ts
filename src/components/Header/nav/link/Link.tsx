import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, slideIn } from "@components/Header/animate";

interface LinkProps {
  data: {
    href: string;
    title: string;
    idx: number;
  };

  isActive: boolean;
  setSelectedIndicator: (pathname: string) => void;
}

export default function LinkNav({
  data,
  isActive,
  setSelectedIndicator,
}: LinkProps) {
  const { href, title, idx } = data;
  return (
    <motion.div
      key={idx}
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={idx}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href} className="w-full flex ">
        {title}
        <motion.span
          variants={slideIn}
          animate={isActive ? "open" : "closed"}
          className={styles.indicator}
        ></motion.span>
      </Link>
    </motion.div>
  );
}
