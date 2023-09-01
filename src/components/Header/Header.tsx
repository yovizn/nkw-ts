"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import Logo from "@assets/logo/Logo.png";
import Link from "next/link";
import Nav from "./nav/nav";
import gsap from "gsap";
import { NavLinks } from "@constants/navbar";
import { RxCross1 } from "react-icons/rx";
import { Container } from "@components/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

export default function Header() {
  const button = useRef(null);
  const headers = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: headers.current,
        start: "bottom top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
        onLeave: () => {
          gsap.to(button.current, {
            right: "0%",
            duration: 0.5,
            ease: "power4.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            right: "-16%",
            duration: 1,
            ease: "power4.out",
          });
        },
      },
    });

    gsap.to(headers.current, {
      scrollTrigger: {
        trigger: headers.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
        onLeave: () => {
          gsap.to(headers.current, {
            y: "-60%",
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(headers.current, {
            y: "0%",
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });

    let handler = (e: { target: any }) => {
      if (!button.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container className="flex items-center justify-between w-full">
        <div ref={headers} className="flex items-center justify-between w-full">
          <div className={styles.logo}>
            <div className={styles.image}>
              <Image
                src={Logo}
                alt="Logo Nakula Kresna"
                fill
                priority
                sizes="35px"
                className="object-cover"
              />
            </div>
            <div className={styles.name}>
              <p className={styles.powered}>Powered</p>
              <p className={styles.by}>by Nakula</p>
              <p className={styles.kresna}>Kresna</p>
            </div>
          </div>

          <nav className={styles.nav}>
            <ul className="flex">
              {NavLinks.map((l, idx) => {
                return (
                  <li key={idx} className={styles.el}>
                    <Link href={l.href} className={styles.link}>
                      <p>{l.title}</p>
                      <span className={styles.indicator}></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>

      {/* Hamburger Button */}
      <div ref={button} className={styles.buttonContainer}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          >
            <RxCross1 />
          </div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </header>
  );
}
