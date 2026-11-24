import { motion } from "framer-motion";
import { Skills, SoftSkills } from "../components/index";
import {
  FaMicroscope,
  FaFlask,
  FaDna,
  FaBacteria,
  FaVial,
  FaBook,
  FaLaptop,
  FaClipboardCheck,
  FaShieldAlt,
} from "react-icons/fa";

const additionalSkills = [
  { name: "Microbial Identification", icon: <FaBacteria /> },
  { name: "Microscopy", icon: <FaMicroscope /> },
  { name: "Laboratory Techniques", icon: <FaFlask /> },
  { name: "DNA & Molecular Biology", icon: <FaDna /> },
  { name: "Sample Preparation", icon: <FaVial /> },
  { name: "Scientific Research", icon: <FaBook /> },
  { name: "Laboratory Documentation", icon: <FaClipboardCheck /> },
  { name: "Laboratory Safety & Hygiene", icon: <FaShieldAlt /> },
  { name: "Scientific Computer Applications", icon: <FaLaptop /> },
];

const researchInterests = [
  "Medical Microbiology",
  "Industrial Microbiology",
  "Environmental Microbiology",
  "Molecular Biology",
  "Immunology",
  "Biotechnology",
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-16 pb-20 dark:bg-black">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12 dark:text-white flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Science/Microscope.png"
            alt="Microscope"
            width="40"
            height="40"
          />
        </motion.h1>

        {/* Hard Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Skills />
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            Soft Skills
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
              alt="Soft Skills"
              width="30"
              height="30"
            />
          </h2>

          <SoftSkills />
        </motion.div>

        {/* Additional Technical Skills */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            Laboratory & Technical Skills
            <FaFlask className="text-orange-500" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.9 + index * 0.1,
                }}
              >
                <span className="text-orange-500 text-3xl mb-3">
                  {skill.icon}
                </span>

                <span className="text-white font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            Research Interests
            <FaDna className="text-orange-500" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest}
                className="p-5 rounded-lg bg-gray-800 text-white text-center font-semibold shadow-md border border-gray-700 hover:border-orange-500 transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.1 + index * 0.1,
                }}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}