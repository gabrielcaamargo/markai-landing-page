import React from 'react';

import About from './About';

export default function AboutWrapper(){
  return(
    <>
      <About
        introText="What is"
        highlighted="Custom Interface"
        image="images/showing_interface.svg"
        alternativeText="What is custom interface"
      />

      <About
        primaryClass="secondElement"
        textClass="description"
        introText="You can mantain your"
        highlighted="Website with Ai"
        image="images/cleaning_computer.png"
        alternativeText="You can mantain your website with Ai"
      />
    </>
  )
}