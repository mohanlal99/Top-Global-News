import React from "react";

import PrivacyPolicyPage from "../components/PrivacyPolicyPage";
export async function generateMetadata() {
  return{
    title:'Privacy Policy'
  }
}
export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
