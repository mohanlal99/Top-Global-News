import React from "react";

import DisclaimerPage from "../components/DisclaimerPage";
export async function generateMetadata() {
  return {
    title: "Disclamer",
  };
}
export default function Disclaimer() {
  return <DisclaimerPage />;
}
