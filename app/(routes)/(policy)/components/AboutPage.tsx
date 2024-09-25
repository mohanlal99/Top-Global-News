"use client";
import ContactInfo from "./ContactInfo";

const AboutPage = () => {
  return (
    <div className="p-4">
      <h1
        className={
          "text-center pb-6 flex items-center justify-center w-full mb-6"
        }
      >
        About Top Global News
      </h1>
      {/* Mission Statement */}
      <p />
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          At <strong>Top Global News</strong>, our mission is to provide
          accurate, timely, and comprehensive news across all major categories.
          Whether it&apost;s global events, sports, business, or trending
          topics, we ensure that you stay informed with the latest and most
          relevant information.
        </p>
      </section>

      {/* Background */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why We Started</h2>
        <p>
          <strong>Top Global News</strong> was founded with the vision of
          creating a platform that provides all-encompassing news, keeping
          readers informed about important happenings across the world. As a
          single-person initiative, I started this website to ensure that all
          types of news—local and international—are accessible in one place.
          Starting Date: <strong> 1 August 2024 </strong>
        </p>
      </section>

      {/* Categories Covered */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Categories We Cover</h2>
        <p>
          From <strong>Cricket</strong> to <strong>World News</strong>,{" "}
          <strong>Business</strong> to <strong>Trending Topics</strong>,
          <strong>Top Global News</strong> covers a wide range of categories to
          ensure our readers are up-to-date with everything happening globally.
          No matter what your interests are, you will find comprehensive and
          accurate reporting here.
        </p>
      </section>

      {/* Vision for the Future */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          As we move forward, <strong>Top Global News</strong> aims to grow its
          reach and provide even more insightful, diverse, and timely news
          coverage. We strive to become a trusted source for all types of news,
          no matter where you are in the world.
        </p>
      </section>

      {/* Contact Information */}
      <ContactInfo />
    </div>
  );
};

export default AboutPage;
