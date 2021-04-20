import React from 'react';

import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
   
    <section className="my-5">
       <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <h1 id="about">Who am I?</h1>
    </section>
   
  )}

export default About;