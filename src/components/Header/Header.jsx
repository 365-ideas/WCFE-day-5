"use client";

import React from "react";
import s from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { anim, LinesAnim, LogoAnim, TitlePresence } from "@/helpers/anim";
import { motion } from "framer-motion";

export default function Header() {
  const smallTopText = "small-text bold uppercase";

  return (
    <div className={s.header}>
      <motion.span className={`${s.line} ${s.line_top}`} {...anim(LinesAnim)}/>
      <motion.span className={`${s.line} ${s.line_bottom}`} {...anim(LinesAnim)}/>
      <Logo className={s.logo} {...anim(LogoAnim)} />
      <div className={`${s.text_column} ${s.text_column_1}`}>
        <motion.p
          {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }}
          className={smallTopText}
        >
          no generally
        </motion.p>
        <motion.p {...anim(TitlePresence)} custom={{ id: 2, duration: 1 }} className={smallTopText}>of what</motion.p>
      </div>
      <div className={`${s.text_column} ${s.text_column_2}`}>
        <div className={s.text_wrapper}>
          <motion.p {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }} className={smallTopText}>This article</motion.p>
          <motion.p {...anim(TitlePresence)} custom={{ id: 2, duration: 1 }} className={smallTopText}>Date:</motion.p>
        </div>
        <div className={s.text_wrapper}>
          <motion.p {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }} className={smallTopText}>Polski</motion.p>
          <motion.p {...anim(TitlePresence)} custom={{ id: 2, duration: 1 }} className={smallTopText}>2023</motion.p>
        </div>
        <div className={s.text_wrapper}>
          <motion.p {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }} className={smallTopText}>Gàidhlig</motion.p>
        </div>
      </div>
      <div className={`${s.text_column} ${s.text_column_3}`}>
        <motion.p {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }} className={smallTopText}>02. 07 →</motion.p>
        <div className={s.text_wrapper}>
          <motion.p {...anim(TitlePresence)} custom={{ id: 1.0, duration: 1 }} className={smallTopText}>general concept of art</motion.p>
          <motion.p {...anim(TitlePresence)} custom={{ id: 2, duration: 1 }} className={smallTopText}>In the perspective</motion.p>
        </div>
      </div>
    </div>
  );
}
