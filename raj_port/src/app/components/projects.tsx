"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Proto Mapper Community Operations",
    description:
      "Currently leading operations at Proto Mapper, managing a vibrant community of over 10,000 members. Successfully organized 80+ Map-a-thons, onboarded 1,000+ developers, and expanded the platform's reach to 20+ countries.",
  },
  {
    title: "Bluchisel Internship",
    description:
      "Worked as a Social Media Manager intern, developing technical content and social media strategies targeted at developer audiences.",
  },
  {
    title: "EnergyPro",
    description:
      "Developed a decentralized energy marketplace using Next.js, Solana, and Beckn Protocol, enabling secure and efficient energy transactions.",
  },
  {
    title: "CryptoCustodian",
    description:
      "Built a secure cryptocurrency wallet management system using React.js, Node.js, and blockchain technology to provide robust asset security.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 bg-dark relative overflow-hidden">
      {/* Glitchy Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-75 mix-blend-multiply blur-3xl animate-pulse" />

      <div className="container mx-auto text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-12 glitch"
          data-text="Projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experiences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mt-4">
                <motion.h3
                  className="text-xl font-semibold glitch"
                  data-text={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
