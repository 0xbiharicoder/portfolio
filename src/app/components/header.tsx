"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-sm glitch-bg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold glitch" data-text="JohnDoe">
          RPV
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#projects" className="hover:text-blue-400 transition-colors">
                Professional Exp
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
