"use client";
import React from "react";
import s from "./HomePage.module.scss";
import { LinkAnim } from "@/components/LinkAnim/LinkAnim";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import { anim, TitlePresence } from "@/helpers/anim";
import Paragraph from "@/components/Paragraph/Paragraph";

export default function HomePage() {
  return (
    <div className={s.home}>
      <Header />

      <div className={s.title}>
        <div className={s.title_top}>
          {/* <span className="trailers-font">David de</span> */}
          <TitleAnim text="David de" index={0} classes="trailers-font" />
          <div className={s.text}>
            <Paragraph
              text="Le 2 juillet 1501, les responsables de l'Opera del Duomo (le conseil"
              index={2}
            />
          </div>
        </div>
        <div className={s.title_botom}>
          {/* <span className={"trailers-font " + s.title_text}>Michel-Ange.</span> */}
          <TitleAnim
            text="Michel-Ange."
            index={1}
            classes={"trailers-font " + s.title_text}
          />

          <div className={s.text_wrapper}>
            <div className={s.text}>
              <Paragraph
                text="Superviser la construction et l'aménagement"
                index={3}
              />
            </div>
            <motion.div {...anim(TitlePresence)} custom={{ id: 4 * 0.5, duration: 1 }}>
            <LinkAnim
              href="/about"
              text="Haute Renaissance "
              classes={s.link}
            />
            </motion.div>
          </div>
        </div>

        <div className={s.figured_title_wrapper}>
          <motion.p {...anim(TitlePresence)} custom={{ id: 4 * 0.5, duration: 1 }} className={`luxurios-font ${s.figured_title} ${s.figured_title_top}`}>
            Réalisé par
          </motion.p>
          <motion.p {...anim(TitlePresence)} custom={{ id: 5 * 0.5, duration: 1 }} className={`luxurios-font ${s.figured_title}`}>
            Ange 1501 et 1504
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export const TitleAnim = ({ text, index, classes = "" }) => {
  return (
    <div className={classes} aria-label={text}>
      {text.split("").map((word, charIndex) => (
        <motion.span
          // className={s.text}
          key={charIndex}
          {...anim(TitlePresence)}
          custom={{ id: (index + charIndex) * 0.5, duration: 1 }}
          style={{ display: "inline-block" }}
        >
          {word !== " " ? word : <>&nbsp;</>}
        </motion.span>
      ))}
    </div>
  );
};
