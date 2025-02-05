"use client"

import { motion } from "framer-motion"

const skills = [
  "Community Management",
  "Web3 Technologies",
  "Social Media Strategy",
  "Content Creation",
  "Event Planning",
  "Blockchain",
  "Token Economics",
  "Growth Hacking",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-12 glitch relative"
          data-text="Skills"
        >
          <span aria-hidden="true" className="container mx-auto text-center relative z-10">
            Skills
          </span>
          
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 shadow-md text-white hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(128, 90, 213, 0.5)",
              }}
            >
              <span className="glitch text-xl font-semibold" data-text={skill}>
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glitch {
          position: relative;
          color: white;
          display: inline-block;
          animation: glitch-animation 1.5s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #ff0073;
          background: transparent;
          overflow: hidden;
          z-index: -1;
        }

        .glitch::before {
          animation: glitch-color-1 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          color: #39ff14;
          animation: glitch-color-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-animation {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-2px, 2px);
          }
          75% {
            transform: translate(2px, 2px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        @keyframes glitch-color-1 {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          50% {
            clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%);
          }
          100% {
            clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%);
          }
        }

        @keyframes glitch-color-2 {
          0% {
            clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%);
          }
          50% {
            clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
          }
          100% {
            clip-path: polygon(0 70%, 100% 70%, 100% 75%, 0 75%);
          }
        }
      `}</style>
    </section>
  )
}
