import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-page py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mt-4">Our Mission and Values</p>
      </div>
      <div className="about-us-content max-w-4xl mx-auto px-4">
        <p className="text-xl text-gray-700">
          Welcome to UWC India, your trusted platform for connecting with
          skilled construction workers, including masons, laborers, painters,
          and carpenters. Our mission is to provide easy access to skilled
          workers for construction and repair needs while promoting fair wages,
          transparent services, and helping workers find better job
          opportunities. We are committed to supporting workers' livelihoods and
          building a stronger workforce in the construction industry.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">
          Our Values:
        </h3>
        <ul className="list-disc ml-8 text-gray-700 mt-4">
          <li>
            Transparency: Providing clear information and fair pricing for
            services.
          </li>
          <li>
            Trust: Building strong relationships with workers and clients.
          </li>
          <li>Commitment: Ensuring quality work and customer satisfaction.</li>
          <li>
            Empowerment: Helping workers access more job opportunities and
            improve their skills.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
