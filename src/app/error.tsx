"use client";

import { useEffect } from "react";
import { siteContact } from "@/lib/site-contact";

const linkClass =
  "font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700 hover:decoration-amber-700";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="mx-auto flex flex-1 max-w-lg flex-col items-center justify-center px-4 py-24 text-center"
    >
      <h1 className="text-2xl font-semibold text-stone-900">Something went wrong</h1>
      <p className="mt-2 text-stone-600">Please try again. If the problem continues, call or text us.</p>
      <p className="mt-3 text-sm text-stone-600">
        <a href={`tel:${siteContact.phoneE164}`} className={linkClass}>
          {siteContact.phoneDisplay}
        </a>
        <span className="mx-2 text-stone-400" aria-hidden>
          ·
        </span>
        <a href={`mailto:${siteContact.email}`} className={linkClass}>
          {siteContact.email}
        </a>
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
      >
        Try again
      </button>
    </main>
  );
}
