"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Glitch Effect Brand */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold glitch relative" data-text="RPV">
              RPV
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              { name: "Twitter", href: "https://x.com/greyhound_raj" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/raj-pratap-vidyarthi-38126622a/" },
              { name: "Mail", href: "mailto:rajpratapvidyarthi@gmail.com?subject=Hello%20RPV" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 hover:text-blue-400 transition-colors after:content-[''] after:absolute after:bg-blue-500 after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} RPV. All rights reserved.
          </div>
        </div>
      </div>

      {/* Glitch Keyframe Styles */}
      <style jsx>{`
        .glitch {
          position: relative;
          display: inline-block;
          color: white;
          animation: glitch-animation 1.8s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          z-index: -1;
        }

        .glitch::before {
          color: #ff0073;
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
            transform: translate(1px, -1px);
          }
          50% {
            transform: translate(-1px, 1px);
          }
          75% {
            transform: translate(1px, 1px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        @keyframes glitch-color-1 {
          0% {
            clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%);
          }
          50% {
            clip-path: polygon(0 8%, 100% 8%, 100% 12%, 0 12%);
          }
          100% {
            clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%);
          }
        }

        @keyframes glitch-color-2 {
          0% {
            clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
          }
          50% {
            clip-path: polygon(0 78%, 100% 78%, 100% 82%, 0 82%);
          }
          100% {
            clip-path: polygon(0 90%, 100% 90%, 100% 95%, 0 95%);
          }
        }
      `}</style>
    </footer>
  )
}
