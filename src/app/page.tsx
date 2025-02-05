import Header from "./components/header"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Skills from "./components/skills"

import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      
      <Footer />
    </main>
  )
}

