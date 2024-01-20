import React from "react"

import './index.scss'

import Layout from "../components/layout/layout.js"
import Head from '../components/head.js'
import Header from "../components/header/header.js"
import Hero from "../components/hero/hero.js"
import Projects from "../components/projects/projects.js"
import About from "../components/about/about.js"
import Contact from '../components/contact/contact.js'
import Footer from "../components/footer/footer.js"
import BackToTop from "../components/backToTop/backToTop.js"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </Layout>
  )
}

export default HomePage