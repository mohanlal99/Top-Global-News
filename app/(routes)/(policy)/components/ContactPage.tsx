"use client";
import { Button } from "@nextui-org/button";
import { Card, Input, Textarea } from "@nextui-org/react";

import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-5 lg:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Contact Info */}
      <Card className="mb-8 p-6 shadow-lg border border-gray-200 rounded-lg">
        <div className="space-y-2">
          <div className="p-2 md:p-6 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Contact Us
            </h2>
            <ContactInfo />
          </div>
          <p>
            <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
          </p>
          <p>
            <strong>Response Time:</strong> Well respond to your queries within
            24-48 hours.
          </p>
        </div>
      </Card>

      {/* Contact Form */}
      <Card className="p-6 shadow-lg border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <Input
            fullWidth
            required
            label="Your Name"
            placeholder="Enter your name"
          />
          <Input
            fullWidth
            required
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />
          <Textarea
            fullWidth
            required
            label="Your Message"
            placeholder="Write your message here"
            rows={4}
          />
          <Button className="mt-4 w-full" color="primary">
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactPage;
