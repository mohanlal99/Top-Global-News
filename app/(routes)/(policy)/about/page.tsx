import React from "react";

import AboutPage from "../components/AboutPage";

export async function generateMetadata() {
  return{
    title:'About'
  }
}

export default function About() {
  return <AboutPage />;
}
