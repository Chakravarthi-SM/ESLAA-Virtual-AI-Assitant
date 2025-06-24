import React, { useContext } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { dataContext } from "../Context/UserContext";

import Va from "../assets/ai.png";
import Loading from "../assets/speak.gif";
import aigif from "../assets/aiVoice.gif";
import { useNavigate } from "react-router-dom";

const VirtualAssitant = () => {
  const navigate = useNavigate();
  let {
    recognition,
    speak,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  } = useContext(dataContext);

  return (
    <>
      <div className="w-screen min-h-screen relative overflow-x-hidden flex items-center justify-center flex-col pt-0 pb-5 gap-5 bg-black">
        {/* Advanced Animated Background Layers */}
        <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
          {/* Neural network grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
        `,
                backgroundSize: "60px 60px",
                animation: "gridPulse 4s ease-in-out infinite",
              }}
            ></div>
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}

          {/* Dynamic gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-radial from-cyan-500/20 via-cyan-500/10 to-transparent rounded-full     blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-pink-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-gradient-radial from-purple-500/15 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Geometric shapes */}
          <div
            className="absolute top-20 left-20 w-4 h-4 border-2 border-cyan-400/40 rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute top-1/3 right-20 w-6 h-6 border-2 border-pink-500/40 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-8 h-8 border-2 border-purple-400/40 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Energy streams */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="energyGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line
              x1="10%"
              y1="20%"
              x2="90%"
              y2="80%"
              stroke="url(#energyGrad)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-pulse"
            />
            <line
              x1="20%"
              y1="80%"
              x2="80%"
              y2="20%"
              stroke="url(#energyGrad)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: "700ms" }}
            />
            <line
              x1="50%"
              y1="10%"
              x2="50%"
              y2="90%"
              stroke="url(#energyGrad)"
              strokeWidth="1"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </svg>
        </div>

        {/* Enhanced Back Button */}
        <div className="absolute top-2 left-1 md:top-5 md:left-5 px-3 py-1 text-xl gap-2 rounded-[20px] border-none cursor-pointer z-20">
          <button
            onClick={() => navigate("/")}
            className="group relative w-10 text-center h-10 flex items-center justify-center  text-xl rounded-[20px] border-none cursor-pointer bg-cyan-300 shadow-[2px_2px_50px_rgb(79,224,234)] text-black font-semibold hover:scale-105 transition-transform duration-200 overflow-hidden"
          >
            {/* Neon sweep effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> */}

            {/* Pulsing border */}
            {/* <div className="absolute inset-0 rounded-[20px] border-2 border-cyan-300/50 opacity-0 group-hover:opacity-100 animate-pulse"></div> */}

            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>

            {/* Additional glow */}
            {/* <div className="absolute -inset-2 bg-cyan-400/20 rounded-[24px] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div> */}
          </button>
        </div>

        {/* Revolutionary Avatar Enhancement */}
        <div className="relative -mt-10 sm:-mt-14 md:-mt-20">
          {/* Outer rotating energy ring */}
          <div
            className="absolute -inset-10 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-transparent to-pink-500 rounded-full animate-spin opacity-60 "
            style={{
              animationDuration: "15s",
              background:
                "conic-gradient(from 0deg, #06b6d4, transparent, #ec4899, transparent, #06b6d4)",
            }}
          ></div>

          {/* Middle pulsing ring */}
          {/* <div className="absolute -inset-12 border border-cyan-400/30 rounded-full animate-pulse"></div> */}

          {/* Inner holographic glow */}
          <div
            className="absolute -inset-8 bg-gradient-radial from-cyan-400/20 via-pink-500/10 to-transparent rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Floating energy particles around avatar */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-ping opacity-70"
              style={{
                top: `${50 + Math.sin(i * (Math.PI / 6)) * 120}%`,
                left: `${50 + Math.cos(i * (Math.PI / 6)) * 120}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2.5s",
              }}
            ></div>
          ))}

          {/* Data streams */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-t from-pink-500 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-purple-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-l from-cyan-400 to-transparent animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <img
            src={Va}
            alt="Virtual Assistant"
            className="max-h-[48vh] w-auto relative z-10 drop-shadow-2xl rounded-full"
          />

          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/5 to-transparent rounded-full animate-pulse pointer-events-none"></div>
        </div>

        {/* Advanced Title Enhancement */}
        <div className="relative text-center mt-10 sm:mt-7 md:mt-10">
          {/* Background glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>

          <span className="relative bg-gradient-to-r from-cyan-400 to-pink-500 text-[2vmax] bg-clip-text text-transparent font-bold ">
            I'm ESLAA, Your Advanced Virtual Assistant
          </span>

          {/* Underline animation */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse group-hover:w-full transition-all duration-1000"></div>

          {/* Floating accent dots */}
          <div className="absolute -top-4 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div
            className="absolute -top-2 right-0 w-1 h-1 bg-pink-500 rounded-full animate-ping opacity-60"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {!speaking ? (
          <div className="relative">
            {/* Button enhancement container */}
            <div className="absolute -inset-8 bg-gradient-radial from-cyan-400/20 via-pink-500/10 to-transparent rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <button
              onClick={() => {
                setPrompt("listening...");
                setSpeaking(true);
                setResponse(false);
                recognition.start();
              }}
              className="group relative w-55 h-10 flex items-center justify-center gap-5 text-xl rounded-[20px] border-none cursor-pointer bg-cyan-400 shadow-[2px_2px_50px_rgb(79,224,234)] text-black font-semibold hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
              {/* Multiple layer effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 rounded-[20px] scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-600"></div>

              {/* Rotating border */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 rounded-[24px] opacity-0 group-hover:opacity-50 animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>

              {/* Microphone pulse effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-200/30 rounded-full animate-ping opacity-0 group-hover:opacity-60"></div>
              </div>

              <span className="relative z-10 flex items-center justify-center gap-3">
                <div className="relative ">
                  <CiMicrophoneOn className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  {/* Microphone glow */}
                  <div className="absolute inset-0 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="font-semibold tracking-wider">
                  Talk to Eslaa
                </span>
              </span>

              {/* Additional outer glow */}
              <div className="absolute -inset-4 bg-cyan-400/30 rounded-[28px] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Floating action indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-2.5 relative">
            {/* Loading/Speaking state enhancements */}
            <div className="relative">
              {!response ? (
                <div className="relative">
                  {/* Enhanced loading container */}
                  <div className="absolute -inset-8 bg-gradient-radial from-cyan-400/20 via-pink-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>

                  {/* Rotating rings around loading */}
                  <div className="absolute -inset-4 border-2 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
                  <div
                    className="absolute -inset-2 border border-transparent border-r-pink-500 rounded-full animate-spin"
                    style={{
                      animationDirection: "reverse",
                      animationDuration: "1.5s",
                    }}
                  ></div>

                  <img
                    src={Loading}
                    alt="Loading"
                    className="w-25 h-auto relative z-10"
                  />

                  {/* Processing indicator */}
                  {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-1 bg-cyan-400/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 text-xs font-medium tracking-wider">
                      PROCESSING
                    </span>
                  </div> */}
                </div>
              ) : (
                <div className="relative">
                  {/* Enhanced speaking container */}
                  <div className="absolute -inset-8 bg-gradient-radial from-green-400/20 via-cyan-400/10 to-transparent rounded-full blur-2xl animate-pulse"></div>

                  <img
                    src={aigif}
                    alt="AI Speaking"
                    className="w-[40vh] h-25 relative z-10"
                  />

                  {/* Audio wave visualization */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-1">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-cyan-400 via-pink-500 to-purple-400 rounded-full animate-pulse"
                        style={{
                          height: `${Math.sin(i * 0.4) * 20 + 25}px`,
                          animationDelay: `${i * 80}ms`,
                          animationDuration: "1.2s",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Speaking indicator */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-2 py-1 bg-green-500/20 rounded-full border border-green-500/40 backdrop-blur-sm mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium tracking-wider">
                      ACTIVE
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced response text */}
            <div className="relative max-w-4xl">
              {/* Text background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-80"></div>

              {/* Text container */}
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-cyan-400/20">
                <p className="text-[1.3vmax] text-white text-center px-10 leading-relaxed relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent">
                    {prompt}
                  </span>
                  {/* Typewriter cursor */}
                  {/* <span className="inline-block w-1 h-6 bg-cyan-400 ml-2 animate-pulse"></span> */}
                </p>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-pink-500/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/40"></div>
              </div>
            </div>
          </div>
        )}

        {/* Side navigation indicators */}
        {/* <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4">
          {["🎤", "🧠", "⚡"].map((icon, i) => (
            <div key={i} className="group relative">
              <div className="w-10 h-10 bg-black/40 border border-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-lg">{icon}</span>
              </div>
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-3 py-1 bg-black/80 border border-cyan-400/30 rounded-lg backdrop-blur-sm">
                  <span className="text-cyan-400 text-xs font-medium">
                    {["VOICE", "AI", "SPEED"][i]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes gridPulse {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.3;
            }
          }

          .bg-gradient-radial {
            background: radial-gradient(
              ellipse at center,
              var(--tw-gradient-stops)
            );
          }
        `}</style>
      </div>
    </>
  );
};

export default VirtualAssitant;
