import React from 'react'
import Hero from '../components/Hero'
import SelectedWork from '../components/SelectedWork'
import Service from '../components/Service'
import Skills from '../components/Skills'


const HomePage= () => {
  return (
    <div>
      <section id="about">
        <Hero />
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
      <section id="contact"></section>
    </div>
  );
}

export default HomePage
