import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container, Logo, NavItems } from "../index";
import { CiMail, CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-black w-full rounded-t-lg dark:border-t dark:border-gray-500/50">
      <Container className="mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            <Logo className="w-1/3 mx-auto -my-3 -mb-5" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-8">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white dark:text-gray-400 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="YOUR_INSTAGRAM_URL"
              aria-label="Instagram"
              className="text-white dark:text-white hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/megha-rana-630769322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              aria-label="LinkedIn"
              className="text-white dark:text-white hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://share.google/fnZIdLJOgd3mJoQT4"
              aria-label="GitHub"
              className="text-white dark:text-white hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center text-white dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CiMail className="w-4 h-4" />
              <a
                href="mailto:11.rana.megha@gmail.com"
                className="hover:text-orange-500 transition-colors"
              >
                11.rana.megha@gmail.com
              </a>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <CiPhone className="w-4 h-4" />
              <a
                href="tel:+917807873361"
                className="hover:text-orange-500 transition-colors"
              >
                +91 78078 73361
              </a>
            </div>
          </div>

          <div className="text-white dark:text-gray-400 text-sm">
            Designed by Megha Rana © {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}