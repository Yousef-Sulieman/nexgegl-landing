"use client";

import { motion } from "framer-motion";
import { Section } from "./ui";
import { VISION_MISSION_CONTENT } from "../../constants/vision-content";
import { Dictionary } from "../dictionaries/types";
import { fadeUp, stagger } from "../lib/motion";

export default function VisionMissionSection({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="vision"
      darker
      pattern="neural"
      className="border-t border-navy-800"
    >
      <motion.div
        className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-lg border border-navy-700 bg-navy-900/50 backdrop-blur-sm"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Vision*/}
        <motion.div className="relative group min-h-[400px]" variants={fadeUp}>
          <img
            src={VISION_MISSION_CONTENT.visionImage}
            alt={dict.visionMission.vision.imageAlt}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-900/90" />

          <div className="relative z-10 p-12 h-full flex flex-col justify-center">
            <motion.div
              className="w-16 h-1 bg-gold-500 mb-8"
              variants={fadeUp}
            />

            <motion.h3
              className="text-3xl font-bold text-white mb-6 uppercase tracking-wider"
              variants={fadeUp}
            >
              {dict.visionMission.vision.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-loose text-lg font-light text-justify"
              variants={fadeUp}
            >
              {dict.visionMission.vision.text}
            </motion.p>
          </div>
        </motion.div>

        {/*  Mission  */}
        <motion.div
          className="relative group min-h-[500px] border-t lg:border-t-0 lg:border-l border-navy-700"
          variants={fadeUp}
        >
          <img
            src={VISION_MISSION_CONTENT.missionImage}
            alt={dict.visionMission.mission.imageAlt}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-900/90" />

          <div className="relative z-10 p-12 h-full flex flex-col justify-center">
            <motion.div
              className="w-16 h-1 bg-gold-500 mb-8"
              variants={fadeUp}
            />

            <motion.h3
              className="text-3xl font-bold text-white mb-6 uppercase tracking-wider"
              variants={fadeUp}
            >
              {dict.visionMission.mission.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-loose text-lg font-light text-justify"
              variants={fadeUp}
            >
              {dict.visionMission.mission.text}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
