"use client";

import { useState, useContext } from "react";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import { anim, TitlePresence } from "@/helpers/anim";

const Paragraph = ({ text, index = 0, duration = 1 }) => {
  return (
    <>
        <SplitText
          LineWrapper={({ lineIndex, children }) => (
            <motion.p
              {...anim(TitlePresence)}
              custom={{ id: lineIndex + index, duration }}
              className="wrapper"
            >
              {children}
            </motion.p>
          )}
        >
          {text}
        </SplitText>
    </>
  );
};

export default Paragraph;
