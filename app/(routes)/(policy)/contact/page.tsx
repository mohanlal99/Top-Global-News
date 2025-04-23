import React from "react";

import ContactPage from "../components/ContactPage";

export async function generateMetadata() {
  return{
    title:'Contact'
  }
}
export default function Contact() {
  return <ContactPage />;
}
