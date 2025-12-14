"use client";

import { useState } from "react";

export default function EmailButton() {
  const [showEmail, setShowEmail] = useState(false);
  const handleClick = () => {
    alert("Please copy my email:\n\nnina12mason@gmail.com");
  };

  return (
    <div className="space-y-3">
      <a
        href="mailto:nina12mason@gmail.com?subject=Let's%20Connect&body=Hi%20Nina,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
        className="block w-full rounded-xl bg-forest py-3 text-center text-cream font-medium hover:bg-forest/90 transition"
      >
        Email Me
      </a>

      {!showEmail && (
        <button
          onClick={() => handleClick()}
          className="text-sm underline text-forest/70 hover:text-forest"
        >
          Trouble opening your email app?
        </button>
      )}

      {showEmail && (
        <div className="rounded-lg border border-forest/30 bg-cream p-3 text-center">
          <p className="text-sm text-forest">
            Copy my email:
          </p>
          <p className="mt-1 font-mono text-sm text-forest">
            nina12mason@gmail.com
          </p>
        </div>
      )}
    </div>
  );
}

