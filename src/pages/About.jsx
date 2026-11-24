import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import {
  ContactForm,
  EducationCertifications,
  ExperienceTimeline,
} from "../components/index";
import { GithubProfile } from "../hooks/index";
import Resume from "../assets/resume/Megha_Rana_resume.pdf";

export default function About() {
  const [profileData, setProfileData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await GithubProfile();
      setProfileData(data);
    }

    fetchData();
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 dark:bg-black">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 dark:bg-black dark:text-white">

        {/* About Section */}
        <div className="py-8 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {profileData && (
            <div
              className={`relative w-full max-w-md aspect-[3/4] md:aspect-auto md:h-full transition-opacity transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              } duration-500`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />

              <img
                src={profileData.avatar_url}
                alt="Megha Rana"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          )}

          <div
            className={`space-y-6 md:space-y-8 transition-opacity transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            } duration-500 delay-200`}
          >
            <div className="space-y-4">

              <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
                About Me
              </h1>

              <h2 className="text-xl dark:text-gray-400 text-gray-700">
                Microbiology Student | Aspiring Researcher
              </h2>

            </div>

            <p className="dark:text-gray-300 text-gray-500 leading-relaxed">
              Hello! I&apos;m Megha Rana, a passionate Microbiology student
              with a keen interest in understanding microorganisms,
              microbial interactions, and their impact on human health
              and the environment. I enjoy exploring the fascinating
              world of microbiology and learning how scientific
              discoveries contribute to healthcare, biotechnology,
              and environmental sustainability.
            </p>

            <p className="dark:text-gray-300 text-gray-500 leading-relaxed">
              I am enthusiastic about developing my knowledge of
              microbiological techniques, laboratory practices,
              microbial identification, and scientific research.
              My goal is to continuously expand my scientific
              understanding, gain practical laboratory experience,
              and contribute to meaningful research and innovations
              in the field of life sciences.
            </p>

            <a href={Resume} download="Megha_Rana_Resume.pdf">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </button>
            </a>

          </div>
        </div>

        {/* Experience Section */}
        <div
          className={`py-16 md:py-24 transition-opacity transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } duration-500 delay-400`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center gap-2 justify-center">
            Academic &amp; Research Experience
          </h2>

          <ExperienceTimeline />
        </div>

        {/* Education & Certifications */}
        <div
          className={`py-16 md:py-24 transition-opacity transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } duration-500 delay-600`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center gap-2 justify-center">
            Education &amp; Certifications
          </h2>

          <EducationCertifications />
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">

          <div
            className={`w-full max-w-lg md:max-w-xl lg:max-w-2xl py-8 md:py-16 px-6 md:px-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl transition-all transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } duration-500 delay-800`}
            id="contact"
          >

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 md:mb-10 flex items-center gap-2 justify-center">
              Contact Me
            </h2>

            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}