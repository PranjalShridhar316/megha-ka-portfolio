import React from "react";
import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaFlask,
  FaDna,
  FaBacteria,
  FaVial,
  FaBook,
  FaLaptop,
  FaSearch,
  FaClipboardCheck,
  FaShieldAlt,
  FaGraduationCap,
  FaTemperatureHigh,
  FaSyringe,
  FaFileAlt,
} from "react-icons/fa";

const Category = ({ title, icon, children }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-3xl font-semibold flex items-center gap-3 mb-6 text-gray-900 dark:text-white">
      <span className="text-orange-500">{icon}</span> {title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </motion.div>
);

const Card = ({ title, icon, items }) => (
  <motion.div
    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 shadow-sm"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
      <span className="text-orange-500">{icon}</span>
      {title}
    </h3>

    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Uses = () => {
  return (
    <motion.div
      className="mx-auto px-6 py-16 bg-white dark:bg-black min-w-full min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Laboratory & Research Toolkit 🔬
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          An overview of the scientific resources, laboratory equipment,
          research tools, and technologies that support my learning
          journey in microbiology and life sciences.
        </p>
      </div>

      {/* Laboratory Equipment */}
      <Category title="Laboratory Equipment" icon={<FaMicroscope />}>
        <Card
          title="Microscopy & Observation"
          icon={<FaMicroscope />}
          items={[
            "Compound light microscope",
            "Stereo microscope",
            "Microscope slides and coverslips",
            "Oil immersion objective",
            "Microscopic specimen observation",
          ]}
        />

        <Card
          title="Basic Laboratory Instruments"
          icon={<FaFlask />}
          items={[
            "Centrifuge",
            "Autoclave",
            "Incubator",
            "Hot air oven",
            "Analytical balance",
          ]}
        />
      </Category>

      {/* Microbiology Techniques */}
      <Category title="Microbiology Techniques" icon={<FaBacteria />}>
        <Card
          title="Microbial Studies"
          icon={<FaBacteria />}
          items={[
            "Microbial culture techniques",
            "Aseptic laboratory practices",
            "Microbial staining methods",
            "Bacterial morphology observation",
            "Microorganism identification principles",
          ]}
        />

        <Card
          title="Sample & Culture Preparation"
          icon={<FaVial />}
          items={[
            "Preparation of culture media",
            "Serial dilution techniques",
            "Inoculation techniques",
            "Sample preparation",
            "Laboratory specimen handling",
          ]}
        />
      </Category>

      {/* Molecular Biology */}
      <Category title="Molecular Biology & Biotechnology" icon={<FaDna />}>
        <Card
          title="Molecular Biology"
          icon={<FaDna />}
          items={[
            "DNA and RNA fundamentals",
            "PCR principles",
            "Gel electrophoresis principles",
            "DNA extraction concepts",
            "Genetic analysis fundamentals",
          ]}
        />

        <Card
          title="Biotechnology"
          icon={<FaSyringe />}
          items={[
            "Industrial microbiology concepts",
            "Biotechnology fundamentals",
            "Microbial applications",
            "Enzyme technology",
            "Bioprocess fundamentals",
          ]}
        />
      </Category>

      {/* Research Tools */}
      <Category title="Research & Academic Tools" icon={<FaSearch />}>
        <Card
          title="Research Resources"
          icon={<FaBook />}
          items={[
            "Google Scholar for scientific literature",
            "PubMed for biomedical research",
            "ResearchGate for academic networking",
            "NCBI for biological databases",
            "Scientific journals and publications",
          ]}
        />

        <Card
          title="Documentation & Analysis"
          icon={<FaFileAlt />}
          items={[
            "Microsoft Word for research documentation",
            "Microsoft Excel for data organization",
            "PowerPoint for scientific presentations",
            "Laboratory record maintenance",
            "Scientific report preparation",
          ]}
        />
      </Category>

      {/* Laboratory Safety */}
      <Category title="Laboratory Safety & Practices" icon={<FaShieldAlt />}>
        <Card
          title="Safety Equipment"
          icon={<FaShieldAlt />}
          items={[
            "Laboratory coats",
            "Protective gloves",
            "Safety goggles",
            "Personal protective equipment (PPE)",
            "Laboratory hygiene practices",
          ]}
        />

        <Card
          title="Laboratory Practices"
          icon={<FaClipboardCheck />}
          items={[
            "Sterilization principles",
            "Laboratory waste management",
            "Biosafety awareness",
            "Safe specimen handling",
            "Standard laboratory protocols",
          ]}
        />
      </Category>

      {/* Digital Workspace */}
      <Category title="Digital Workspace" icon={<FaLaptop />}>
        <Card
          title="Software & Productivity"
          icon={<FaLaptop />}
          items={[
            "Microsoft Office Suite",
            "Google Workspace",
            "Microsoft Excel",
            "PowerPoint",
            "Digital research documentation",
          ]}
        />

        <Card
          title="Learning & Development"
          icon={<FaGraduationCap />}
          items={[
            "Online scientific learning platforms",
            "Academic research resources",
            "Scientific webinars and seminars",
            "Research paper reading",
            "Continuous professional development",
          ]}
        />
      </Category>
    </motion.div>
  );
};

export default Uses;