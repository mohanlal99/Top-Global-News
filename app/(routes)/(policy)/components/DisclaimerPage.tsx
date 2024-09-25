"use client";
import ContactInfo from "./ContactInfo";

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Disclaimer</h1>

      {/* General Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">General Information</h2>
        <p>
          The information provided by Top Global News www.topglobalnews.in we us
          or our on our website is for general informational purposes only. All
          information on the website is provided in good faith, however, we make
          no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, or
          completeness of any information on the site.
        </p>
      </section>

      {/* External Links Disclaimer */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          External Links Disclaimer
        </h2>
        <p>
          The website may contain or you may be sent through the website links
          to other websites or content belonging to or originating from third
          parties. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, or completeness
          by us. We do not warrant, endorse, guarantee, or assume responsibility
          for the accuracy or reliability of any information offered by
          third-party websites linked through the site.
        </p>
      </section>

      {/* Professional Disclaimer */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Professional Disclaimer</h2>
        <p>
          The news content on this website is intended for informational
          purposes only and is not a substitute for professional advice. If you
          seek professional advice on any matter, always consult with a
          qualified professional in the appropriate field.
        </p>
      </section>

      {/* Personal Responsibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Personal Responsibility</h2>
        <p>
          You acknowledge that you are using our website and its information
          voluntarily. You agree that any decisions you make based on any
          information provided by Top Global News are solely your
          responsibility.
        </p>
      </section>

      {/* No Liability */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">No Liability</h2>
        <p>
          In no event shall Top Global News be liable to you for any damages,
          whether direct, indirect, incidental, consequential, or otherwise,
          arising from your use of the website or reliance on any information
          provided on the website. We shall not be liable for any errors or
          omissions in the content of this website.
        </p>
      </section>

      {/* Updates to Disclaimer */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Updates to Disclaimer</h2>
        <p>
          We may update this Disclaimer from time to time to reflect changes in
          our legal obligations or policies. We encourage you to regularly
          review this page for any changes.
        </p>
      </section>

      <ContactInfo />
    </div>
  );
};

export default DisclaimerPage;
