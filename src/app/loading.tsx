export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Loading Animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-[#F11A23] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg
                className="w-16 h-16 text-white animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F11A23]/20 to-[#D4151E]/20 blur-3xl rounded-full animate-pulse"></div>
          </div>

          {/* Loading Message */}
          <h1 className="text-3xl md:text-4xl font-dela-gothic-one text-gray-800 font-bold mb-4">
            Baking Something Special
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Just like our fresh bread takes time to rise, we&apos;re preparing
            something wonderful for you. Please wait while we gather the finest
            ingredients...
          </p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-[#F11A23] rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-[#F11A23] rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-[#F11A23] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-8 opacity-30">
            <div className="w-8 h-8 bg-[#F11A23] rounded-full animate-pulse"></div>
            <div
              className="w-6 h-6 bg-[#F11A23] rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-10 h-10 bg-[#F11A23] rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="w-6 h-6 bg-[#F11A23] rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="w-8 h-8 bg-[#F11A23] rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-dela-gothic-one text-gray-800 font-bold mb-2">
              Did You Know?
            </h3>
            <p className="text-gray-600 font-sans text-sm">
              Our bakery has been serving Saipan since 1944, making us the
              island&apos;s first and finest bakery for over 80 years!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
