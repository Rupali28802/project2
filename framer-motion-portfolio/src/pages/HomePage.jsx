import React from 'react'
import Hero from '../components/Hero'
import SelectedWork from '../components/SelectedWork'
import Service from '../components/Service'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import About from "../components/About"


const HomePage= () => {
  return (
    <div>
      <section id="Home">
        <Hero />
      </section>
      <section>
        <About/>
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <SelectedWork />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default HomePage
