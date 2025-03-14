import React, { useState, useEffect } from 'react'
import ContactSection from './components/ContactSection'
import GitHubSection from './components/GitHubSection'

function App() {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [activeSkill, setActiveSkill] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold hero-gradient">
            Academic Portfolio
          </h1>
          <div className="space-x-8">
            <a href="#research" className="nav-link">Research</a>
            <a href="#publications" className="nav-link">Publications</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 pt-24 pb-8">
        <section className={`text-center py-20 section-transition ${visibleSections.has('hero') ? 'visible' : ''}`} id="hero">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold hero-gradient mb-6">Suraj Kumar</h2>
            <p className="text-xl text-gray-600 mb-8">Research Assistant at AMHR Lab | Computer Science Student | GPA: 3.79/4.00</p>
            <div className="flex justify-center gap-4">
              <a href="#research" className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors">
                View Research
              </a>
              <a href="https://www.linkedin.com/in/suraj14cs" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="research" className={`py-16 section-transition ${visibleSections.has('research') ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Research Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">RAG Models Research</h4>
              <p className="text-gray-700 leading-relaxed">
                Currently working on Retrieval-Augmented Generation (RAG) models for logical reasoning tasks
                in the application of rules and laws using large language models (LLMs) to enhance data-driven AI systems.
                Collaborating on machine learning models to model cognitive traits in individuals.
              </p>
            </div>
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Areas of Focus</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--secondary)] rounded-full"></span>
                  Machine Learning & AI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--secondary)] rounded-full"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--secondary)] rounded-full"></span>
                  Cognitive Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--secondary)] rounded-full"></span>
                  Full-Stack Development
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="publications" className={`py-16 section-transition ${visibleSections.has('publications') ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Publications</h3>
          <div className="space-y-6">
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Publication Title 1</h4>
              <p className="text-gray-600 italic mb-3">Journal/Conference Name (Year)</p>
              <p className="text-gray-700 mb-4">Authors: Your Name, Co-author 1, Co-author 2</p>
              <p className="text-gray-700">Brief description of the research and its impact.</p>
            </div>
          </div>
        </section>

        <section id="projects" className={`py-16 section-transition ${visibleSections.has('projects') ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Power App Development</h4>
              <p className="text-gray-700 mb-4">Developed a Power App to monitor electricity costs using Power FX and SQL, reducing data reload time by 5-10% through dynamic chemistry predictions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">Python</span>
                <span className="skill-tag px-3 py-1 rounded-full">SQL</span>
                <span className="skill-tag px-3 py-1 rounded-full">Power FX</span>
              </div>
            </div>
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Data RAG Pipeline</h4>
              <p className="text-gray-700 mb-4">Implemented an agent workflow using Langchain and Pinecone to process 5TB of data into vector embeddings for enhanced RAG capabilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">Python</span>
                <span className="skill-tag px-3 py-1 rounded-full">Langchain</span>
                <span className="skill-tag px-3 py-1 rounded-full">Pinecone</span>
              </div>
            </div>
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Stock Analysis Tool</h4>
              <p className="text-gray-700 mb-4">Created a Windows Form App for real-time stock data visualization with candlestick charts and dynamic filtering capabilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">C#</span>
                <span className="skill-tag px-3 py-1 rounded-full">.NET</span>
                <span className="skill-tag px-3 py-1 rounded-full">Windows Forms</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={`py-16 section-transition ${visibleSections.has('skills') ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">Python</span>
                <span className="skill-tag px-3 py-1 rounded-full">C#</span>
                <span className="skill-tag px-3 py-1 rounded-full">C++</span>
                <span className="skill-tag px-3 py-1 rounded-full">JavaScript</span>
                <span className="skill-tag px-3 py-1 rounded-full">Kotlin</span>
                <span className="skill-tag px-3 py-1 rounded-full">SQL</span>
              </div>
            </div>
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">TensorFlow</span>
                <span className="skill-tag px-3 py-1 rounded-full">PyTest</span>
                <span className="skill-tag px-3 py-1 rounded-full">Git</span>
                <span className="skill-tag px-3 py-1 rounded-full">.NET</span>
                <span className="skill-tag px-3 py-1 rounded-full">Qiskit</span>
                <span className="skill-tag px-3 py-1 rounded-full">LaTeX</span>
              </div>
            </div>
            <div className="project-card bg-white p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Research Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full">Machine Learning</span>
                <span className="skill-tag px-3 py-1 rounded-full">Data Analysis</span>
                <span className="skill-tag px-3 py-1 rounded-full">NLP</span>
                <span className="skill-tag px-3 py-1 rounded-full">RAG Models</span>
              </div>
            </div>
          </div>
        </section>

        <GitHubSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
