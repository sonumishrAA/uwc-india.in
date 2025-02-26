import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-page py-20  text-black">
      <div className="text-center mb-12 animate__animated animate__fadeIn">
        <h2 className="text-5xl font-bold tracking-tight">About Us</h2>
        <p className="text-xl mt-4 opacity-75">Our Mission and Values</p>
      </div>
      <div className="about-us-content max-w-4xl mx-auto px-6">
        <p className="text-xl mb-8 text-black-200">
          Welcome to UWC India, founded by Vivek Patel and Team. We are your
          trusted platform connecting you with skilled workers for all your
          construction and repair needs. Whether you're looking for masons,
          laborers, painters, or carpenters, we have the right talent for you. Our
          mission is to provide easy access to skilled workers while ensuring
          fair wages, transparent services, and better job opportunities. We're
          dedicated to supporting workers and strengthening the construction
          industry.
        </p>
        <h3 className="text-3xl font-semibold mt-8 opacity-90">Our Values:</h3>
        <ul className="list-disc ml-8 text-lg mt-6 space-y-4 opacity-90">
          <li className="transition-all duration-500 hover:text-pink-300">
            Transparency: Clear information and fair pricing for services.
          </li>
          <li className="transition-all duration-500 hover:text-pink-300">
            Trust: Building strong relationships with workers and clients.
          </li>
          <li className="transition-all duration-500 hover:text-pink-300">
            Commitment: Ensuring quality work and customer satisfaction.
          </li>
          <li className="transition-all duration-500 hover:text-pink-300">
            Empowerment: Helping workers access more job opportunities and
            enhance their skills.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
