"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
    I am a dedicated full stack web developer with a passion for coding and a constant drive to learn new technologies. My enthusiasm for software development is reflected in my commitment to creating efficient and innovative solutions. I thrive on the challenge of tackling complex problems and continuously expanding my skill set to stay at the forefront of the ever-evolving tech landscape. My love for coding is not just a profession but a hobby that fuels my creativity and drives my ambition to deliver exceptional results.
    </motion.section>
  );
}
