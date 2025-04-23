import React from "react";

import TermsOfServicePage from "../components/TreamOfServicePage";
export async function generateMetadata() {
  return {
    title: "Terms&Service",
  };
}
export default function TermsOfService() {
  return <TermsOfServicePage />;
}
