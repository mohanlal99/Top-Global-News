"use client";
import ContactInfo from "./ContactInfo";

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Terms of Service</h1>

      {/* Acceptance of Terms */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
        <p>
          By accessing and using Top Global News, you agree to comply with these
          Terms of Service. If you do not agree with any part of these terms,
          please do not use our website.
        </p>
      </section>

      {/* User Conduct */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Use the website for any unlawful purposes or to solicit others to
            perform or participate in any unlawful acts.
          </li>
          <li>Post or transmit any abusive, defamatory, or obscene content.</li>
          <li>
            Attempt to interfere with the proper functioning of the website,
            including hacking or disrupting our servers.
          </li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
        <p>
          All content on Top Global News, including articles, images, and logos,
          is the property of Top Global News or its content suppliers and is
          protected by intellectual property laws. Unauthorized use of any
          content is prohibited.
        </p>
      </section>

      {/* User-Generated Content */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">User-Generated Content</h2>
        <p>
          If you submit or post any content (e.g., comments, feedback), you
          grant Top Global News a non-exclusive, royalty-free license to use,
          reproduce, and distribute such content in any media.
        </p>
      </section>

      {/* Disclaimer of Warranties */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Disclaimer of Warranties
        </h2>
        <p>
          The content on our website is provided as is without any warranties,
          express or implied. We do not guarantee the accuracy, completeness, or
          reliability of any content.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p>
          Top Global News shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of the website
          or inability to access the website.
        </p>
      </section>

      {/* Modifications to the Service */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Modifications to the Service
        </h2>
        <p>
          We reserve the right to modify or discontinue the website or any part
          thereof without notice at any time. We are not liable to you or any
          third party for any modification, suspension, or discontinuance of the
          service.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law provisions.
        </p>
      </section>

      <ContactInfo />
    </div>
  );
};

export default TermsOfServicePage;
