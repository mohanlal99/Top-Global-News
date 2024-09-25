"use client";
import ContactInfo from "./ContactInfo";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Privacy Policy</h1>

      {/* Information We Collect */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>At Top Global News, we collect the following information:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            <strong>Personal Information</strong>: Name, email address, and
            phone number when you subscribe to our newsletters or create an
            account.
          </li>
          <li>
            <strong>Usage Data</strong>: Information on how you interact with
            our website, such as pages visited, time spent, and click actions.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies</strong>: We use cookies
            to enhance your experience and collect analytics data.
          </li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p>The information collected is used to:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Provide and maintain our services.</li>
          <li>
            Send you updates, newsletters, and personalized content based on
            your interests.
          </li>
          <li>
            Improve our website&apos;s functionality and user experience through
            analytics.
          </li>
          <li>Respond to your inquiries, feedback, or support requests.</li>
        </ul>
      </section>

      {/* Cookies Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Cookies Policy</h2>
        <p>We use cookies to:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Remember your preferences and personalize your experience.</li>
          <li>
            Analyze website traffic and usage patterns to improve our services.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling
          cookies may affect the functionality of certain features on our
          website.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p>
          We may use third-party services for analytics and advertising, such as
          Google Analytics. These services may collect information sent by your
          browser as part of a web page request, including cookies and your IP
          address.
        </p>
      </section>

      {/* Data Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          100% secure.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Children&#39;s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If you are a parent or guardian and believe your child has provided us
          with personal information, please contact us.
        </p>
      </section>

      <ContactInfo />
    </div>
  );
};

export default PrivacyPolicyPage;
