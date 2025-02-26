import React from "react";
import "./Cards.css";

function Card({
  title,
  description,
  CTA,
  src,
  onClick, // onClick function passed as prop
}) {
  return (
    <div
      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm card relative"
      onClick={onClick} // Trigger the onClick to open modal
    >
      <img alt="" src={src} className="h-56 w-full object-cover rounded-t-lg" />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm text-gray-500">{description}</p>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          {CTA}
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}

export default Card;
