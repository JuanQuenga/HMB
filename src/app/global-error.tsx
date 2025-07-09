"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="w-full max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              {/* Error Icon */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-[#F11A23] rounded-full flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F11A23]/20 to-[#D4151E]/20 blur-3xl rounded-full"></div>
              </div>

              {/* Error Message */}
              <h1 className="text-3xl md:text-4xl font-dela-gothic-one text-gray-800 font-bold mb-4">
                Critical Error
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
                We&apos;ve encountered a serious issue with our website. Our
                technical team has been notified and is working to resolve this
                immediately.
              </p>

              {/* Decorative Image */}
              <div className="relative mb-12 max-w-md mx-auto">
                <Image
                  src="/assets/photos/celebrating-1.jpg"
                  alt="Herman's Modern Bakery team"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-2xl object-cover w-full h-64"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#F11A23] text-white px-6 py-3 rounded-lg shadow-lg">
                  <p className="text-lg font-bold font-dela-gothic-one">
                    We&apos;re Here
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={reset}
                  className="bg-[#F11A23] hover:bg-[#D9101F] text-white px-8 py-4 rounded-xl font-bold font-dela-gothic-one transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="bg-white hover:bg-gray-50 text-[#F11A23] border-2 border-[#F11A23] px-8 py-4 rounded-xl font-bold font-dela-gothic-one transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Back to Home
                </Link>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
                <h3 className="text-xl font-dela-gothic-one text-gray-800 font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[#F11A23]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
                    </svg>
                    <a
                      href="tel:+16702341726"
                      className="text-gray-700 hover:text-[#F11A23] font-sans transition-colors duration-300"
                    >
                      (670) 234-1726
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[#F11A23]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a
                      href="mailto:info@hermansmodernbakery.com"
                      className="text-gray-700 hover:text-[#F11A23] font-sans transition-colors duration-300"
                    >
                      info@hermansmodernbakery.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Error Details (for development) */}
              {process.env.NODE_ENV === "development" && (
                <details className="mt-8 text-left max-w-2xl mx-auto">
                  <summary className="cursor-pointer text-[#F11A23] font-semibold font-sans mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-700 overflow-auto">
                    <p>
                      <strong>Error:</strong> {error.message}
                    </p>
                    {error.digest && (
                      <p>
                        <strong>Digest:</strong> {error.digest}
                      </p>
                    )}
                    <p>
                      <strong>Stack:</strong>
                    </p>
                    <pre className="whitespace-pre-wrap text-xs">
                      {error.stack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
