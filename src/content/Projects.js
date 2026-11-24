// Replace these asset imports with real DNA Analyzer images/banners under src/assets/project/
import DnaAnalyzerImg from "../assets/project/images/Buildbook.png";
import DnaAnalyzerBanner from "../assets/project/banner/BuildbookBanner.png";

const categories = [
  "All",
  "Bioinformatics & Python",
  "Sequence Analysis",
];

const projects = [
  {
    name: "DNA Analyzer",
    category: "Bioinformatics & Python",
    image: DnaAnalyzerImg,
    banner: DnaAnalyzerBanner,
    description:
      "Python-based DNA sequence analysis tool built to inspect nucleotide sequences, calculate basic sequence metrics, and support foundational microbiology and genetic data exploration.",
    techStack: ["Python", "DNA Sequence Analysis"],
    type: "Personal",
    // Resolve https://share.google/fnZIdLJOgd3mJoQT4 to get her direct github.com/<username>/<repo> URL
    githubLink: "",
    liveLink: "",
  },
];

export { categories, projects };