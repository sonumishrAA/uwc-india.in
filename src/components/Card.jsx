import React, { useState } from "react";
import "./Cards.css";

function Card({
  title,
  discription,
  CTA,
  src,
  hindiTitle,
  hindiDescription,
  hindiCTA,
}) {
  const [isHindi, setIsHindi] = useState(false); // State to track language

  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm card relative">
      <img alt="" src={src} className="h-56 w-full object-cover" />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">
          {isHindi ? hindiTitle : title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {isHindi ? hindiDescription : discription}
        </p>

        <a
          href="/cdf"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          {isHindi ? hindiCTA : CTA}
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>

        {/* Smaller button positioned at the top-right */}
        <button
          onClick={() => setIsHindi(!isHindi)} // Toggle the language
          className="absolute top-4 right-4 px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          {isHindi ? "EN" : "हिंदी"}
        </button>
      </div>
    </div>
  );
}

export default Card;
